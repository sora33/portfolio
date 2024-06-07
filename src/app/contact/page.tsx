import { Button, Text, Title } from '~/app/_component/ui'
import { sendEmail } from '~/app/contact/_comoponent/actions'

const labelStyle = 'text-sm font-bold text-slate-500 dark:text-slate-400'

const inputStyle = `
  flex h-10 w-full rounded-md px-3 py-2 text-foreground
  border border-input bg-background ring-offset-background
  placeholder:text-slate-500 file:text-sm file:font-medium
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  file:border-0 file:bg-transparent
  disabled:cursor-not-allowed disabled:opacity-50
`
const textareaStyle = `
  ${inputStyle}
  h-[160px] md:h-[200px]
`
type Props = {
  searchParams: Record<string, string | string[]>
}

export default function Page({ searchParams }: Props) {
  const { sent, error } = searchParams
  const isSent = sent === 'true'
  const isError = error === 'true'

  return (
    <div className="grid gap-8 md:gap-12">
      <div className="grid gap-1 md:gap-2">
        <Title as="h1" className="">
          Contact
        </Title>
        <Text>
          {isSent
            ? 'お問い合わせが完了しました。内容を確認次第、ご連絡いたしますのでお待ちください。'
            : 'お問い合わせはこちらからお願いいたします。'}
        </Text>
      </div>
      {isSent ? (
        <Button href="/">トップに戻る</Button>
      ) : (
        <form action={sendEmail}>
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
              <Button type="submit">送信</Button>
              <button type="reset" className="text-orange-500 hover:text-orange-600">
                フォームをクリア
              </button>
            </div>
            {isError && <p className="text-sm text-red-500">送信に失敗しました。再度お問い合わせください。</p>}
          </div>
        </form>
      )}
    </div>
  )
}
