"use client";

import { useState } from "react";
import PrimaryButton from "../primary-button";
import type { EmailResponseStatus } from "../../../old-api-routes/subscribe/route";
import s from "./email-subscribe-form.module.css";

interface ResponseData {
  status: EmailResponseStatus | "error" | "idle" | "loading";
  email?: string;
}

export default function EmailSubscribeForm({
  subscribeHeading,
  subscribePlaceholder,
}: {
  subscribeHeading: string;
  subscribePlaceholder: string;
}) {
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState<ResponseData>({
    status: "idle",
  });

  async function handleSubmit() {
    setResponseData({ status: "loading" });
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setResponseData(data);
  }

  return (
    <div className={s.root}>
      {/* <pre>
				<code>{JSON.stringify({ email, responseData }, null, 2)}</code>
			</pre> */}
      <p className={s.message}>{subscribeHeading}</p>
      {responseData.status === "success" ? (
        <p>Success! 🎉 {responseData.email} is now subscribed.</p>
      ) : responseData.status === "existingSubscriber" ? (
        <p>
          ✅ Existing subscriber. {responseData.email} was already subscribed.
        </p>
      ) : responseData.status === "error" ? (
        <p>❌ Error, oops</p>
      ) : responseData.status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <form className={s.form}>
          <input
            className={s.emailInput}
            type="email"
            placeholder={subscribePlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={s.submitButtonContainer}>
            <PrimaryButton type="button" onClick={() => handleSubmit()}>
              Subscribe
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
}
