//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { dividerClasses } from '@mui/material';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
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
        <p className="italic">"{message}"</p>
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