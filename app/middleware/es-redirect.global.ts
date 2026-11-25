export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/es' || to.path.startsWith('/es/')) {
    const target = to.path === '/es' ? '/' : to.path.slice(3)
    return navigateTo({ path: target || '/', query: to.query }, { redirectCode: 301 })
  }
})
