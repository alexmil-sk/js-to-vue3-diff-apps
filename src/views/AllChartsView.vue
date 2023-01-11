<template>
  <div>
    <h1>Cryptocurrency Charts (BINANCE / Spot)</h1>

    <ChartWindowQuantity @selectChartsQuantity="selectChartsQuantity"/>


    <div class=" d-inline-flex flex-wrap justify-content-center w-100 mt-3">
          <ChartCryptoComp v-for=" (item, idx) in chartsQuantity" :key="item"/>
    </div>

  </div>
</template>

<script>
import ChartCryptoComp from '@/components/crypto/ChartCryptoComp.vue';
import ChartWindowQuantity from '@/components/crypto/ChartWindowQuantity.vue';

export default {
  name: "all-charts-view",
  components: {
    ChartCryptoComp,
    ChartWindowQuantity
  },
  data() {
    return {
      chartsQuantity: 1,
      visible: true,
    }
  },
  methods: {
    selectChartsQuantity(n) {
      this.chartsQuantity = Number(n);
      this.visible = true;
    },

  },
  mounted() {

  }


}
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition:   opacity 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}



</style>
