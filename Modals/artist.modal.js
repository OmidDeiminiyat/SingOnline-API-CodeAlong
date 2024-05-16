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
}
