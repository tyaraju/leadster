import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Banner from '@/components/banner'
import ContentVideos from '@/components/contentVideos'
import ContentBanner from '@/components/contentBanner'


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    > 
      <Header />
      <Banner />
      <ContentVideos />
      <ContentBanner />
      <Footer />
    </main>
  )
}
