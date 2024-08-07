<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
<Header></Header>
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
import Header from '@/components/Header.vue';
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