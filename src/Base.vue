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

export default {
  name: "Base",
  components: {NavBar},
}
</script>

<style scoped>
  .Base {
    min-height: 100vh;
  }
</style>