
import express from 'express';
import artistModel from '../Modals/album.modal.js';
import albumModal from '../Modals/album.modal.js';
export const albumController = express.Router();

albumController.get('/albums', async (req, res) => {
	const data = await albumModal.getAllRecords()
	res.send(data)
});

albumController.get('/albums/:id', async (req, res) => {
	const data = await albumModal.getRecordById(req.params.id)
	res.send(data);
    console.log(req.params)
});

//
// insert into album table

albumController.post('/albumTable', async (req, res) => {
	const data = await albumModal.createRecord(req.body)
	res.send(data)
    console.log(req.body); 
});

//Update Supabase
albumController.put('/UpdateAlbum', async (req, res) => { 
	const data = await albumModal.updateRecord(req.body) 
	res.send(data)

	console.log(req.body); 
 });


 // i deleted an albums succesfully
 albumController.delete('/deleteAlbum', async (req, res) => { 
	const data = await albumModal.deleteRecord(req.body) 
	res.send(data)

	console.log(req.body); 
 });