<template>
  <h2 class="text-lg">Catalog Products</h2>
  <div class="grid grid-cols-4 gap-3 mt-6">
    <div v-for="p in products" :key="p.id">
      <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>