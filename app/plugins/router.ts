import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (to: { hash: any }, from: any, savedPosition: any) => {
    if (to.hash) {
      console.log('Go to hash', to.hash)

      return {
        el: to.hash,
        top: 30,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})