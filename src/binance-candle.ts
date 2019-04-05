/**
 * binance-candle
 * Interface for a Binance candle
 */


/**
 * An atomic unit of time-series data as returned by the Binance
 * exchange API.
 */
export default interface BinanceCandle {
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
