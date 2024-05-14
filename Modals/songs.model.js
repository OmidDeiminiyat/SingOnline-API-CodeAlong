import { supabase } from '../Config/supabase.config.js';

 // Songs Modellen
export default class SongModel {
    static async getAllRecords() {
     
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
        try {
           
            const { data, error } = await supabase
                  .from('albums')
                  .select('id, artist:artist_id (id, name)')
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




       
    
   