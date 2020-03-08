<template>
 <q-form class="q-mt-xl q-pa-md" @submit="onSubmit" >
     <div class="column items-center no-wrap ">
         <div class="q-col-gutter-md">
        <q-input
          ref="email"
          filled
          v-model="email"
          label="Email*"
          hint="ejemplo@tuemail.com"
          label-color="green"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Escribe tu correo']"
        />
        <q-input
          v-model="pwd"
          label-color="green"
          filled
          type="password"
          label="Contraseña*"
          :rules="[
            asyncRule
          ]"
        />
        <div>
         <q-btn label="Submit" type="submit" color="primary" to="/main" />
        </div>
        </div>
      </div>
      <div class="column items-center">
      <br>
      <router-link to="/inicio">Crear Cuenta</router-link>
      </div>
    </q-form>
</template>

<script>
export default {
  name: 'iniciarsesion',
  components: {
  },
  data () {
    return {
      email: null,
      pwd: null
    }
  },

  methods: {
    async asyncRule (val) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(!!val || '* Requerido')
        }, 1000)
      })
    },

    onSubmit () {
      this.$q.notify('submit')
      console.log('@submit')
    },

    onValidationSuccess () {
      console.log('@validation-success')
    },

    onValidationError () {
      console.log('@validation-error')
    },

    onClick () {
      this.$q.notify('click')
      console.log('cliiick')
    }
  }
}
</script>
