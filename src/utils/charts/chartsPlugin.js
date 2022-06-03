import { createChart } from 'lightweight-charts';

export default {

    install(app, options) {
        app.config.globalProperties.$chart = function () {

            //=================== CHART 1 ============================================

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

            //=================== CHART 2 ============================================


            const chart1 = createChart(document.querySelector('#chart1'), { width: 300, height: 300 });
            const candlestickSeries1 = chart1.addCandlestickSeries();
            candlestickSeries1.setData([
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
            chart1.timeScale().fitContent();


            //======= Функция для изменения размеров графика при изменении размеров окна ======

            //window.addEventListener('resize', () => {
                //chart.resize(
                    //document.documentElement.clientWidth / 5.82,
                    //document.documentElement.clientHeight / 2.48,
                //)
            //});


            // ===== FUNCTIONS =================================================





        }

        app.provide('chartPlugin', options)
    }
}
