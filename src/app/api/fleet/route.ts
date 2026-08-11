import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email } = body

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid work email is required.' }, { status: 400 })
  }

  // TODO: add SendGrid key to .env.local as SENDGRID_API_KEY
  // and uncomment the block below when ready
  //
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // await sgMail.send({
  //   to: 'service@semialignments.com',
  //   from: 'noreply@semialignments.com',
  //   subject: 'New fleet inquiry',
  //   text: `Fleet inquiry email: ${email}`,
  // })

  console.log('Fleet form submission:', { email })

  return NextResponse.json({ success: true })
}
