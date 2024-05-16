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
    



       
    
   