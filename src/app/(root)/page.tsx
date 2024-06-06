import { Text, Title } from '~/app/_component/ui'
import { FaceImage } from './_component/face-image'

export default function Home() {
  return (
    <div className="grid gap-12">
      <FaceImage />
      <div className="grid gap-2">
        <Title as="h1" className="">
          Hiranuma Shuya
        </Title>
        <Text>Software Engineer・Project Manager</Text>
      </div>
      <div className="grid gap-6">
        <Text>ものづくりが好きです。</Text>
        <Text>
          現在は、スタートアップのWEB受託開発で、ToB向け、ToC向けのプロダクトを開発しています。開発に関わるすべての工程を幅広く担当しています。
        </Text>
        <Text>
          大学では建築を学んでいました。新卒では、大手ハウスメーカーのITデザイン部に勤めて、システムの企画やPM、設計、開発、運用、などの行程を幅広く担当しました。
        </Text>
        <Text>
          システム開発と建築は、大義的に「ものづくり」といえます。利用者を第一に考えて、利用者の人に喜んでもらえることが最も重要だと学んできました。
          この想いをモットーに、多くのプロダクトに携わり、社会に貢献していきます。
        </Text>
        <Text>
          本業以外で、個人事業主としても仕事を承っています。サイト制作やアプリ開発、技術的なご相談など、お気軽にご連絡ください。
        </Text>
        <Text>趣味は、音楽と建築とワインと温泉です。最近は特にワインにハマっています。</Text>
      </div>
    </div>
  )
}
