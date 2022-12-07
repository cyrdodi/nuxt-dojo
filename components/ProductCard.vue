<template>
  <div class="card text-center">
    <img :src="product.image" alt="product image" class="w-36 h-36 m-auto" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink class="btn my-4" :to="`/products/${product.id}`"
      >Show Detail</NuxtLink
    >
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
</style>