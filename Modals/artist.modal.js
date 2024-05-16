import { supabase } from '../Config/supabase.config.js';

 // Songs Modellen
export default class artistModel {
    static async getArtistRecord() {
     
        try {
           
            const { data, error } = await supabase
                  .from('artists')
                  .select('id, name ')
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




       
    
   