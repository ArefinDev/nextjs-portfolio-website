import {  Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <section className='mt-24 pb-4'>
      <div className='flex flex-col gap-2 text-center lg:flex-row justify-between'>
        <ul className='flex space-x-6 '>
          <a href='https://github.com/thearefindev' target='_blank'>
            <li className='flex gap-2 items-center'>
              <span>
                <Github size={16} />
              </span>
              GitHub
            </li>
          </a>
          <a href='linkedin.com/in/thearefindev'>
            <li className='flex gap-2 items-center'>
              <Linkedin size={16} />
              LinkedIn
            </li>
          </a>
          <a href='mailto:thearefindev@gmail.com'>
            <li className='flex gap-2 items-center'>
              <Mail size={16} />
              E-mail
            </li>
          </a>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} by Arefinite | All Rights Reserved.
        </p>
      </div>
    </section>
  )
}
export default Footer
