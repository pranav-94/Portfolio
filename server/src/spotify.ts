// We access our values with environment variables from Cloudflare Workers' bindings
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// Define the expected response structure for the access token
interface SpotifyAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
}

// Function to encode form data
const encodeFormData = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

// Function to get an access token from Spotify API
const getAccessToken = async (env): Promise<SpotifyAuthResponse> => {
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

  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.statusText}`);
  }

  return response.json() as Promise<SpotifyAuthResponse>;
};

// Function to fetch the currently playing song
export const getNowPlaying = async (env): Promise<any> => {
  const { access_token }: SpotifyAuthResponse = await getAccessToken(env);
  
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }

  return response.json();
};
