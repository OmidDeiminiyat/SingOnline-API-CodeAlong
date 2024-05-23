import { supabase } from '../Config/supabase.config.js';

export default class SongModel {
	static async getAllRecords() {
		try {
			const { data, error } = await supabase
				.from('songs')
				.select('id, title, created_at, artists(id, name)')

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
				.from('songs')
				.select('*, artists(id, name)')
				.eq('id', id)

			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af sang: ${error}`)
		}
	}	

    // insert into songs table in supabase
        static async createRecord(insert) {
            try {
                const { data, error } = await supabase
                .from('songs')
                .insert([
                    {
                        title: insert.title,
                        content: insert.content,
                        lyrics: insert.lyrics,
                        artist_id: insert.artist_id
                    }
                ])
                if(error) {
                    throw new Error(error)
                } else {
                    return data
                }
    
             } catch (error) {
                console.error(`Fejl i oprettelse af sang: ${error}`)
            }
        }



// update song in Supabase
        static async updateRecord(formdata) { 
            try {
                let { data, error } = await supabase 
                .from('songs') 
                .update([ 
                    { 
                        title: formdata.title, 
                        content: formdata.content, 
                        lyrics: formdata.lyrics, 
                        artist_id: formdata.artist_id 
                    } 
                ]) 
                .eq('id', formdata.id)
                if(error) {
                    throw new Error(error.message)
                }
    
            }
            catch(error) {
                console.error(error)
            }
        }   


        // Delete from song table
// i deleted a song succesfully
static async deleteRecord(deleteSong) { 
	try {
		let { data, error } = await supabase
   .from('songs')
   .delete()
   .eq('id', deleteSong.id)

		if(error) {
			throw new Error(error.message)
		}

	}
	catch(error) {
		console.error(error)
	}
}


}

