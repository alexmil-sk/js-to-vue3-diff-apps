<template>
  <div>
    <h1>Графики криптовалюты</h1>

    <div class=" d-inline-flex flex-wrap justify-content-start w-100">
      <!-- --------------- < ITEM > ------------------------------------>
      <div class="w-50 pb-2" style="min-width: 350px; background-color: #6C8CD5;">
        <div class="container-lg w-100 d-flex flex-row justify-content-start mt-3 ms-0 mb-3">
          <div class="text-center w-50">
            <label class="mb-2 text-uppercase">крипто</label>
            <select class="form-select" aria-label="Default select example ">
              <option
                  v-for="(cryptoCoin, idx) in cryptoCurrencies"
                  :key="idx"
              >
                {{ cryptoCoin }}
              </option>
            </select>
          </div>
          <div  class="text-center w-50">
            <label class="mb-2 text-uppercase">интервал</label>
            <select class="form-select">
              <option v-for="(cryptoInterval, idx) in cryptoIntervals" :key="idx">
                {{ cryptoInterval }}
              </option>
            </select>
          </div>
          <button class="btn btn-warning w-50 ms-2 mr-2" style="min-height: 100%; margin-top: 32px;">
            <img src="@/img/svg/zoom-in.svg" alt="zoom-in.svg"/>
          </button>
        </div>

        <div class="wrapper-chart-trades d-flex flex-row flex-wrap justify-content-center w-100">

          <div id="chart" class="chart"></div>

          <div class="trades">

            <div class="trades-header container-sm">
              <table class="trade-item table table-secondary text-center w-100 mb-0">
                <tr>
                  <th class="w-25">Цена</th>
                  <th class="w-25">Количество</th>
                  <th class="w-25">Сумма</th>
                </tr>
              </table>
            </div>

            <div class="trades-list container-sm">
              <table class="trade-item-buy table table-success text-center w-100 mb-0">
                <tr>
                  <td class="w-25 text-start  pt-0 pb-0">1000.00</td>
                  <td class="w-25  pt-0 pb-0">2</td>
                  <td class="w-50 text-end  pt-0 pb-0">2000.00</td>
                </tr>
              </table>
              <table class="trade-item-sell table table-danger text-center w-100">
                <tr>
                  <td class="w-25 text-start pt-0 pb-0">1000.00</td>
                  <td class="w-25  pt-0 pb-0">2</td>
                  <td class="w-50 text-end  pt-0 pb-0">2000.00</td>
                </tr>
              </table>
            </div>

          </div>

        </div>
      </div>
      <!-- --------------- </ITEM> ------------------------------------->
      <!-- --------------- <ITEM> -------------------------------------->

      <div class="border border-primary  d-flex flex-column justify-content-start w-50" style="min-width: 350px;">
        <div id="chart1" class="chart container-sm border border-primary mt-2"></div>
      </div>
    </div>
      <!-- --------------- </ITEM> ------------------------------------->
  </div>
</template>

<script>


export default {
  name: "charts-crypto",
  data() {
    return {
      cryptoCurrencies: ['BTC | BUSD','BNB | BUSD','ETH | BUSD','XRP | BUSD'],
      cryptoIntervals: ['1d','4h','1h','15m'],
    }
  },
  mounted() {
    this.$chart();//загрузка графикаиз плагина chartsPlugin.js
  },
}
</script>

<style scoped>



</style>
