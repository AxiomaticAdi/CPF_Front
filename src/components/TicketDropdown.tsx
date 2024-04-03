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
				<Listbox.Options className="mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
					{ticketOptions.map((ticketNumber) => (
						<Listbox.Option
							key={ticketNumber}
							value={ticketNumber}
							className={({ active }) =>
								`relative cursor-default select-none py-2 pl-10 pr-4 ${
									active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
								}`
							}
						>
							{({ selected }) => (
								<>
									<span
										className={`${selected ? "font-medium" : "font-normal"} block truncate`}
									>
										{ticketNumber} Tickets
									</span>
									{selected ? (
										<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
											{/* Checkmark icon or similar visual cue */}
										</span>
									) : null}
								</>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	);
}
