<template>
  <div id="app" class="flex">
    <Base/>
  </div>
</template>

<script>
import Base from "@/components/Base";

export default {
  name: 'App',
  components: {
    Base
  }
}
</script>

<style lang="postcss">
@import "./assets/tailwind.css";

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
