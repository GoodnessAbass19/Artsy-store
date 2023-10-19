export const FormatCurrencyValue = (value: number) => {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

  return formattedValue;
};
