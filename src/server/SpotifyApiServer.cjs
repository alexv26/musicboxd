const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});
const PORT = process.env.PORT || 3001;

let accessToken = null;
let tokenExpiresAt = 0;

app.use(cors()); // Allow frontend to call this backend

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

async function getAccessToken() {
  const now = Date.now();
  if (accessToken && now < tokenExpiresAt) return accessToken;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  if (response.ok) {
    accessToken = data.access_token;
    tokenExpiresAt = now + (data.expires_in - 10) * 1000;
    return accessToken;
  } else {
    console.error("Token request failed", data); // << ADD THIS
    throw new Error(
      `Failed to get token: ${data.error_description || JSON.stringify(data)}`
    );
  }
}

// Create an endpoint for your frontend to get the token
app.get("/api/token", async (req, res) => {
  try {
    const token = await getAccessToken();
    res.json({ access_token: token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
