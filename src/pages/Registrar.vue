<template>
 <q-form class="q-mt-xl q-pa-md" @submit="onSubmit" @reset="onReset">
      <div class="column items-center">
    <div class="q-col-gutter-md">
        <custom-input
          v-if="customInput"
          filled
          v-model="customValue"
          label="Custom value *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
          hint="This custom input should be validated first on submit"
        />
        <q-input
          ref="email"
          :dark="dark"
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
          :dark="dark"
          :color="dark ? 'yellow' : 'primary'"
          filled
          type="password"
          label="Contraseña*"
          :rules="[
            asyncRule
          ]"
        />
         <q-input
          v-model="pwdconfir"
          :dark="dark"
          :color="dark ? 'yellow' : 'primary'"
          filled
          type="password"
          label="Confirmar Contraseña*"
          :rules="[
            asyncRule
          ]"
        />
        <q-toggle :dark="dark" v-model="accept" label="I accept the license and terms" :autofocus="autofocusEl === 3" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" :loading="loading" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" :loading="loading" />
        </div>
      </div>
      </div>
      <div class="column items-center">
      <br>
      <router-link to="/iniciarsesion">Iniciar Sesión</router-link>
      </div>
    </q-form>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      accept: false,
      dark: false,
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

    onReset () {
      this.email = null
      this.pwd = null
      this.pwdconfir = null
      this.accept = false

      console.log('@reset')
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
