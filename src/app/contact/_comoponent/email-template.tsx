import { Tailwind, Text } from '@react-email/components'

type Props = {
  name: string
  email: string
  message: string
}

export const EmailTemplate = (props: Props) => {
  const { name, email, message } = props

  return (
    <Tailwind>
      <Text className=" text-slate-700">※このメールはシステムからの自動返信です</Text>
      <Text className="">{name}様</Text>
      <Text className="">
        お世話になっております。
        <br />
        この度は、お問い合わせ頂きありがとうございました。
        <br />
        内容を確認次第、ご連絡いたしますのでお待ちください。
      </Text>

      <Text className="my-0 py-0">【お問い合わせ内容】</Text>
      <Text className="my-0 py-0">
        <span className="font-bold">お名前: </span>
        <span className="">{name}</span>
      </Text>
      <Text className="my-0 py-0">
        <span className="font-bold">メールアドレス: </span>
        <span className="">{email}</span>
      </Text>
      <Text className="my-0 py-0">
        <span className="font-bold">内容: </span>
        <span className="">{message}</span>
      </Text>
      <Text>以上、よろしくお願いいたします。</Text>
    </Tailwind>
  )
}
