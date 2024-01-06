//import { EmailTemplate } from '../../../components/EmailTemplate';
import { dividerClasses } from '@mui/material';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: (
      <>
        <p>Email Body</p>
      </>
      ),
      //react: EmailTemplate({ firstName: 'John' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}