import HomeContact from '@/components/HomeContact'
import HomeHero from '@/components/HomeHero'
import HomeStatsSection from '@/components/HomeStatsSection'
import { MdDocumentScanner } from 'react-icons/md'
const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <HomeHero />
      <HomeContact />
      <HomeStatsSection />
    </div>
  )
}

export default HomePage
