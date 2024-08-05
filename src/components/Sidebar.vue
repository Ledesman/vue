<!-- eslint-disable vue/multi-word-component-names -->


<template>
    <div class="sidebar">
        <h2>Bienvenido </h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
       <li><RouterLink to="/contador">Contador</RouterLink></li> 
       <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li> 
       <li><RouterLink to="/registrar">Registrar</RouterLink></li>

   
   </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRegisterStore } from '@/modules/registro/stores/registrarStore';
import { ref , watch} from 'vue';
const registrarStore = useRegisterStore()

const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value)

 watch(() => registrarStore.nombre, (newnombre)=>{
    nombre.value = newnombre;
 });
 watch(()=> registrarStore.email, (newemail) =>{
    email.value = newemail;
 })

</script>

<style scoped>

.sidebar {
    width: 200px;
    background-color: #f0f0f0;
}
li{
    list-style: none;
}
</style>