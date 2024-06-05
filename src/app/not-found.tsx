import { Link, Text, Title } from '~/app/_component/ui'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <Title as="h1">404 Not Found</Title>
      <Text>
        申し訳ございません。
        <br />
        お探しのページが見つかりませんでした。
      </Text>
      <Link href="/">トップページへ</Link>
    </div>
  )
}
