import {defineStore} from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        data: null,
        loading: true,
        error: ''
    }),

    actions: {
        async getData(url){
            this.loading = true
            try {
                const res = await fetch(url)
                const results = await res.json()

                this.data = results;
            } catch (error) {
                
            }finally{
                this.loading = false
            }
        },

        async getCharacter(name){
            this.error= ''
            this.loading = true
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
                const results = await res.json()
                if(results.error === "There is nothing here"){
                    this.loading = false
                    this.error = 'No hay resultados para mostrar'
                    console.log(this.error);
                    return
                }
                this.data = results


            } catch (error) {
                console.log(error);
            }finally{
                this.loading = false
            }
        }
    }


    
})