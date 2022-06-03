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
import { createChart } from 'lightweight-charts';

export default {
  name: "charts-crypto",
  data() {
    return {
      cryptoCurrencies: ['BTC | BUSD','BNB | BUSD','ETH | BUSD','XRP | BUSD'],
      cryptoIntervals: ['1d','4h','1h','15m'],
    }
  },
  methods: {
    createMyChart() {
      const chart = createChart(document.querySelector('#chart'), {
        width: 330,
        height: 300,
        layout: {
          backgroundColor: 'rgba(0, 0, 0, 0.99)',
          textColor: '#ffffff',
          fontSize: 14,
          fontWeight: 400,
          fontFamily: 'Roboto',
        },
        grid: {
          vertLines: {
            color: 'rgba(255, 255, 255, 0.5)',
            style: 1,
            visible: true,
          },
          horzLines: {
            color: 'rgba(255, 255, 255, 0.5)',
            style: 1,
            visible: true,
          },
        },
        crosshair: {
          vertLine: {
            color: '#e6f150',
            width: 0.2,
            style: 4,
            visible: true,
            labelVisible: true,
          },
          horzLine: {
            color: '#e6f150',
            width: 0.2,
            style: 4,
            visible: true,
            labelVisible: true,
          },
          //mode: LightweightCharts.CrosshairMode.Normal,
        },
        watermark: {
          color: 'rgba(255, 255, 255, 0.4)',
          visible: true,
          text: 'TradingView Charts',
          fontSize: 24,
          horzAlign: 'left',
          vertAlign: 'bottom',
        },
      });
      const candlestickSeries = chart.addCandlestickSeries({
        //задать свойства свечей см. документацию ...
      });
      candlestickSeries.setData([
        { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
        { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
        { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
        { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
        { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
        { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
        { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
        { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
        { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
        { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
      ]);
      chart.timeScale().fitContent();
      chart.timeScale().fitContent();
    }
  },
  mounted() {
    this.createMyChart();
  },
}
</script>

<style scoped>



</style>
