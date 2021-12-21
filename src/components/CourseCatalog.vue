<template>
  <div class="w-full h-full flex flex-col p-20">
    <div class="text-3xl">Courses</div>
    <div class="grid grid-rows-3 h-40 w-full">
      <div class="grid grid-cols-5" v-for="(item, index) in Objects" :key="index">
        <div class="row-span-1 col-span-1 flex items-center justify-center border"
             v-for="(value, key) in Objects[index]" :key="key">
          <div class="text-gray-600 text-lg">{{ value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCatalog",
  data: function () {
    return {
      Objects: [
        {id: 'id', name: 'name', description: 'description', price: 'price'},
        {id: 1, name: "Ali", description: "Good", price: "100$"}
      ],
    }
  },
}
</script>

<style scoped>

</style>