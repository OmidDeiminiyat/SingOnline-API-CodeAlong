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


}





   
 /*
 export default class SongModel {
    static async getAllRecords() {
     
        try {
           
            const { data, error } = await supabase
                  .from('songs')
                  .select('id')
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
 }


 */



        /*
        try {
           
            const { data, error } = await supabase
                  .from('songs')
                  .select('id, title, content, created_at, artist_id')
            if(error) {
                throw new Error(error)
            } else {
                return data
            }
        
        }
        catch(error) {
            console.error(`Fejl: kan ikke hente sangliste, ${error}`)
        }


//Artists Model

        try {
           
            const { data, error } = await supabase
                  .from('artists')
                  .select('id, name')
            if(error) {
                throw new Error(error)
            } else {
                return data
            }
        
        }
        catch(error) {
            console.error(`Fejl: kan ikke hente sangliste, ${error}`)
        }
    */

        // Album model
    



       
    
   