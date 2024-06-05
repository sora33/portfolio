import Link from 'next/link'
import { Text, Title } from '~/app/_component/ui'

const data = [
  {
    id: 1,
    date: '2024.05.01',
    category: 'engineering',
    title: 'ものづくりが好きです。',
  },
  {
    id: 2,
    date: '2024.05.01',
    category: 'engineering',
    title: 'ものづくりが好きです。だけどそれだけではダメです。ものづくりが好きです。だけどそれだけではダメです。',
  },
]

export default function Home() {
  return (
    <div className="grid gap-12">
      <div className="grid gap-2">
        <Title as="h1" className="">
          Article
        </Title>
        <Text>アイデアや技術などの記事を配信します。</Text>
      </div>
      <div className="grid gap-6">
        {data.map((item) => (
          <Link
            href={`/article/${item.id}`}
            className="grid gap-1 border border-foreground/50 shadow-foreground/20 shadow-sm p-4 rounded-md
                      hover:shadow-foreground/30 hover:border-foreground/80 transition-all duration-500"
            key={item.id}
          >
            <div className="flex items-center gap-4">
              <Text size="sm">{item.date}</Text>
              <Text size="xs" className="bg-foreground/10 p-1 px-2 rounded-md">
                {item.category}
              </Text>
            </div>
            <Title as="h2" size="md" className="font-medium">
              {item.title}
            </Title>
          </Link>
        ))}
      </div>
    </div>
  )
}
