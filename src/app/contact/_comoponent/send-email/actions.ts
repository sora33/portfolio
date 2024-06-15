'use server'

import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { EmailTemplate } from './email-template'
import type { State } from './state'

const resend = new Resend(process.env.RESEND_API_KEY)
const sendEmailAddress = process.env.SEND_EMAIL

export const sendEmail = async (_: State, formData: FormData): Promise<State> => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!sendEmailAddress) {
    return { message: 'サーバー側で問い合わせに失敗しました。再度お問い合わせください。' }
  }

  if (!name || !email || !message) {
    return { message: 'お名前、メールアドレス、メッセージを入力してください' }
  }

  // バリデーション
  if (name.length > 500) {
    return { message: 'お名前は500文字以内で入力してください' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { message: 'メールアドレスが不正です' }
  }

  if (email.length > 500) {
    return { message: 'メールアドレスは500文字以内で入力してください' }
  }

  if (message.length > 1000) {
    return { message: 'メッセージは1000文字以内で入力してください' }
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
    return { message: 'メール送信に失敗しました。再度お問い合わせください。' }
  }

  redirect('/contact?sent=true')
}
