<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
    <h1>Localizacion</h1>
    <h2>{{ route.params.id }}</h2>
</template>