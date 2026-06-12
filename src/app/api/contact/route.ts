import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, company, service, message } = body

  if (!name || !phone || !message) {
    return NextResponse.json({ error: 'Name, phone, and message are required.' }, { status: 400 })
  }

  // TODO: add SendGrid key to .env.local as SENDGRID_API_KEY
  // and uncomment the block below when ready
  //
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // await sgMail.send({
  //   to: 'service@turningpointalignments.com',
  //   from: 'noreply@turningpointalignments.com',
  //   subject: `New inquiry from ${name}`,
  //   text: `Name: ${name}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\n\n${message}`,
  // })

  console.log('Contact form submission:', { name, phone, company, service, message })

  return NextResponse.json({ success: true })
}
