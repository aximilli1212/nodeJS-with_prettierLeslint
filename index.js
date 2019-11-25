const express = require("express")
const Sequelize = require("sequelize")
const {Op} = Sequelize;
const Playlist = require('./models/playlist');

const app = express();

//Get all Playlists
app.get('/api/playlists', function(req,res){
    let filter = {};
    let {q} = req.query;
    if(q){
        filter = {
            where:{
                name:{
                    [Op.like]: `${q}%`
                }
            }
        }
    }

    Playlist.findAll(filter).then(response=>{
        res.json(response);
    })
})

//Get Single Playlist
app.get('/api/playlists/:id', function(req,res){
    let {id} = req.params;
    Playlist.findByPk(id).then(response=>{
        if(response){
            res.json(response);
        }else{
            res.status(404).send();
        }
    })
})

app.listen(8000,()=>{
    console.log("server started on: 8000")
})

