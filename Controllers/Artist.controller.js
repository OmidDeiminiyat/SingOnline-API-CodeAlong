
import express from 'express';
import artistModel from '../Modals/artist.modal.js';
export const artistController = express.Router();

artistController.get('/artists', async (req, res) => {
	const data = await artistModel.getAllRecords()
	res.send(data)
});

artistController.get('/artists/:id', async (req, res) => {
	const data = await artistModel.getRecordById(req.params.id)
	res.send(data);
    console.log(req.params)
});



/*
import express from 'express'; 
import artistModel from '../Modals/artist.modal.js';
export const artistController = express.Router();



artistController.get('/Artist', async (req, res) => {

let data = await artistModel.getArtistRecord();
    res.send(data);
})

*/