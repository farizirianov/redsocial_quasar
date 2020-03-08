
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '', component: () => import('pages/Index.vue') },
      { path: '/inicio', component: () => import('pages/Registrar.vue') },
      { path: '/about', component: () => import('pages/Editarperfil.vue') },
      { path: '/holi', component: () => import('pages/publicar.vue') },
      { path: '/iniciarsesion', component: () => import('pages/nueva.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
