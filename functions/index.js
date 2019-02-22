const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");
const cookieParser = require("cookie-parser")();
// const withAuth = require("./withAuth");
const withAuth = require("./validateFirebaseIdToken");

admin.initializeApp();

const app = express();

const VERSION = "#7";

app.use(cors);
app.use(cookieParser);

app.get("/login", function(request, response) {
  console.log(VERSION, request.url); // TODO Check if is auth, if not redirect to /login
  response.send("Hello Storybook from Firebase! Please Login first");
});

app.use(withAuth);

app.use(express.static("static"));

exports.storybook = functions.https.onRequest(app);
