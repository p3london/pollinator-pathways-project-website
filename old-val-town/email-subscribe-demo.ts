/** @ts-expect-error - This script is meant to be run on val.town! */
import { blob } from "https://esm.town/v/std/blob?v=11";

interface Subscriber {
	name: string;
	email: string;
}

async function getSubscribers(): Promise<Subscriber[]> {
	return (await blob.getJSON("subscribers")) ?? [];
}

async function setSubscribers(subscribers: Subscriber[]): Promise<void> {
	await blob.setJSON("subscribers", subscribers);
}

export const storeSubmittedEmail = async (
	request: Request
): Promise<Response> => {
	// Only accept post requests
	if (request.method !== "POST") {
		return Response.json(
			{ message: "This endpoint responds to POST requests." },
			{
				status: 400,
			}
		);
	}

	// We expect the { email, name } for the subscriber to be
	// encoded as JSON in the request body.
	let newSubscriber: Subscriber;
	try {
		const { name, email } = await request.json();
		if (
			!name ||
			!email ||
			typeof name !== "string" ||
			typeof email !== "string"
		) {
			return Response.json(
				{
					message:
						"Received invalid request, please provide a valid email and name in the posted JSON data.",
				},
				{
					status: 400,
				}
			);
		}
		newSubscriber = { name, email };
	} catch (e) {
		return Response.json(
			{ message: "The body of this request was not JSON-encoded." },
			{
				status: 400,
			}
		);
	}

	// Return a special status for existing subscribers
	const subscribers = await getSubscribers();
	console.log(subscribers);
	const isExistingSubscriber = subscribers.filter((entry) => {
		return entry.email === newSubscriber.email;
	});
	if (isExistingSubscriber) {
		return Response.json({ status: "existing" });
	}

	// If we successfully sign up the subscriber, return a success status
	await setSubscribers([...subscribers, newSubscriber]);
	return Response.json({ status: "success" });
};
