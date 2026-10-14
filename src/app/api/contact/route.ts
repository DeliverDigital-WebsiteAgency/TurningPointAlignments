import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, company, service, message } = body

  if (!name || !phone || !message) {
    return NextResponse.json({ error: 'Name, phone, and message are required.' }, { status: 400 })
  }

  // SENDGRID_API_KEY is set in SiteGround Site Tools > Node.js > Environment Variables
  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) {
    console.error('SENDGRID_API_KEY is not set')
    return NextResponse.json({ error: 'Email is not configured.' }, { status: 500 })
  }

  sgMail.setApiKey(apiKey)
  try {
    await sgMail.send({
      to: 'service@semialignments.com',
      from: { email: 'noreply@semialignments.com', name: 'Turning Point Alignments' },
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\n\n${message}`,
    })
  } catch (err) {
    console.error('SendGrid contact send failed:', err)
    return NextResponse.json({ error: 'Could not send message.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
