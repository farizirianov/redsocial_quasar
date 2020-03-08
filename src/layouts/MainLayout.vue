<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-space></q-space>
        <q-input
          class="GPL__toolbar-input"
          dense
          standout="bg-primary"
          v-model="search"
          placeholder="Search"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>
        <q-btn round dense flat color="grey-8" icon="notifications">
          <q-badge color="red" text-color="white" floating>5</q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="~assets/grun.jpeg" style="width:30vw;max-width:150px;" />
          </q-avatar>
          <q-tooltip>Perfil</q-tooltip>
        </q-btn>
        <q-btn round flat icon="more_vert">
          <q-menu auto-close :offset="[110, 0]">
            <q-list style="min-width: 150px">
              <q-item clickable>
                <q-item-section>Contact data</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Block</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Select messages</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Silence</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Clear messages</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Erase messages</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
      <q-tabs>
        <q-route-tab to="/iniciarsesion" replace label="Nuevos" />
        <q-route-tab to="/inicio" replace label="Destacado" />
        <q-route-tab to="/about" replace label="Populares" />
      </q-tabs>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Menù</q-item-label>
        <br />
        <div class="column items-center no-wrap">
          <q-avatar
            size="120px"
            font-size="52px"
            color="primary"
            text-color="blue"
            icon="fas fa-address-book"
          />
        </div>
        <br />
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import EssentialLink from "components/EssentialLink";
export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      essentialLinks: [
        {
          title: "Inicio",
          icon: "home",
          link: ""
        },
        {
          title: "Amigos",
          icon: "people",
          link: ""
        },
        {
          title: "Entretenimiento",
          icon: "videogame_asset",
          link: ""
        },
        {
          title: "Ajustes",
          icon: "widgets",
          link: ""
        },
        {
          title: "Cerrar Sesión",
          icon: "dashboard",
          link: ""
        }
      ]
    };
  }
};
</script>
