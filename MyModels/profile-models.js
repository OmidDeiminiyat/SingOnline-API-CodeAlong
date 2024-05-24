import { supabase } from '../Config/supabase.config.js';  // connect to Supabase to import data: database info is in: ../Config/supabase.config.js

 // Songs Modellen
export default class Profile { 

    static async createRecord(insertInfo) {
        try {
            const { data, error } = await supabase
            .from('profile')
            .insert([
                {
                    Fornavn: insertInfo.Fornavn,
                    Mellemnavn: insertInfo.Mellemnavn,
                    Efternavn: insertInfo.Efternavn,
                    Adresse: insertInfo.Adresse,
                    Postnummer: insertInfo.Postnummer,
                    By: insertInfo.By,
                    Land: insertInfo.Land,
                    Email: insertInfo.Email,
                    Telefon: insertInfo.Telefon,
                    Køn: insertInfo.Køn,
                    Fødselsdato: insertInfo.Fødselsdato
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
    
    

    static async getAllRecords() {
     
        try {
           
            const { data, error } = await supabase  // create 2 variables : one for fata and one for error 
                  .from('profile') // fetch data from table: albums
                  .select('id, Fornavn, Efternavn') // fetch id, title and description from table albums
            if(error) { //catch Error
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


// Update profile table
static async updateRecord(profileUp) { 
	try {
		let { data, error } = await supabase 
		.from('profile') 
		.update([ 
			{ 
				Fornavn: profileUp.Fornavn, 
				Mellemnavn: profileUp.Mellemnavn,
                Efternavn: profileUp.Efternavn
			} 
		]) 
		.eq('id', profileUp.id)
		if(error) {
			throw new Error(error.message)
		}

	}
	catch(error) {
		console.error(error)
	}
}  

   
// and finaly i deleted artist from profile using id
static async deleteRecord(deleteProfile) { 
	try {
		let { data, error } = await supabase
   .from('profile')
   .delete()
   .eq('id', deleteProfile.id)

		if(error) {
			throw new Error(error.message)
		}

	}
	catch(error) {
		console.error(error)
	}
}


}
