<template>
  <div class="flex flex-col gap-7">
    <h1>About</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum natus
      eveniet, architecto at quibusdam veritatis accusamus itaque quasi deserunt
      velit!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque corporis
      neque quas possimus dolores!
    </p>
    <div class="rounded-lg bg-gray-100 p-4 shadow-inner">
      <!-- <p class="text-md font-semibold text-green-600">{{ data.messages }}</p> -->
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>