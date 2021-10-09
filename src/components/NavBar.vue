<template>
  <div class="flex items-center justify-between px-40 py-10 bg-blue-400 text-xl">
    <router-link to="/" class="text-white text-4xl">App</router-link>
    <router-link to="/login" class="p-2 rounded-lg text-white border-2 border-white hover:bg-white hover:text-black">Sign in</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {

  }
}
</script>

<style scoped>

</style>