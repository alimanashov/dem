<template>
  <div class="flex items-center justify-between px-40 py-5 bg-blue-400 text-xl">
    <router-link to="/" class="text-white text-4xl">HuGraph</router-link>
    <div class="">
      <router-link to="/login" class="  p-2 rounded-lg text-white border-2 border-white mr-5
        hover:bg-white hover:text-blue-400">Sign in</router-link>
    </div>
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