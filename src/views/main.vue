<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="container">
        <Sidebar></Sidebar>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
</script>

<style scoped>
.container{
    display: flex;
}
.content{
    flex: 1 ;
    padding: 20px;
}
</style>