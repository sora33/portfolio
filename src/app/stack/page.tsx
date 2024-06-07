import { Text, Title } from '~/app/_component/ui'

export default function Home() {
  return (
    <div className="grid gap-12">
      <div className="grid gap-2">
        <Title as="h1" className="">
          Stack
        </Title>
        <Text>私が使用している技術やルーツを紹介します。</Text>
      </div>
      <div className="grid gap-6">
        <Text>これから実装します。</Text>
      </div>
    </div>
  )
}
