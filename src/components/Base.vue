<template>
  <div class="Base flex-grow">
    <NavBar/>
    <div class="border-4 flex-grow flex justify-center items-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Login from "@/components/Login";
import VueRouter from 'vue-router';

const routes = [
  {path: '/login', name: 'Login', component: Login}
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