<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useDataStore } from '../stores/Data'
import Card from '../components/Card.vue'
import ShearchSvg from '../components/ShearchSvg.vue'
import Squeleton from '../components/Squeleton.vue'
import { ref } from 'vue';

const busqueda = ref('')
const store = useDataStore()
const { getData, getCharacter} = useDataStore()
const { data, loading,error } = storeToRefs(store)






const handleSubmit = async () => {
  try {
    await getCharacter(busqueda.value)

  } catch (error) {
    console.log(error);
  }
}

console.log(error.value);

getData('https://rickandmortyapi.com/api/character?page=1')
</script>

<template>
  <main class="container mx-auto xl:px-10 py-10">
    <form class="text-center" @submit.prevent="handleSubmit">
      <label for="busqueda" class="text-4xl text-white uppercase font-bold">Busca tu personaje favorito </label>
      <input v-model="busqueda" id="busqueda" type="text" class="mt-10 w-1/4 block mx-auto mb-10 px-4 py-2 rounded-sm"
        placeholder="ej: Rick" />
    </form>
    <div class="p-5 flex justify-between">
      <button :disabled="data?.info.prev === null" @click="getData(data?.info?.prev)"
        class="bg-orange-500 text-white px-4 py-2 rounded-lg disabled:bg-orange-300 placeholder:bg-orange-900 transition-colors">Prev</button>
      <button :disabled="data?.info.next === null" @click="getData(data?.info?.next)"
        class="bg-orange-500 text-white px-4 py-2 rounded-lg disabled:bg-orange-300  placeholder:bg-orange-900 transition-colors">Next</button>
    </div>
    <div v-if="!error" class="grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">

      <div v-for="item in data?.results" :key="item.id" class="max-w-sm bg-white rounded-lg shadow-md">
        <Card v-if="!loading" :image="item.image" :name="item.name" :id="item.id" :status="item.status" :gender="item.gender"
          :locationName="item.location.name" :originName="item.origin.name" />
        <Squeleton v-else/>
      </div>
    </div>
    <div v-else>
      <h1 class="text-4xl text-center mt-20 text-white">No hay resultados</h1>
    </div>
  </main>

</template>
