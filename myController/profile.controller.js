
import express from 'express';
import profile from '../MyModels/profile-models.js';
export const profileController = express.Router();  // I added profileController in index.js





// First i insert a artist in profile table using POST Method
profileController.post('/profile', async (req, res) => {
	const data = await profile.createRecord(req.body)
	res.send(data)
    console.log(data);
});

// then i read the user i profile page
profileController.get('/profile/GetInfo', async (req, res) => {
	const data = await profile.getAllRecords()
	res.send(data)
    console.log(data);
});

// i update profile and change info using id
profileController.put('/profile/update', async (req, res) => {
	const data = await profile.updateRecord(req.body)
	res.send(data)
    console.log(data);
});


// i update profile and change info using id
profileController.delete('/profile/Delete', async (req, res) => {
	const data = await profile.deleteRecord(req.body)
	res.send(data)
    console.log(data);
});

