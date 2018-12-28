import { client } from 'gapi-client';

const apiKey = process.env.REACT_APP_API_KEY;

export default () => {
  client.init({ apiKey });
  return client
    .load('youtube', 'v3')
    .then(() =>
      client.youtube.channels.list({
        id: 'UCvO6uJUVJQ6SrATfsWR5_aA',
        part: 'snippet,contentDetails'
      })
    ) // 1) request a list of channels that match the channel id with details about uploads
    .then(({ result }) =>
      client.youtube.playlistItems.list({
        playlistId: result.items[0].contentDetails.relatedPlaylists.uploads,
        part: 'snippet,contentDetails',
        maxResults: '49'
      })
    ) // 2) request playlist of videos that match the uploads of our channel
    .then(({ result }) => result.items) // 3) return just the array of videos
    .catch(err => {
      throw new Error(`api fetch failed ${err}`);
    });
};
