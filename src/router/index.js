import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MediaFile from '@/components/MediaFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/MediaFile',
      name: 'MediaFile',
      component: MediaFile
    }
  ]
})
