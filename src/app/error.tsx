'use client'
import { Link, Text, Title } from '~/app/_component/ui'
export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col gap-4">
      <Title as="h1">サーバーエラーになりました。</Title>
      <Text>エラーメッセージ：{error.message}</Text>
      <button type="button" onClick={reset}>
        リロード
      </button>
      <Text>
        申し訳ございません。
        <br />
        数分後に再度操作を行ってください。
      </Text>
      <Link href="/">トップページへ</Link>
    </div>
  )
}
