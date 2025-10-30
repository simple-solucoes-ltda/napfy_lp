import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { OurStory } from '@/components/OurStory'
import { PainPoints } from '@/components/PainPoints'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { WhyItWorks } from '@/components/WhyItWorks'

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <WhyItWorks />
      <HowItWorks />
      <PrimaryFeatures />
      <OurStory />
      <Faqs />
      <CallToAction />
    </>
  )
}
