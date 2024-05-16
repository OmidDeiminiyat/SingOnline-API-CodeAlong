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
 }




       
    
   