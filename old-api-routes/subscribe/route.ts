const SUBSCRIBE_ENDPOINT = "https://zchsh-emailsubscribedemo.web.val.run";

/**
 * We expect either a "success" or "existingSubscriber" status in the response
 * from val.town. That's just a stopgap, of course!
 */
export type EmailResponseStatus = "success" | "existingSubscriber";

export async function POST(request: Request) {
	const { email, name } = await request.json();
	try {
		const res = await fetch(SUBSCRIBE_ENDPOINT, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, name }),
		});
		const data = await res.json();
		return Response.json({ ...data, email });
	} catch {
		return Response.json({ status: "error" }, { status: 500 });
	}
}
