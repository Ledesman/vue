<!-- eslint-disable vue/multi-word-component-names -->
    <template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="mb-3">

                <label class="form-label" for="nombre">Nombre</label>
                <Field v-model="nombre" class="form-control" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="mb-3">

                <label class="form-label" for="correo">Correo</label>
               
                <Field v-model="email" class="form-control" type="email" name="email" id="correo" placeholder="Ingrese su email"/>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <button class="btn btn-primary" type="submit">Registrarse</button>

        </Form>
   </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validatioSchema';
import { useRegisterStore } from '../stores/registrarStore';
import { ref } from 'vue';
   const registrarStore = useRegisterStore();
   const nombre = ref('');
   const email = ref('');


const onSubmit = () =>{
    registrarStore.guardarRegistro(nombre.value,email.value)    
    
    console.log('Se ha enviado correctamente el formulario')
    }

</script>

<style scoped>

</style>