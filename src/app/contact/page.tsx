import { Button, Text, Title } from '~/app/_component/ui'

export default function Home() {
  return (
    <div className="grid gap-12">
      <div className="grid gap-2">
        <Title as="h1" className="">
          Contact
        </Title>
        <Text>お問い合わせはこちらからお願いいたします。</Text>
      </div>
      <div className="grid gap-6">
        <div className="grid">
          <label>お問い合わせ内容</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label>メールアドレス</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label>お問い合わせ内容</label>
          <textarea />
        </div>
        <div className="flex justify-between">
          <Button type="submit">送信</Button>
          <button type="reset" className="text-orange-500">
            フォームをクリア
          </button>
        </div>
      </div>
    </div>
  )
}
