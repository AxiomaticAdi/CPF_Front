interface BadgePriceProps {
  price: number;
  depositPrice?: number;
}

export default function BadgePrice({ price, depositPrice }: BadgePriceProps) {
  const displayPrice = depositPrice ?? price;
  const formatted = Number.isInteger(displayPrice)
    ? displayPrice
    : displayPrice.toFixed(2);

  return (
    <div className="absolute top-4 right-4 bg-black text-white font-light p-2 rounded-md text-sm z-10 opacity-80">
      {depositPrice !== undefined && (
        <div className="text-xs opacity-100 uppercase tracking-wide">
          Deposit
        </div>
      )}
      <div className="text-xl opacity-100">${formatted}</div>
    </div>
  );
}
