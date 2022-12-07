<template>
  <div>
    <nav>
      <NuxtLink to="/products">Nuxt Dojo</NuxtLink>
    </nav>
    <slot />

    <footer>
      <ul>
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