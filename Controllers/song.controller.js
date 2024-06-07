import express from 'express';
import SongModel from '../Modals/songs.model.js';
export const SongController = express.Router();


SongController.get('/songs', async (req, res) => {
	const data = await SongModel.getAllRecords()
	res.send(data)
	console.log(data);
});


SongController.get('/songs/:id', async (req, res) => {
	const data = await SongModel.getRecordById(req.params.id)
	res.send(data);
    console.log(req.params)
});


// insert into song table
SongController.post('/PostSongs', async (req, res) => {
	const data = await SongModel.createRecord(req.body)
	res.send(data)
    console.log(req.body); 
});

// Update song table
SongController.put('/songs', async (req, res) => { 
	const data = await SongModel.updateRecord(req.body) 
	res.send(data)

	console.log(req.body); 
 });


  // i deleted a song succesfully
  SongController.delete('/deleteSong', async (req, res) => { 
	const data = await SongModel.deleteRecord(req.body) 
	res.send(data)

	console.log(req.body); 
 });