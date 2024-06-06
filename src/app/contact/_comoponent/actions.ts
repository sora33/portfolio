'use server'

import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { EmailTemplate } from '~/app/contact/_comoponent/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)
const sendEmailAddress = process.env.SEND_EMAIL

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message || !sendEmailAddress) {
    return { error: 'Missing required fields' }
  }

  const { error } = await resend.emails.send({
    from: `hiranuma shuya<${sendEmailAddress}>`,
    bcc: 'shuuuuuuuuuuya@icloud.com',
    to: email,
    subject: 'お問い合わせありがとうございました。',
    react: EmailTemplate({ name, email, message }),
    text: message,
  })

  if (error) {
    console.error(error)
    redirect('/contact?error=true')
  }

  redirect('/contact?sent=true')
}
