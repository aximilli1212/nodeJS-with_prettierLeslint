const express = require("express")
// const Sequelize = require("sequelize")
const Playlist = require('./models/playlist');

const app = express();

//Get all Playlists
app.get('/api/playlists', function(req,res){
    Playlist.findAll().then(response=>{
        res.json(response);
    })
})
//Get Single Playlist
app.get('/api/playlists/:id', function(req,res){
    let {id} = req.params;
    Playlist.findByPk(id).then(response=>{
        res.json(response);
    })
})

app.listen(8000,()=>{
    console.log("server started on: 8000")
})

