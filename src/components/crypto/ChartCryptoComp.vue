<template>
  <div class="d-flex flex-column w-50 mt-4 border-top border-secondary">
    <InputUserCoinComp
        @getCryptoCoin="getCryptoCoin"
        :coinInput="coinInput"
        @coinValue="coinValue"
    />
    <div
        class="w-100 pb-2"
        style="min-width: 436px;"
        :style="{backgroundColor: colorSpan()}"
    >
      <div class="container-lg w-100 d-flex flex-row justify-content-start mt-3 ms-0 mb-3">
        <div class="text-center w-50">
          <label class="mb-2 text-uppercase text-bold">crypto pair</label>
          <select
              class="form-select"
              @change="getCoin"
          >
            <option style="font-size: 16px!important;">Enter a pair</option>
            <option
                v-for="(cryptoCoin, idx) in cryptoCurrencies"
                :key="idx"
                :value="cryptoCoin.value"
            > <i></i>
              {{ cryptoCoin.title }}
            </option>
          </select>
        </div>
        <div  class="text-center w-50">
          <label class="mb-2 text-uppercase">interval</label>
          <select
              class="form-select"
              @change="getInterv"
              style="font-size: 16px!important;"
          >
            <option>Your interval</option>
            <option
                v-for="(cryptoInterval, idx) in cryptoIntervals"
                :key="idx"
                :value="cryptoInterval"
            >
              {{ cryptoInterval }}
            </option>
          </select>
        </div>

        <ManualButtonsComp
            :isDownloadedChart="isDownloadedChart"
            :isOpenedChart="isOpenedChart"
            :isDownloadedGlass="isDownloadedGlass"
            @downloadChart="downloadChart"
            @openWindowChart="openWindowChart"
            @getTradesGlass="getTradesGlass"
        />

      </div>

      <div class="wrapper-chart-trades d-flex flex-row flex-wrap justify-content-center w-100">

        <div :id="`${chartNumber}`" class="chart" :style="isOpenedChart ? styleScaleUp : styleScaleDown "></div>

        <div class="trades">

          <div class="trades-header container-sm">
            <table class="trade-item table table-dark text-light text-center w-100 mb-0">
              <tr>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
              </tr>
            </table>
          </div>

          <div
              class="trades-list container-sm"
              style="height: 265px; overflow-y: auto"
          >
            <table class="trade-item-buy text-center mb-0">
              <tr
                  v-for="(item) in arrTrades"
									:key="item"
                  :style="{backgroundColor: item.isBuyMaker ? '#FFB8B8' : 'lightgreen'}"
              >
                <td class="w-25 text-start  pt-0 pb-0">{{ item.priceTrade}}</td>
                <td class="w-25 pt-0 pb-0 ps-2">{{item.quantTrade}}</td>
                <td class="w-50 text-end  pt-0 pb-0">{{item.sumTrade}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { createChart } from 'lightweight-charts';
import InputUserCoinComp from "@/components/crypto/InputUserCoinComp.vue";
import ManualButtonsComp from '@/components/crypto/ManualButtonsComp.vue';

export default {
  name: "chart-crypto-comp",
  components: {
    InputUserCoinComp,
    ManualButtonsComp
  },
  data() {
    return {
      chartNumber: Math.random(),
      bgChartColor: '',
      cryptoCurrencies:
          JSON.parse(localStorage.getItem('cryptoCurrencies')) ||
          [
              {title: 'BTCUSDT', value: 'BTCUSDT'},
          ],

      cryptoIntervals: ['1m', '15m','1h','4h','1d'],
      selectCoin: '',
      selectInterv: '',
      candlestickSeries: null,
      arrTrades: [],
      isDownloadedChart: false,
      isDownloadedGlass: false,
      isOpenedChart: false,
      styleScaleUp: 'position: relative; top: -12px; left: -16px; transform: scale(1.63); transition: all 1s ease 0s',
      styleScaleDown: 'position: relative; top: 0; left: 0; transform: scale(1);transition: all 1s ease 0s',

      coinInput: '',

      color1: Math.floor(Math.random() * 250),
      color2: Math.floor(Math.random() * 250),
      color3: Math.floor(Math.random() * 250),



    }
  },
  methods: {
  // -2. Получение криптовалюты пользователя из инпута
    coinValue(coinInput) {
      this.coinInput = coinInput;
    },
    // -1 Занесение валюты пользователя в массив криптовалют
    getCryptoCoin() {

      const obj = {
        //title: this.coinInput.split('-').join(' | '),
        title: this.coinInput.toUpperCase(),
        value: this.coinInput.toUpperCase()
      }
      // Вносим полученный запрос пользователя в массив
      this.cryptoCurrencies.unshift(obj);
      // Заносим в localStorage массив в виде json-файла
      localStorage.setItem('cryptoCurrencies', JSON.stringify(this.cryptoCurrencies));

      //this.cryptoCurrencies = JSON.parse(localStorage.getItem('cryptoCurrencies'))

      // console.log('this.cryptoCurrencies', this.cryptoCurrencies)
    },

    // 0. Раскрашивание фона Графика в рандомные цвета
    colorSpan() {
      return `rgba(${this.color1}, ${this.color2}, ${this.color3}, 0.4)`;
    },


    // 1. Открытие Модульного окна графика
    openWindowChart() {
      this.isOpenedChart = !this.isOpenedChart;
    },
    // 2. Загрузка и Остановка получения данных Графика
    downloadChart(){
     if(this.selectCoin === 'Введите пару' || this.selectCoin === '' || this.selectInterv === 'Ваш интервал' || this.selectInterv === '') {
       return;
     }
      this.isDownloadedChart = !this.isDownloadedChart;
      if(this.isDownloadedChart) {
        this.setHistoryCandles(this.selectCoin,  this.selectInterv);
        this.streamCandles( this.selectCoin,  this.selectInterv);
      } else {
        this.candleStream.close();
      }
    },

    // 3. Останавливаем получение данных в стакан
    getTradesGlass() {
      if(!this.selectCoin ||  !this.selectInterv) {
        return;
      }
      this.isDownloadedGlass = !this.isDownloadedGlass;
      if(this.isDownloadedGlass) {
        this.streamTrades( this.selectCoin);// Запускаем WebSocket Стакана
      } else {
        this.tradeStream.close();// Останавливаем WebSocket Стакана
        this.arrTrades.length = 0; // Очищаем стакан от сделок
      }
    },

    // 4. Получаем криптовалютную пару из select криптовалютной пары
    getCoin(e) {
      if(this.selectCoin && this.selectInterv) {
        this.selectCoin = e.target.value;
        this.candleStream.close();// Останавливаем WebSocket Графика
        this.tradeStream.close();// Останавливаем WebSocket Стакана
        this.arrTrades.length = 0; // Очищаем стакан от сделок

        this.streamCandles( this.selectCoin,  this.selectInterv);

        // Отключаем кнопки загрузки, чтобы загрузка началась при нажатии
        this.isDownloadedChart = false;
        this.isDownloadedGlass = false;
      } else {
        this.selectCoin = e.target.value;
        //this.candleStream.close();// Останавливаем WebSocket Графика
        //this.tradeStream.close();// Останавливаем WebSocket Стакана
        //this.arrTrades.length = 0; // Очищаем стакан от сделок
      }


      // Запускаем АВТОМАТИЧЕСКИ заново все процессы ЕСЛИ НУЖНО
      //this.setHistoryCandles(this.selectCoin,  this.selectInterv);
      //this.streamCandles( this.selectCoin,  this.selectInterv);
      //this.streamTrades( this.selectCoin);

    },
    // 5. Получаем интервал графика из select интервал
    getInterv(e) {
      if(this.selectCoin && this.selectInterv) {
        this.selectInterv = e.target.value;
        this.candleStream.close();// Останавливаем WebSocket Графика
        // Запускаем АВТОМАТИЧЕСКИ заново все процессы ЕСЛИ НУЖНО кроме Стакана
        this.setHistoryCandles(this.selectCoin,  this.selectInterv);
        this.streamCandles( this.selectCoin,  this.selectInterv);
      } else {
        this.selectInterv = e.target.value;
      }
    },

    // 6. Создаем шаблон графика TradingView на основе приложения 'lightweight-charts'
    createMyChart() {
      const chart = createChart(document.getElementById(`${this.chartNumber}`), {
        width: 330,
        height: 300,

        rightPriceScale: {
          visible: true,
          borderColor: 'rgba(197, 203, 206, 1)',
          lockVisibleTimeRangeOnResize: true,
        },
        localization: {
          dateFormat: 'dd MMM yyyy',
        },
        layout: {
          backgroundColor: 'rgba(0, 0, 0, 0.99)',
          textColor: '#ffffff',
          fontSize: 14,
          fontWeight: 100,
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
          mode: 0,
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
      this.candlestickSeries = chart.addCandlestickSeries({
        //задать свойства свечей см. документацию
        // https://tradingview.github.io/lightweight-charts/docs#creating-a-series
      });
      chart.timeScale().fitContent();
      chart.timeScale().fitContent();
    },

    // 7.  Загружаем первоначальный "мертвый" график Spot---------
    setHistoryCandles(symbol, interval) {
      fetch(`https://api1.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=1000`)
          .then(resp => resp.json())
          .then(dataArr =>  this.candlestickSeries.setData(
              //Делаем реструктуризацию по ключам структуры ответа
              // с превращением массива массивов в массив объектов
              dataArr.map(([time, open, high, low, close ]) => ({
                time: time / 1000,
                open,
                high,
                low,
                close
              }))
              ));
    },

    // 8. Создаем обновление графика ("оживляем" его) с помощью WebSocket --------
    streamCandles(symbol, interval) {
      // ВНИМАНИЕ! Передача строки с символами ${symbol} валюты должна осуществляться в нижнем регистре toLowerCase()
      this.candleStream = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`);
      this.candleStream.onmessage = (e) => {
        // Делаем деструктуризацию полученного объекта из ответа
        const {t: time, o: open, c: close, h: high, l: low} = (JSON.parse(e.data).k);
        this.candlestickSeries.update({
          time: time / 1000,
          open,
          high,
          low,
          close
        });
      }
    },

    // 6. Загружаем данные стакана
    streamTrades(symbol) {
      this.tradeStream = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@aggTrade`);
      this.tradeStream.onmessage = (e) => {
        const {p: price, q: quantity, m: isBuy} = (JSON.parse(e.data));

        // 7. Создаем объект из которого будем брать данные в ячейки таблицы
        const objTrade = {
          priceTrade: Number(price).toFixed(6),
          quantTrade: Number(quantity).toFixed(4),
          sumTrade: (price * quantity).toFixed(4),
          isBuyMaker: isBuy
        }


        // 9. Заносим все объекты в массив в начало, чтобы v-for разложить его в таблице
        this.arrTrades.unshift(objTrade);

        // 8. Ограничиваем количество полученных записей сделок в стакане
        if(this.arrTrades.length > 50) {
          this.arrTrades.length = 50;
        }
      }
    },

  },

  // 10. Запускаем только формирование шаблона графика без данных
  mounted() {
    this.createMyChart();


  },



    //Базовая часть запроса SPOT по 3-м API =====

    //https://api1.binance.com
    //https://api2.binance.com
    //https://api3.binance.com

    //Вторая часть запроса =============
    //  GET /api/v3/klines

    // Параметры запроса, которые относятся к обязательным =====

    //symbol	STRING	YES
    //interval	ENUM	YES
    //limit	INT	NO	Default 500; max 1000.

    // ИТОГОВЫЙ ЗАПРОС ========

    //https://api1.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m
    //https://api2.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m
    //https://api3.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m

    // СТРУКТУРА ОТВЕТА SPOT ======
    //     [
    //         [
    //           1499040000000,      // Open time
    //           "0.01634790",       // Open
    //           "0.80000000",       // High
    //           "0.01575800",       // Low
    //           "0.01577100",       // Close
    //           "148976.11427815",  // Volume
    //           1499644799999,      // Close time
    //           "2434.19055334",    // Quote asset volume
    //           308,                // Number of trades
    //           "1756.87402397",    // Taker buy base asset volume
    //           "28.46694368",      // Taker buy quote asset volume
    //           "17928899.62484339" // Ignore.
    //         ]
    //      ]


  // Запрос WebSocket =====

    // Возможные интервалы
    // 1m
    // 3m
    // 5m
    // 15m
    // 30m
    // 1h
    // 2h
    // 4h
    // 6h
    // 8h
    // 12h
    // 1d
    // 3d
    // 1w
    // 1M

    //The base endpoint is: wss://stream.binance.com:9443
    //Raw streams are accessed at /ws/<streamName>
    //Stream Name: <symbol>@kline_<interval>

    // СТРУКТУРА ОТВЕТА WebSocket ======
    //     {
    //       "e": "kline",     // Event type
    //         "E": 123456789,   // Event time
    //         "s": "BNBBTC",    // Symbol
    //         "k": {
    //            "t": 123400000, // Kline start time
    //           "T": 123460000, // Kline close time
    //           "s": "BNBBTC",  // Symbol
    //           "i": "1m",      // Interval
    //           "f": 100,       // First trade ID
    //           "L": 200,       // Last trade ID
    //           "o": "0.0010",  // Open price
    //           "c": "0.0020",  // Close price
    //           "h": "0.0025",  // High price
    //           "l": "0.0015",  // Low price
    //           "v": "1000",    // Base asset volume
    //           "n": 100,       // Number of trades
    //           "x": false,     // Is this kline closed?
    //           "q": "1.0000",  // Quote asset volume
    //           "V": "500",     // Taker buy base asset volume
    //           "Q": "0.500",   // Taker buy quote asset volume
    //           "B": "123456"   // Ignore
    //          }
    //     }

      //Получение данных стакана Aggregate Trade Streams

      // Stream Name: <symbol>@aggTrade

      // СТРУКТУРА ОТВЕТА Стакана ======

        // {
        //      "e": "aggTrade",  // Event type
        //     "E": 123456789,   // Event time
        //     "s": "BNBBTC",    // Symbol
        //     "a": 12345,       // Aggregate trade ID
        //     "p": "0.001",     // Price
        //     "q": "100",       // Quantity
        //     "f": 100,         // First trade ID
        //     "l": 105,         // Last trade ID
        //     "T": 123456785,   // Trade time
        //     "m": true,        // Is the buyer the market maker?
        //     "M": true         // Ignore
        // }

 //}


}
</script>

<style scoped>


</style>
