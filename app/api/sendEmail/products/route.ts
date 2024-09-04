import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, phoneNumber, trekName, productName, quantity, trekDate } =
    await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: fullName,
    to: process.env.GMAIL_USER,
    subject: `Product Booking Form Submission from ${fullName}`,
    text: `
      Name: ${fullName}
      Phone Number: ${phoneNumber}
      Trek Name: ${trekName}
      Trek Date: ${new Date(trekDate).toDateString()}
      Product Name: ${productName}
      Quantity: ${quantity}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error sending email", details: error },
      { status: 500 }
    );
  }
}
