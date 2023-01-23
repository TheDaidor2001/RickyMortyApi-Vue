<script setup>
import {computed} from 'vue'
defineProps({
    image: String,
    name: String,
    status: String,
    gender: String,
    id: Number,
    locationName: String,
    originName: String,

})

const classObject = computed(() => ({
  active: status ?
  'bg-green-600': 'bg-red-600'
}))
</script>

<template >
        <img class="rounded-t-lg"  :src="image" :alt="`${name}`" />
        <div class="p-5 bg-gray-800 ">
            <RouterLink :to="`/character/${id}`">
                <h5 class="mb-2 text-4xl font-bold tracking-tight text-white hover:text-orange-600 transition-colors">{{
                    name
                }}</h5>
            </RouterLink>
            <div class="flex justify-start items-center gap-3 mt-5 mb-3">
                <div :class="status === 'Alive' || status === 'unknown' ? 'bg-green-700' : 'bg-red-700'" class=" w-3 h-3 rounded-full "></div>
                <p class="font-normal text-white">{{ status }} -</p>
                <p class="font-normal text-white">{{ gender }}</p>
            </div>
            <div class="mb-5">
                <p class="text-gray-400">Última localización</p>
                <p class="text-orange-600 transition-colors">{{ locationName }}</p>
            </div>
            <div class="mb-5">
                <p class="text-gray-400">Origen</p>
                <p class="text-orange-600 transition-colors">{{ originName }}</p>
            </div>
        </div>
</template>