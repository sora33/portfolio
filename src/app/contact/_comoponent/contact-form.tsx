'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '~/app/_component/ui'
import { sendEmail } from '~/app/contact/_comoponent/send-email/actions'
import { initialState } from '~/app/contact/_comoponent/send-email/state'

const labelStyle = 'text-sm font-bold text-slate-500 dark:text-slate-400'

const inputStyle = `
  flex h-10 w-full rounded-md px-3 py-2 text-foreground
  border border-slate-400 bg-background ring-offset-background
  placeholder:text-slate-500 file:text-sm file:font-medium
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  file:border-0 file:bg-transparent
  disabled:cursor-not-allowed disabled:opacity-50
`
const textareaStyle = `
  ${inputStyle}
  h-[160px] md:h-[200px] resize-y
`

const FormButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" isLoading={pending}>
      {pending ? '送信中...' : '送信'}
    </Button>
  )
}

export const ContactForm = () => {
  const [formState, formDispatch] = useFormState(sendEmail, initialState)

  return (
    <form action={formDispatch}>
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="name">
            お名前
          </label>
          <input type="text" id="name" name="name" maxLength={256} required={true} className={inputStyle} />
        </div>
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="email">
            メールアドレス
          </label>
          <input type="email" id="email" name="email" maxLength={256} required={true} className={inputStyle} />
        </div>
        <div className="grid gap-1">
          <label className={labelStyle} htmlFor="message">
            お問い合わせ内容
          </label>
          <textarea id="message" name="message" maxLength={1024} required={true} className={textareaStyle} />
        </div>
        <div className="flex justify-between">
          <FormButton />
          <button type="reset" className="text-orange-500 hover:text-orange-600">
            フォームをクリア
          </button>
        </div>
        {formState.message && <p className="text-sm text-red-500">{formState.message}</p>}
      </div>
    </form>
  )
}
