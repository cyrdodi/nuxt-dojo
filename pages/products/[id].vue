<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(url);

// jika product tidak ditemukan maka throw createError method
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true, // jika fatal = true maka error yang disebabkan dari browser/client akan throw error
  });
}

definePageMeta({
  layout: "products",
});
</script>