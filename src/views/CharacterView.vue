<script setup>
import { useRoute, useRouter } from "vue-router"
import { useDataStore } from "../stores/Data";
import { storeToRefs } from "pinia";
const store = useDataStore()

const { getData } = useDataStore()

const { data } = storeToRefs(store)


const route = useRoute()
const router = useRouter()

getData(`https://rickandmortyapi.com/api/character/${route.params.id}`)
console.log(store.data);
</script>
<template>
    <button @click="router.push('/')" class="bg-green-600 rounded-lg text-white px-10 py-3 mb-20 ml-20">
        Volver
    </button>   
    <div class="container-fluid flex">
        <div class="px-20">
            <img :src="data?.image" :alt="`Imagen de ${data?.name}`">
        </div>
        <div>
            <p class="text-5xl text-white capitalize font-bold mb-5">{{ data?.name }}</p>
            <div class="flex flex-row items-center">
                <div :class="data?.status === 'Alive' || data?.status === 'unknown' ? 'bg-green-700' : 'bg-red-700'"
                    class=" w-5 h-5 rounded-full ">
                </div>
                <p class="font-normal text-white text-4xl">{{ data?.status }} </p>
            </div>
            <p class="font-normal text-white text-2xl">{{ data?.gender }}</p>
        </div>
    </div>
</template>