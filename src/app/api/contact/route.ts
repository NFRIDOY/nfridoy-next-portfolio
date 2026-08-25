import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #18181b; border-radius: 12px; border: 1px solid #27272a;">
          <h2 style="color: #10b981; font-size: 20px; margin-bottom: 16px;">New Contact Form Message</h2>
          <div style="margin-bottom: 12px;">
            <span style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</span>
            <p style="color: #f4f4f5; font-size: 16px; margin: 4px 0 0 0;">${name}</p>
          </div>
          <div style="margin-bottom: 12px;">
            <span style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</span>
            <p style="color: #f4f4f5; font-size: 16px; margin: 4px 0 0 0;">
              <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
            </p>
          </div>
          <div style="margin-bottom: 12px;">
            <span style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</span>
            <p style="color: #f4f4f5; font-size: 16px; margin: 4px 0 0 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #27272a; margin: 20px 0;" />
          <p style="color: #52525b; font-size: 12px; margin: 0;">
            Sent from <a href="https://nfridoy.vercel.app" style="color: #10b981; text-decoration: none;">nfridoy.vercel.app</a> contact form
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
