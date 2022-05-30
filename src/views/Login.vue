<template>
  <div class="login w-full h-full flex justify-center items-center">
    <div class="login_form flex flex-col items-center p-5">
      <label class="flex flex-col mb-5">
        <span>Login</span>
        <span class="p-1 border-2 border-gray-500 rounded">
          <input class="outline-none" type="text" v-model="login">
        </span>
      </label>
      <label class="flex flex-col mb-5">
        <span>Password</span>
        <span class="p-1 border-2 border-gray-500 rounded">
          <input class="outline-none" type="password" v-model="password">
        </span>
      </label>
      <button class="w-24 h-8 rounded bg-blue-400 hover:bg-blue-500 text-white" v-on:click="logIn">Login</button>
    </div>
  </div>
</template>

<script>
import ajax from "@/api/ajax";

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
      // await fetch('http://127.0.0.1:8000/api/token',{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify({username: this.login, password: this.password})
      // }).then(res => {console.log(res)}).catch(err => {console.log(err)});
      try {
        const res = await ajax.post('/api/token', {
          username: this.login,
          password: this.password
        })
        if (res.status === 200) {
          this.$store.getters.token
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
}
</script>

<style scoped>
 .login_form {
   box-shadow: 0 0 15px 0 #393939;
   border-radius: 10px;
 }
</style>