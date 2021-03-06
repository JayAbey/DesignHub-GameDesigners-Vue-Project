// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the vue router
import VueRouter from 'vue-router'
//import the vue resorce
import VueResource from 'vue-resource'
//import the App component
import App from './App'

//tell Vue to use the router
Vue.use(VueRouter)
//tell Vue to use the resource
Vue.use(VueResource)

//import components
// import Contact from './components/Contact/Contact'
import GameDesignHome from './components/GameDesign-Jay/GameDesign_Home-Jay'
import GameDesignDesigner from './components/GameDesign-Jay/GameDesign_Designer-Jay'
import GameDesignProjects from './components/GameDesign-Jay/GameDesign_Project-Jay'

const routes = [
  // { path: '/contact', component: Contact },

  { path: '/', component: GameDesignHome },
  { path: '/game-design-designer/:selectedDesignerID', component: GameDesignDesigner, props: true },
  { path: '/game-design-projects/:selectedProjectID', component: GameDesignProjects, props: true },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

//instatiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
