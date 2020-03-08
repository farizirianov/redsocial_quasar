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
          ref="name"
          :dark="dark"
          filled
          v-model="name"
          label="Nombre de usuario"
          label-color="green"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor ingresa tu nombre']"
          :autofocus="autofocusEl === 1"
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
          ref="age"
          :dark="dark"
          filled
          type="number"
          v-model="age"
          label="Edad"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Escribe tu Edad',
            val => val > 0 && val < 100 || 'Escribe tu Edad real.'
          ]"
        />

        <q-select filled v-model="selectModel" :options="options" use-input behavior="menu" label="Selecciona tu sexo" />
        <div>
          <q-btn label="Guardar" type="submit" color="primary" :loading="loading" />
        </div>
      </div>
      </div>
    </q-form>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      name: null,
      age: null,
      selectModel: null,
      options: ['Femenino', 'Masculino']
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
