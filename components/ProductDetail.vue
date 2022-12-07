<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-4">
      <div class="p-7">
        <img :src="product.image" alt="product image" />
      </div>

      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-2xl my-6">Price - ${{ product.price }}</p>
        <h3 class="text-lg my-7">Product Description</h3>
        <p class="mb-7">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>