<template>
  <div>
    <h1>Графики криптовалюты (BINANCE / Спот)</h1>

    <div class=" d-inline-flex flex-wrap justify-content-start w-100">
      <ChartCryptoComp />
    </div>
  </div>
</template>

<script>
import ChartCryptoComp from '@/components/crypto/ChartCryptoComp.vue';
import { createChart } from 'lightweight-charts';


export default {
  name: "all-charts-view",
  components: {
    ChartCryptoComp,
  },
  data() {
    return {
      cryptoCurrencies: [
        {title: 'BTC - BUSD',
        value: 'BTCBUSD'},
        {
          title:'BNB - BUSD',
        value: 'BNBBUSD'},
        {
          title: 'ETH - BUSD',
          value: 'ETHBUSD'
        },
        {
          title: 'XRP - BUSD',
          value: 'XRPBUSD'
        }
      ],
      cryptoIntervals: ['15m','1h','4h','1d'],
      selectCoin: 'BTCBUSD',
      selectInterv: '1m',
      candlestickSeries: null,
      arrTrades: [],
      isGlassStopped: true,
      isOpenedChart: false,
      socketStream: null,
      tradeStream: null,


    }
  },
  methods: {
    openWindowChart() {
      this.isOpenedChart = !this.isOpenedChart;
    },

    closeTradesGlass() {
      this.isGlassStopped = !this.isGlassStopped
    },

    // 1. Получаем криптовалютную пару из select криптовалютной пары
    getCoin(e) {
      this.selectCoin = e.target.value;
      this.socketStream.close();// Останавливаем WebSocket Графика
      this.tradeStream.close();// Останавливаем WebSocket Стакана
      this.arrTrades.length = 0; // Очищаем стакан от сделок

      // Запускаем заново все процессы
      this.createMyChart();
      this.setHistoryCandles(this.selectCoin,  this.selectInterv);
      this.streamCandles( this.selectCoin,  this.selectInterv);
      this.streamTrades( this.selectCoin);

    },
    // 2. Получаем интервал графика из select интервал
    getInterv(e) {
      this.selectInterv = e.target.value;
    },

    // 3. Создаем шаблон графика TradingView на основе приложения 'lightweight-charts'
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
      this.candlestickSeries = chart.addCandlestickSeries({
        //задать свойства свечей см. документацию
        // https://tradingview.github.io/lightweight-charts/docs#creating-a-series
      });
      chart.timeScale().fitContent();
      chart.timeScale().fitContent();
    },

    // 4.  Загружаем первоначальный "мертвый" график Spot---------
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

    // 5. Создаем обновление графика ("оживляем" его) с помощью WebSocket --------
    streamCandles(symbol, interval) {
      // ВНИМАНИЕ! Передача строки с символами ${symbol} валюты должна осуществляться в нижнем регистре toLowerCase()
      this.socketStream = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`);
      this.socketStream.onmessage = (e) => {
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
          priceTrade: Number(price).toFixed(4),
          quantTrade: Number(quantity).toFixed(4),
          sumTrade: (price * quantity).toFixed(4),
          isBuyMaker: isBuy
        }

        // 7. Заносим все объекты в массив в начало, чтобы v-for разложить его в таблице
        this.arrTrades.unshift(objTrade);

        // 8. Ограничиваем количество полученных записей сделок в стакане
        if(this.arrTrades.length > 20) {
          this.arrTrades.length = 20;
        }
      }
    },

    // startChart() {
    //   this.isChartOpened = !this.isChartOpened;
    //
    //   this.createMyChart();
    //   this.setHistoryCandles();
    //   this.streamCandles();
    //   this.streamTrades();
    //
    // },


  },
  mounted() {
    this.createMyChart();
    this.setHistoryCandles(this.selectCoin,  this.selectInterv);
    this.streamCandles( this.selectCoin,  this.selectInterv);
    this.streamTrades( this.selectCoin);
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
