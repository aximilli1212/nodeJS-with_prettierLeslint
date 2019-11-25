const express = require("express")
const Sequelize = require("sequelize")

const app = express();
const sequelize = new Sequelize('sqlite:chinook.db');

//Create model
const Playlist = sequelize.define('playlist',{
    id:{
        field:'PlaylistId',
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name: {
        field: 'Name',
        type: Sequelize.STRING,
    },
},
    {
       timestamps: false
    })

//Get all Playlists
app.get('/api/playlists', function(req,res){
    Playlist.findAll().then(response=>{
        res.json(response);
    })
})

app.listen(8000,()=>{
    console.log("server started on: 8000")
})

