export default {
  returnPercentageText(number: number) {
    const rouded = Math.round(number * 10)
    const stringPercentage = `${rouded}%`
    return stringPercentage
  },

  formatCurrencyUSD(value: number) {
    if (!value) return 'N/A'
    return Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
}
