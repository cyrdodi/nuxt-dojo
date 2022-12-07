<template>
  <div class="shadow-sm">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/products">Nuxt Dojo</NuxtLink>
    </nav>
  </div>

  <div class="container mx-auto p-4">
    <slot />
  </div>
  <div class="border-t">
    <footer class="container mx-auto p-4">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Product</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-exact-active {
  color: #07b54d;
}
</style>