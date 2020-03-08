<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img
        src="~assets/grun.jpeg"
        style="width:30vw;max-width:150px;"
        >
          </q-avatar>

          <q-toolbar-title>
            koala
            <q-item-label caption>
              February 22, 2016
            </q-item-label>
          </q-toolbar-title>

          <q-btn-dropdown auto-close stretch flat icon="more">
          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        </q-toolbar>
      </q-header>
        <q-footer bordered class="bg-white text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
          <q-tab name="comentar" label="Comentar" />
          <q-tab name="megusta" label="Me Gusta" />
        </q-tabs>
      </q-footer>
      <q-page-container>
        <q-page padding>
          <p>Una publicacion</p>
          <img
        src="~assets/grun.jpeg"
        style="width:80vw;max-width:600px;"
        >
        </q-page>
      </q-page-container>
    </q-layout>
    <br>
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img
        src="~assets/grun.jpeg"
        style="width:30vw;max-width:150px;"
        >
          </q-avatar>

          <q-toolbar-title>
            Elefante
          </q-toolbar-title>

          <q-btn-dropdown auto-close stretch flat icon="more">
          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        </q-toolbar>
      </q-header>
        <q-footer bordered class="bg-white text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
          <q-tab name="comentar" label="Comentar" />
          <q-tab name="megusta" label="Me Gusta" />
        </q-tabs>
      </q-footer>
      <q-page-container>
        <q-page padding>
          <p>Una publicacion</p>
          <img
        src="~assets/grun.jpeg"
        style="width:80vw;max-width:600px;"
        >
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
