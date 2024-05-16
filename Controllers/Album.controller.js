import express from 'express'; 
import albumModal from '../Modals/album.modal.js';
export const albumController = express.Router();



albumController.get('/Album', async (req, res) => {

let data = await albumModal.getAlbumModal();
    res.send(data);
})