import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface TicketDropdownProps {
	remainingTickets: number;
	ticketQuantity: number;
	setTicketQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function TicketDropdown({
	remainingTickets,
	ticketQuantity,
	setTicketQuantity,
}: TicketDropdownProps) {
	// Don't show the dropdown if there are no tickets left
	if (remainingTickets <= 0) {
		return <div className="text-red-500">Sold out</div>;
	}

	// Generate an array of ticket numbers (1 through remainingTickets)
	const ticketOptions = Array.from(
		{ length: remainingTickets },
		(_, index) => index + 1
	);

	return (
		<div>
			<Listbox value={ticketQuantity} onChange={setTicketQuantity}>
				<Listbox.Button className="flex items-center gap-2 bg-white border border-gray-300 rounded-md shadow-sm p-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
					{ticketQuantity} <ChevronDownIcon className="h-4 w-4" />
				</Listbox.Button>
				<Listbox.Options className="absolute z-10 mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
					{ticketOptions.map((ticketNumber) => (
						<Listbox.Option
							key={ticketNumber}
							value={ticketNumber}
							className={({ active }) =>
								`relative cursor-default select-none py-2 px-4 ${
									active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
								}`
							}
						>
							{ticketNumber} Tickets
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	);
}
