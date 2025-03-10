import fetch from 'isomorphic-fetch';
import querystring from 'querystring';
import 'dotenv/config';  


// Environment variables (Make sure they are set in your .env file)
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;


// API Endpoints
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// Encode client credentials for authorization
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// Function to get a new access token
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return response.json();
};

// Function to get the currently playing song
const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }

  const song = await response.json();
  if (!song.item) {
    return { isPlaying: false };
  }

  return {
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((artist) => artist.name).join(', '),
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  };
};

// Express API route handler
import express from 'express';
const app = express();

app.get('/now-playing', async (req, res) => {
  const songData = await getNowPlaying();
  
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  return res.status(200).json(songData);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
