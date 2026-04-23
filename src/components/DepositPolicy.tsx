type Props = {
  depositPrice: number;
};

export default function DepositPolicy({ depositPrice }: Props) {
  return (
    <div className="rounded-2xl border border-field-green/20 bg-cloud-white px-6 py-6 text-left shadow-sm">
      <h3 className="mb-3 text-center font-serif text-xl font-semibold text-field-green">
        Saving Your Seat at the Table
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-mountain-stone">
        To join us for dinner, we ask for a{" "}
        <span className="font-semibold text-rich-black">
          ${depositPrice} deposit per guest
        </span>{" "}
        when booking. The remaining balance is settled after dinner, so you can
        simply relax and enjoy your evening on the farm.
      </p>

      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-field-green">
        Life happens — we understand plans can change
      </p>

      <ul className="space-y-2.5 text-sm leading-relaxed text-mountain-stone">
        <li className="flex gap-3">
          <span className="w-4 flex-none text-center font-semibold text-field-green">
            ✓
          </span>
          <span className="flex-1">
            <span className="font-medium text-rich-black">
              With 48 hours&rsquo; notice,
            </span>{" "}
            your deposit is happily refunded.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-4 flex-none text-center font-semibold text-golden-yellow">
            !
          </span>
          <span className="flex-1">
            <span className="font-medium text-rich-black">
              Within 48 hours,
            </span>{" "}
            deposits are non-refundable, but you&rsquo;re welcome to send
            someone in your place — just email us their name ahead of time.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-4 flex-none text-center font-semibold text-barn-red">
            ✕
          </span>
          <span className="flex-1">
            <span className="font-medium text-rich-black">
              If a reservation is missed without notice,
            </span>{" "}
            the deposit will be forfeited.
          </span>
        </li>
      </ul>
    </div>
  );
}
