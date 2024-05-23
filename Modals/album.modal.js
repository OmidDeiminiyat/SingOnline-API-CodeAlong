import { supabase } from '../Config/supabase.config.js';

 // Songs Modellen
export default class albumModal {
    static async getAlbumModal() {
     
        try {
           
            const { data, error } = await supabase
                  .from('albums')
                  .select('id, title, description')
            if(error) {
                throw new Error(error)
            } else {
                return data
            }
        
        }
        catch(error) {
            console.error(`Fejl: kan ikke hente sangliste, ${error}`)
        }




       
   }
   static async getRecordById() {
            
   }

// insert into album table

static async createRecord(newAlbum) {
    try {
        const { data, error } = await supabase
        .from('albums')
        .insert([
            {
                title: newAlbum.title,
                description: newAlbum.description,
                created_at: newAlbum.created_at,
                artist_id: newAlbum.artist_id
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



   // Update albumm in Supabase
static async updateRecord(AlbumData) { 
	try {
		let { data, error } = await supabase 
		.from('albums') 
		.update([ 
			{ 
				title: AlbumData.title, 
				description: AlbumData.description,
                created_at: AlbumData.created_at,
                artist_id: AlbumData.artist_id
			} 
		]) 
		.eq('id', AlbumData.id)
		if(error) {
			throw new Error(error.message)
		}

	}
	catch(error) {
		console.error(error)
	}
}  

 }




       
    
   