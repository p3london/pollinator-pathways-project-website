import { sendMail } from "@/lib/send-email";

/**
 * TODO: update this when it makes sense.
 * Could perhaps control from TinaCMS, and import from
 * adjacent JSON... but maybe it makes sense to keep this
 * separate, since it's so tied in to SendGrid.
 */
const ADMIN_EMAIL = "hi@zch.sh";

/**
 * Receive form data, and send an email based on the form data.
 */
export async function POST(request: Request) {
	const { recipient, html, subject } = await request.json();
	// Send the email
	const { err, status } = await sendMail({
		to: recipient ?? ADMIN_EMAIL,
		from: ADMIN_EMAIL,
		subject,
		html,
	});
	// Return a response to the client
	if (status === "success") {
		return new Response("Email sent", { status: 200 });
	} else {
		return new Response(err, { status: 500 });
	}
}
