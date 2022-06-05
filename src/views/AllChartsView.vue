<template>
  <div>
    <h1>Графики криптовалюты (BINANCE / Спот)</h1>


    <div class=" d-inline-flex flex-wrap justify-content-center w-100 mt-3">
      <ChartCryptoComp/>
      <ChartCryptoComp/>
      <ChartCryptoComp/>
      <ChartCryptoComp/>
    </div>
  </div>
</template>

<script>
import ChartCryptoComp from '@/components/crypto/ChartCryptoComp.vue';


export default {
  name: "all-charts-view",
  components: {
    ChartCryptoComp,
  },

  methods: {


  },
  mounted() {

  }


}
</script>

<style scoped>



</style>
