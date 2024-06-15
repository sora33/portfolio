import { Text, Title } from '~/app/_component/ui'
import { ContactForm } from '~/app/contact/_comoponent/contact-form'

export default function Page() {
  return (
    <div className="grid gap-8 md:gap-12">
      <div className="grid gap-1 md:gap-2">
        <Title as="h1" className="">
          Contact
        </Title>
        <Text>お問い合わせはこちらからお願いいたします。</Text>
      </div>
      <ContactForm />
    </div>
  )
}
