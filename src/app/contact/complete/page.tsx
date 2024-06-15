import { Button, Text, Title } from '~/app/_component/ui'

export default function Page() {
  return (
    <div className="grid gap-8 md:gap-12">
      <div className="grid gap-1 md:gap-2">
        <Title as="h1" className="">
          Contact
        </Title>
        <Text>お問い合わせが完了しました。内容を確認次第、ご連絡いたしますのでお待ちください。</Text>
      </div>
      <Button href="/">トップに戻る</Button>
    </div>
  )
}
