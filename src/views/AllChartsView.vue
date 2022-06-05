<template>
  <div>
    <h1>Графики криптовалюты (BINANCE / Спот)</h1>


    <div class=" d-inline-flex flex-wrap justify-content-center w-100 mt-3">
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



   //getCryptoCoin() {

   //  const obj = {
   //    title: this.coinInput.split('-').join(' | '),
   //    value: this.coinInput.split('-').join('')
   //  }
   //  this.cryptoCurrenciesAll.unshift(obj);

   //  localStorage.setItem('cryptoCurrenciesAll', JSON.stringify(this.cryptoCurrenciesAll));
   //  this.arrUser = JSON.parse(localStorage.getItem('cryptoCurrenciesAll'))

   //  console.log('arrUser', this.arrUser)
   //  this.coinInput = '';
   //}

  },
  mounted() {

  }


}
</script>

<style scoped>



</style>
