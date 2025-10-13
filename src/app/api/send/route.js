//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { dividerClasses } from "@mui/material";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

async function verifyTurnstileToken(token) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not set");
    return false;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secretKey);
  formData.append("response", token);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

export async function POST(req, res) {
  const { email, subject, message, turnstileToken } = await req.json();

  // Verify Turnstile token
  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Missing Turnstile token" },
      { status: 400 }
    );
  }

  const isTokenValid = await verifyTurnstileToken(turnstileToken);
  if (!isTokenValid) {
    return NextResponse.json(
      { error: "Invalid Turnstile token" },
      { status: 400 }
    );
  }

  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail, //sends from a dummy email
      to: email, //sends the email to the person inputting the form
      bcc: toEmail, //sends to my email bcc so that I can receive it without my address being exposed
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting!</p>
          <p>The following message has been sent:</p>
          <p>&quot;{message}&quot;</p>
          <p>Replies to this email will not be received.</p>
        </>
      ),
      //react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
