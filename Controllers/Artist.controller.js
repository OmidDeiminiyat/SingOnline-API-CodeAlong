import express from 'express'; 
import artistModel from '../Modals/artist.modal.js';
export const artistController = express.Router();



artistController.get('/Artist', async (req, res) => {

let data = await artistModel.getArtistRecord();
    res.send(data);
})