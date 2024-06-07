import { Text, Title } from '~/app/_component/ui'

export default function Home() {
  return (
    <div className="grid gap-8 md:gap-12">
      <div className="grid gap-1 md:gap-2">
        <Title as="h1" className="">
          Good
        </Title>
        <Text>ネタページを作成したい。</Text>
      </div>
      <div className="grid gap-6">
        <Text>これから実装します。</Text>
      </div>
    </div>
  )
}
