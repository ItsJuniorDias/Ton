export const formatCurrency = (price: number) => {
  const value = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return value;
};
