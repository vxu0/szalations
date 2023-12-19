// use express dep to create web server
const path = require("path");
const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

const albums_newest_first = [
    "sos",
    "ctrl-deluxe",
    "ctrl",
    "z"
  ]

// first allow Node to access our built React project using
// the express.static function for static files.
app.use(express.static(path.resolve(__dirname, "../client/public")));
// TODO: reverse proxy?
// A reverse proxy sits in front of a web app and performs
// supporting operations on the requests, apart from directing
// requests to the app. It can handle error pages, compression,
// caching, serving files, and load balancing among other things.
// Handing over tasks that do not require knowledge of application
// state to a reverse proxy frees up Express to perform specialized
// application tasks. For this reason, it is recommended to run
// Express behind a reverse proxy like Nginx or HAProxy in
// production.


// create endpoint (i.e. handle GET requests) for route /api
app.get("/api", (req, res) => {
    res.send({message: "hello from server!", extra: ":*)"});
});

app.get("/fruit", (req, res) => {
    res.send({name: "pear"});
});

// app.get("/album/ctrl", (req, res) => {
//     // res.readFile
//     res.json({title: "CTRL"});
// });
// const album_titles = {
//     "sos": "SOS",
//     "ctrl": "Ctrl",
//     "ctrl-deluxe": "Ctrl (Deluxe)",
//     "z": "Z",
// }

app.get("/album/:id", (req, res) => {
    // console.log("requested album:", req.params.title);
    var id = req.params.id;
    // res.json({title: album_titles[album]});
    fs.readFile(path.resolve(__dirname, "../client/public", albums_newest_first[id]+".json"), "utf8", (err, data) => {
        if (err) console.log(err);
        res.send(data);
    })
});

// app.get("/song/:id", (req, res) => {
//     // console.log("requested song id:", req.params.id);
//     var track_id = req.params.id;
//     fs.readFile(path.resolve(__dirname, "../client/public", albums_newest_first[id]+".json"), "utf8", (err, data) => {
//         if (err) console.log(err);
//         res.send(data);
//     })
// });

// TODO: find out how to pull data directly from spotify rather than use
// json files. Upon loading album data, should also pull all songs using
// track ids from album data and load onto page (showing popularity).
// so, the songs displayed depend on the currently displayed album.
// useState hooks for current album and current song. GET requests should
// have path of form /play/:album-id/:song-id. (need to change from album
// title to id.)
// then, add user album/song select interface.

// app.get("/album/sos", (req, res) => {
//     // res.readFile
//     res.json({title: "SOS"});
// });

// all other get requests not handled by api will return to React app.
// our server will respond with our React app
// this doesnt work?
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
