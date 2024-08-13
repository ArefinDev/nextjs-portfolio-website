import {
  About,
  Header,
  Intro,
  Skills,
  Projects,
  Achievements,
  Contact,
  Footer,
} from '@/components/home'

import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <main className='container mx-auto'>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
export default page
