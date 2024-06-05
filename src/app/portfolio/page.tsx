import { Link, Text, Title } from '~/app/_component/ui'

export default function Home() {
  return (
    <div className="grid gap-12">
      <div className="grid gap-2">
        <Title as="h1" className="">
          Portfolio
        </Title>
        <Text>私が作ったものを紹介します。</Text>
      </div>
      <div className="grid gap-6">
        <Link href="https://www.engineer-db.com" target="_blank">
          エンジニアDB
        </Link>
      </div>
    </div>
  )
}
