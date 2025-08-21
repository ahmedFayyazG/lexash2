import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, to } = body;

    // IMPORTANT: Use environment variables for your email credentials!
    // Do not hardcode them in your code.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email provider
      auth: {
          user: process.env.EMAIL_USER, // <-- This line reads your .env.local file
          pass: process.env.EMAIL_PASS,  // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to, // The destination email from your request
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Inquiry from Lexington Ashworth Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}