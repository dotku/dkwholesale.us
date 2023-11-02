export const discountRate = 1.05;
export const regularRate = 1.1;

export function getFairPrice(price: number, profitRate: number) {
  const ifDiscount = profitRate === discountRate ? true : false;
  const margin = 200;
  return Number(
    price * profitRate - price > margin
      ? Number(price) + margin
      : price * profitRate
  );
}
