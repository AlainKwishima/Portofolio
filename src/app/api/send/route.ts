import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/contact-email-template'
import { type ContactEmailTemplateProps } from '@/types'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } =
      (await request.json()) as ContactEmailTemplateProps

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' }, 
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' }, 
        { status: 400 }
      )
    }

    // Check if API key is available
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json(
        { message: 'Email service not configured' }, 
        { status: 503 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Harshhaa Portfolio <noreply@notharshhaa.site>',
      to: 'harshhaa03@gmail.com',
      subject: `New message from ${firstName} ${lastName}`,
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        message
      })
    })

    if (error) {
      return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
    }

    return NextResponse.json({ message: data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Unexpected error', error }, { status: 500 })
  }
}
