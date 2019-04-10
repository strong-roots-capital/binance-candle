# binance-candle [![Build status](https://travis-ci.org/strong-roots-capital/binance-candle.svg?branch=master)](https://travis-ci.org/strong-roots-capital/binance-candle) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/binance-candle.svg)](https://npmjs.org/package/@strong-roots-capital/binance-candle) [![codecov](https://codecov.io/gh/strong-roots-capital/binance-candle/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/binance-candle)

> Interface for a Binance candle

## Install

```shell
npm install @strong-roots-capital/binance-candle
```

## Use

```typescript
import binanceCandle from '@strong-roots-capital/binance-candle'

/**
 * An atomic unit of time-series data as returned by the Binance
 * exchange API.
 */
interface BinanceCandle {
    /**
     * Time of current candle open.
     */
    openTime: number,
    /**
     * Opening value of current Candle.
     */
    open: string,
    /**
     * Highest value observed during current Candle.
     */
    high: string,
    /**
     * Lowest value observed during current Candle.
     */
    low: string,
    /**
     * Closing value of current Candle.
     */
    close: string,
    /**
     * Volume observed during current Candle.
     */
    volume: string,
    /**
     * Time that current candle closes.
     */
    closeTime: number,
    /**
     * Volume in units of tradepair-numerator.
     */
    quoteAssetVolume: string,
    /**
     * Number of trades recorded during current Candle.
     */
    trades?: number,
    /**
     * Volume in units of tradepair-denominator.
     */
    baseAssetVolume: string
}
```

## Related

- [binance-candle-to-record](https://github.com/strong-roots-capital/binance-candle-to-record)
- [to-binance-timeframe](https://github.com/strong-roots-capital/to-binance-timeframe)
