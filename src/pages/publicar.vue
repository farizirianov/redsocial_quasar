<template>
  <q-form class='q-mt-xl q-pa-md' @submit='onSubmit'>
    <div class='column items-center'>
      <div class='q-mt-xl q-pa-md'>
        <p>Publicar una actualizacion de estado</p>
        <q-input
          ref='descripcion'
          v-model='descripcion'
          label='Descripcion'
          bg-color='primary'
          label-color='white'
        />
        <q-uploader
          v-bind='props'
          multiple
          label='Adjuntar imagen'
          form-fields='[{name: "my-field", value: "my-value"}]'
          url='http://localhost:4444/upload'
          @added='onAdded'
          @removed='onRemoved'
          @start='onStart'
          @finish='onFinish'
          @uploaded='onUpload'
          @failed='onFail'
        />
        <q-btn-dropdown v-if='$q.screen.lt.md' auto-close stretch flat label='More...'>
          <q-list>
            <q-item clickable @click='tab = "movies"'>
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click='tab = "photos"'>
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div>
          <q-btn label='Publicar' type='submit' color='primary' :loading='loading' />
        </div>
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  data () {
    return {
      descripcion: null
    }
  },

  computed: {
    props () {
      return {
        dark: this.dark,
        square: this.square,
        flat: this.flat,
        bordered: this.bordered,

        autoUpload: this.autoUpload,
        batch: this.batch,
        noThumbnails: this.noThumbnails,
        label: this.label ? 'Upload files' : null,

        readonly: this.readonly,
        disable: this.disable
      }
    }
  },

  methods: {
    onChange (val) {
      console.log('@change', JSON.stringify(val))
    },
    onInput (val) {
      console.log('@input', JSON.stringify(val))
    },
    onAdded (files) {
      console.log(`@added ${files.length || 0} files`)
      console.log(files)
    },
    onRemoved (files) {
      console.log(`@removed ${files.length || 0} files`)
      console.log(files)
    },
    onFactoryFailed (err) {
      console.log(`@factory-failed`, err)
    },
    onStart () {
      console.log(`@start`)
    },
    onFinish () {
      console.log(`@finish`)
    },
    onUpload () {
      console.log('@uploaded')
    },
    onFail () {
      console.log('@failed')
    },
    promiseFn (files) {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('resolving promise', this.batch)
          resolve({
            batch: this.batch,
            url: 'http://localhost:4444/upload'
          })
        }, 2000)
      })
    },
    promiseFnAbort (files) {
      setTimeout(() => {
        this.$refs.aborter.abort()
      }, 100)
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('resolving promise', this.batch)
          resolve({
            batch: this.batch,
            url: 'http://localhost:4444/upload'
          })
        }, 2000)
      })
    },
    rejectFn (files) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('ailed to solve promise - Test'))
        }, 2000)
      })
    }
  }
}
</script>
