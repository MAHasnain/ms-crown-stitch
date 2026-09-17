import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const companyName = formData.get("companyName")?.toString() ?? "";
    const contactPerson = formData.get("contactPerson")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const quantity = formData.get("quantity")?.toString() ?? "";
    const deadline = formData.get("deadline")?.toString() ?? "";
    const backing = formData.get("backing")?.toString() ?? "";
    const details = formData.get("details")?.toString() ?? "";
    const artwork = formData.get("artwork") as File | null;

    const attachments = [];
    if (artwork && artwork.size > 0) {
      const arrayBuffer = await artwork.arrayBuffer();
      attachments.push({
        filename: artwork.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    await resend.emails.send({
      from: "MS Crown Stitch <quotes@mscrownstitch.com>",
      to: ["7a6337@gmail.com", "farhanaolqms@gmail.com"], 
      replyTo: email,
      subject: `New Quote Request — ${companyName || "Website Inquiry"}`,
      html: `
        <h2>New Quote Request</h2>
        <p><b>Company:</b> ${companyName}</p>
        <p><b>Contact Person:</b> ${contactPerson}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Quantity:</b> ${quantity}</p>
        <p><b>Deadline:</b> ${deadline}</p>
        <p><b>Embroidery Backing:</b> ${backing}</p>
        <p><b>Details:</b><br/>${details}</p>
        ${artwork && artwork.size > 0 ? `<p><b>Artwork:</b> ${artwork.name} (attached)</p>` : ""}
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}