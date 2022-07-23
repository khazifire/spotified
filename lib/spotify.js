const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists';
const USERS_ENDPOINT ="https://api.spotify.com/v1/users/me"
const RECOMMENDATIONS = "https://api.spotify.com/v1/recommendations"
const TOPTRACKS = "https://api.spotify.com/v1/me/top/tracks"
const TOPARTIST = "https://api.spotify.com/v1/me/top/artists"


const getAccessToken = async (refresh_token) => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });
    return response.json();
};

export const getUsersPlaylists = async (refresh_token) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch(PLAYLISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
};

export const getUsersInfo = async (refresh_token) => {
  const {access_token} = await getAccessToken(refresh_token);
  return fetch(USERS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async (refresh_token) => {
  const {access_token} = await getAccessToken(refresh_token);
  return fetch(TOPTRACKS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopArtists = async (refresh_token) => {
  const {access_token} = await getAccessToken(refresh_token);
  return fetch(TOPARTIST, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

