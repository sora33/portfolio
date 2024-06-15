import { Button, Text, Title } from '~/app/_component/ui'
import { ContactForm } from '~/app/contact/_comoponent/contact-form'

type Props = {
  searchParams: Record<string, string | string[]>
}

export default function Page({ searchParams }: Props) {
  const { sent } = searchParams
  const isSent = sent === 'true'

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
      {isSent ? <Button href="/">トップに戻る</Button> : <ContactForm />}
    </div>
  )
}
