const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");
const cookieParser = require("cookie-parser")();
const withAuth = require("./validateFirebaseIdToken");

admin.initializeApp();

const app = express();

app.use(cors);
app.use(cookieParser);

app.get("/login", function(request, response) {
  response.sendFile(__dirname + "/auth.html");
});

app.use(withAuth);

app.use(express.static("static"));

exports.storybook = functions.https.onRequest(app);
