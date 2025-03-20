import { Hono } from "hono";
import { cors } from "hono/cors";


const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const encodeFormData = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

interface SpotifyTokenResponse {
  access_token: string;
}

// 🎯 Now `env` is passed in and used instead of `process.env`
const getAccessToken = async (env: any): Promise<SpotifyTokenResponse> => {
  const client_id = env.SPOTIFY_CLIENT_ID;
  const client_secret = env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = env.SPOTIFY_REFRESH_TOKEN;

  if (!client_id || !client_secret || !refresh_token) {
    throw new Error("Missing Spotify API credentials.");
  }

  const basic = btoa(`${client_id}:${client_secret}`);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encodeFormData({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json() as Promise<SpotifyTokenResponse>;
};

const getNowPlaying = async (env: any) => {
  const { access_token } = await getAccessToken(env);
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }

  const song: any = await response.json();
  if (!song.item) {
    return { isPlaying: false };
  }

  return {
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((artist: { name: string }) => artist.name).join(", "),
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  };
};

const app = new Hono();

app.use(
  cors({
    origin: "*", // Allow all origins (adjust as needed)
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowHeaders: ["Content-Type", "Authorization"], // Allowed headers
    maxAge: 600, // Cache preflight response for 10 minutes
  })
);

app.get("/", async (c) => {
  try {
    const songData = await getNowPlaying(c.env); // 🌟 Pass `env` from Cloudflare Worker
    return c.json(songData, 200, {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    });
  } catch (error) {
    return c.json({ error: "Failed to fetch now playing" }, 500);
  }
});

export default app;
