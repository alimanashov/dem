<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col items-center">
      <label class="flex flex-col mb-5">
        <span>Login</span>
        <span class="p-1 border-2 border-gray-500 rounded">
          <input class="outline-none" type="text" v-model:value="login">
        </span>
      </label>
      <label class="flex flex-col mb-5">
        <span>Password</span>
        <span class="p-1 border-2 border-gray-500 rounded">
          <input class="outline-none" type="text" v-model:value="password">
        </span>
      </label>
      <button class="w-24 h-8 rounded bg-blue-400 hover:bg-blue-500 text-white" v-on:click="logIn">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    logIn: async function () {
      await this.$router.push('/course-catalog');
    }
  },
}
</script>

<style scoped>

</style>