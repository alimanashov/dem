<template>
  <div class="Base flex-grow flex flex-col">
    <NavBar/>
    <div class="flex-grow flex justify-center items-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Login from "@/components/Login";
import CourseCatalog from "@/components/CourseCatalog";
import VueRouter from 'vue-router';

const routes = [
  {path: '/login', name: 'Login', component: Login},
  {path: '/course-catalog', name: 'CourseCatalog', component: CourseCatalog}
];

const router = new VueRouter({
  routes
})

export default {
  name: "Base",
  components: {NavBar},
  router,
}
</script>

<style scoped>
  .Base {
    min-height: 100vh;
  }
</style>