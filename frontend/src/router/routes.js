const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'inicio', component: () => import('pages/PaginaInicial.vue') },
      { path: 'AjudeNossaCausa', name: 'AjudeNossaCausa', component: () => import('pages/AjudeNossaCausa.vue') },
      { path: 'NovoChamado', name: 'NovoChamado', component: () => import('pages/NovoChamado.vue') },
      { path: 'Mapa', name: 'Mapa', component: () => import('pages/LMapPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
