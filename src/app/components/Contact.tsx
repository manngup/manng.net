"use client";

import React, { useState, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<any>(null);

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if Turnstile token is present
    if (!turnstileToken) {
      alert("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = {
      email:
        (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      subject:
        (form.elements.namedItem("subject") as HTMLInputElement)?.value || "",
      message:
        (form.elements.namedItem("message") as HTMLInputElement)?.value || "",
      turnstileToken: turnstileToken,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        // Reset the form and Turnstile
        form.reset();
        setTurnstileToken(null);
        turnstileRef.current?.reset();
      } else {
        console.error("Error sending message:", resData);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
  };

  const handleTurnstileError = () => {
    setTurnstileToken(null);
    console.error("Turnstile verification failed");
  };

  const handleTurnstileExpire = () => {
    setTurnstileToken(null);
    console.log("Turnstile token expired");
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Connect with me!</h5>
        <p className="text-gray-400 mb-4 max-w-md">
          I am actively seeking Software Engineering opportunities. If you have
          a position available or would like to connect, please don&apos;t
          hesitate to reach out to me via LinkedIn or through my contact form.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/manngup"} target="_blank">
            <GitHubIcon
              style={{ width: "5rem", height: "5rem", color: "white" }}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/manng/"} target="_blank">
            <LinkedInIcon
              style={{ width: "5rem", height: "5rem", color: "white" }}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleFormSubmission}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="name@gmail.com"
              className="bg-gray-100 border border-gray-400 placeholder-gray-400 text-gray-600 rounded p-2 block w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Hi, what's up!"
              className="bg-gray-100 border border-gray-400 placeholder-gray-400 text-gray-600 rounded p-2 block w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Are you free sometime to chat?"
              className="bg-gray-100 border border-gray-400 placeholder-gray-400 text-gray-600 rounded p-2 block w-full"
            />
          </div>
          <div className="mb-6 flex justify-center">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
              onSuccess={handleTurnstileSuccess}
              onError={handleTurnstileError}
              onExpire={handleTurnstileExpire}
              options={{
                theme: "dark",
                size: "flexible",
              }}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !turnstileToken}
            className="border rounded block w-full p-3 text-white font-semibold hover:scale-105 transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {
          //if email submitted show a successful message
          emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          ) : (
            <p></p>
          )
          //chose to display a blank paragraph element so elements on the page don't shift around
        }
      </div>
    </section>
  );
};

export default Contact;
