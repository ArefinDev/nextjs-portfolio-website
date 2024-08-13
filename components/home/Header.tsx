'use client'
import { Code2, Menu } from 'lucide-react'
import { ModeToggle } from '../toogle-mode'
import Link from 'next/link'

const handleScroll = (
  event: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  event.preventDefault()
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
}

const Header = () => {
  return (
    <header className='py-8'>
      <section className='flex justify-between h-full items-center'>
        <div className='flex items-center gap-2 text-2xl'>
          <span>
            <Code2 />
          </span>
          <h1>Adnan Arefin</h1>
        </div>
        <div className='flex gap-6 items-center'>
          <nav className='hidden lg:block'>
            <ul className='flex space-x-8'>
              <Link href='/'>
                <li>Home</li>
              </Link>
              <a href='#discover' onClick={e => handleScroll(e, 'discover')}>
                <li>Discover</li>
              </a>
              <a href='#skills' onClick={e => handleScroll(e, 'skills')}>
                <li>Skills & Experiences</li>
              </a>
              <a href='#projects' onClick={e => handleScroll(e, 'projects')}>
                <li>Projects</li>
              </a>
              <a
                href='#achievement'
                onClick={e => handleScroll(e, 'achievement')}
              >
                <li>Achievement</li>
              </a>
              <a href='#contact' onClick={e => handleScroll(e, 'contact')}>
                <li>Contact Me</li>
              </a>
            </ul>
          </nav>

          <ModeToggle />
        </div>
      </section>
      <nav className='lg:hidden mt-8'>
        <ul className='flex flex-wrap gap-4'>
          <Link href='/'>
            <li className='bg-blue-500 p-2 text-white rounded-lg'>Home</li>
          </Link>
          <a href='#discover' onClick={e => handleScroll(e, 'discover')}>
            <li className='bg-blue-500 p-2 text-white rounded-lg'>Discover</li>
          </a>
          <a href='#skills' onClick={e => handleScroll(e, 'skills')}>
            <li className='bg-blue-500 p-2 text-white rounded-lg'>
              Skills & Experiences
            </li>
          </a>
          <a href='#projects' onClick={e => handleScroll(e, 'projects')}>
            <li className='bg-blue-500 p-2 text-white rounded-lg'>Projects</li>
          </a>
          <a href='#achievement' onClick={e => handleScroll(e, 'achievement')}>
            <li className='bg-blue-500 p-2 text-white rounded-lg'>
              Achievement
            </li>
          </a>
          <a href='#contact' onClick={e => handleScroll(e, 'contact')}>
            <li className='bg-blue-500 p-2 text-white rounded-lg'>
              Contact Me
            </li>
          </a>
        </ul>
      </nav>
    </header>
  )
}
export default Header
