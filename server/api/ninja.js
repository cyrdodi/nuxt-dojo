export default defineEventHandler(async (event) => {

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cgInpufSbuCHhY3MeralgGnIUikndow6Tu93UUiz')

  return data
})