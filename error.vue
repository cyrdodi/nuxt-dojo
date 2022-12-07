<template>
  <div class="mt-7 card mx-auto text-center max-w-sm">
    <!-- menampilkan kode error -->
    <h1 class="text-7xl my-7 font-bold">{{ error.statusCode }}</h1>
    <p class="my-7 text-4xl">Ooops...</p>
    <!-- menampilkan pesan eror -->
    <p class="my-7 text-2xl">{{ error.statusMessage }}</p>
    <!-- clear eror kemudian redirect ke homepage -->
    <button class="btn" @click="handleError">Go to homepage</button>
  </div>
</template>

<script setup>
// define props untuk error
defineProps(["error"]);

// saat tombol diklik, jalankan fungsi clearError dan redirect ke route '/'
const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped>
</style>