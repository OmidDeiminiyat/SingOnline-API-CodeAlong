import express from 'express'; 
import SongModel from '../Modals/songs.model.js';
export const SongController = express.Router();



SongController.get('/newSongs', async (req, res) => {

let data = await SongModel.getAllRecords();
    res.send(data);
})