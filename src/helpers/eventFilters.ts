import { Event } from "../types";

export function hideUnsoldEvents(events: Event[]): Event[] {
	const currentTime = new Date();
	return events.filter((event) => {
		const timeDifference = event.startTime.getTime() - currentTime.getTime();
		return !(timeDifference <= 48 * 60 * 60 * 1000 && event.sold === 0);
	});
}
