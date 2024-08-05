<!-- eslint-disable vue/multi-word-component-names -->


<template>
    <div class="sidebar">
        <h2>Barra Lateral</h2>
        <RouterLink to="/contador">Contador</RouterLink>
        <RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

.sidebar {
    width: 200px;
    background-color: #f0f0f0;
}
</style>