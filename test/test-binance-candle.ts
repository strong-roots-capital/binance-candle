import test from 'ava'

/**
 * Library under test
 */

import BinanceCandle from '../src/binance-candle'

test('candle is of expected form', t => {
    function returnCandle(): BinanceCandle {
        return  {
            openTime: 1508328900000,
            open: '0.05655000',
            high: '0.05656500',
            low: '0.05613200',
            close: '0.05632400',
            volume: '68.88800000',
            closeTime: 1508329199999,
            quoteAssetVolume: '2.29500857',
            trades: 85,
            baseAssetVolume: '40.61900000'
        }
    }
    const candle: BinanceCandle = returnCandle()
    t.pass()
})
