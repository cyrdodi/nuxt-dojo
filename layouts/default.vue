<template>
  <div class="shadow-sm">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/">Nuxt Dojo</NuxtLink>
      <ul class="flex items-center gap-2">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li class="btn"><NuxtLink to="/products">Product</NuxtLink></li>
        <li><NuxtLink to="/products/abc">error</NuxtLink></li>
      </ul>
    </nav>
  </div>
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-exact-active {
  color: #07b54d;
}
</style>