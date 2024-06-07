import Image from 'next/image'
import { Link, Text, Title } from '~/app/_component/ui'

const data = [
  {
    title: 'エンジニアDB',
    description: 'エンジニア同士が交流するためのサービスです。',
    url: 'https://www.engineer-db.com',
    image: {
      src: '/portfolio/engineer_db.jpg',
      alt: 'エンジニアDBのサイトイメージ',
    },
  },
]

export default function Home() {
  return (
    <div className="grid gap-8 md:gap-12">
      <div className="grid gap-1 md:gap-2">
        <Title as="h1" className="">
          Portfolio
        </Title>
        <Text>これまで作ったものを紹介します。</Text>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {data.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            target="_blank"
            className="grid gap-2 no-underline group hover:-translate-y-[2px] transition-all duration-300"
          >
            <Image src={item.image.src} alt={item.image.alt} width={600} height={315} objectFit="contain" />
            <div className="group-hover:underline">
              <Title as="h2" size="md">
                {item.title}
              </Title>
              <Text>{item.description}</Text>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
