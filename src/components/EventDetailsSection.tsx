import DOMPurify from "dompurify";
import { Event } from "../types";
import BadgePrice from "./Badges/BadgePrice";

interface EventDetailsSectionProps {
  event: Event;
  includeDetails?: boolean;
}

export default function EventDetailsSection({
  event,
  includeDetails = true,
}: EventDetailsSectionProps) {
  const remainingTickets = event.capacity - event.sold;
  const sanitizedDescription = DOMPurify.sanitize(event.description);

  const fmt = (n: number) => (Number.isInteger(n) ? n : n.toFixed(2));
  const deposit = event.depositPrice;
  const remainingPerTicket =
    deposit !== undefined ? event.price - deposit : undefined;

  return (
    <div className="flex flex-col items-center">
      <div className="w-80 sm:w-96 h-60 rounded-md relative">
        <img
          src={event.imageUrl}
          alt={event.name}
          className="w-full h-full rounded-md object-cover"
        />
        <BadgePrice price={event.price} />
      </div>

      <h1 className="text-xl font-bold my-4">{event.name}</h1>

      {includeDetails && (
        <div
          className="max-w-96 mb-4 prose text-left"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      )}

      <div className="mt-2 font-semibold">
        <div>
          {new Date(event.startTime).toLocaleDateString("en-US", {
            timeZone: "America/Los_Angeles",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div>
          {new Date(event.startTime).toLocaleTimeString("en-US", {
            timeZone: "America/Los_Angeles",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            hourCycle: "h11",
          })}{" "}
          to{" "}
          {new Date(event.endTime).toLocaleTimeString("en-US", {
            timeZone: "America/Los_Angeles",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            hourCycle: "h11",
          })}{" "}
          PT
        </div>
      </div>

      <p>{remainingTickets} remaining tickets</p>

      {deposit !== undefined && remainingPerTicket !== undefined && (
        <div className="mt-3 text-sm text-gray-600 text-center">
          <p>
            <span className="font-semibold">Deposit (due today):</span> $
            {fmt(deposit)} per ticket
          </p>
          <p>
            <span className="font-semibold">Remaining (due at event):</span> $
            {fmt(remainingPerTicket)} per ticket
          </p>
          <p>
            <span className="font-semibold">Full price:</span> $
            {fmt(event.price)} per ticket
          </p>
        </div>
      )}
    </div>
  );
}
