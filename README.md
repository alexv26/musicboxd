# Musicboxd

Welcome to Musicboxd, the site designed to empower music lovers to share their love of music with others. With this app, users can leave reviews on their favorite albums, create lists of albums, catalogue their music journey, and much more. This website is a work in progress.

# Running

To run, follow these steps:

1. Navigate to the home directory
2. Create a .env file containing a `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`, which can be optained via [Spotify's developer site](https://developer.spotify.com/dashboard).
3. Run `$ npm i` to install dependencies.
4. Run `$ npm run dev` to start a localhost of the website
5. Run `$ node src/server/SpotifyApiServer.cjs` to generate Spotify access tokens.
