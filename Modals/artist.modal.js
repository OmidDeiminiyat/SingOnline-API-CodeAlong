import { supabase } from '../Config/supabase.config.js';

export default class artistModel {
	static async getAllRecords() {
		try {
			const { data, error } = await supabase
				.from('artists')
				.select('id')

			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af sangliste: ${error}`)
		}
	}
    
    static async getRecordById(id) {
		try {
			const { data, error } = await supabase
				.from('artists')
				.select('*')
				.eq('id', id)

			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af artist: ${error}`)
		}
	}	


	// insert into artist table in supabase
	static async createRecord(newArtist) {
		try {
			const { data, error } = await supabase
			.from('artists')
			.insert([
				{
					name: newArtist.name,
					created_at: newArtist.created_at,
					description: newArtist.description,
					image: newArtist.image
				}
			])
			if(error) {
				throw new Error(error.message)
			}
	
		}
		catch(error) {
			console.error(error)
		}
	}




// Update artist in Supabase
static async updateRecord(artistData) { 
	try {
		let { data, error } = await supabase 
		.from('songs') 
		.update([ 
			{ 
				name: artistData.name, 
				content: artistData.description
			
			} 
		]) 
		.eq('id', artistData.id)
		if(error) {
			throw new Error(error.message)
		}

	}
	catch(error) {
		console.error(error)
	}
}  

}
