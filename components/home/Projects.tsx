import project1 from '@/public/project-1.png'
import project2 from '@/public/project-2.png'
import project3 from '@/public/project-3.png'
import project4 from '@/public/project-4.png'
import Image from 'next/image'
const Projects = () => {
  return (
    <div>
      {' '}
      <section className='mt-24'>
        <h1 className='text-center text-2xl md:text-3xl font-bold'>
          <div id='projects'>Projects & Codes</div>
        </h1>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-24 justify-between mt-16 '>
          <div>
            <h1 className='text-xl md:text-2xl font-bold'>
              AppTracker: Job Tracking Application
            </h1>
            <div className='flex flex-col lg:flex-row gap-4 mt-4'>
              <span className='w-12 p-8 flex justify-center items-center h-12 bg-blue-700 text-white font-bold rounded-full'>
                Next
              </span>
              <div className='leading-7 tracking-tight'>
                <div>
                  <Image src={project1} className='h-64' alt='project' />
                </div>
                <div className='mt-4'>
                  <p>
                    Full Stack Link:{' '}
                    <a
                      href='https://github.com/arefinite/nextjs-app-tracker'
                      target='_blank'
                    >
                      Click Here
                    </a>
                  </p>
                  <p>
                    Live Link:
                    <a
                      href='https://nextjs-app-tracker.vercel.app/'
                      target='_blank'
                    >
                      Click Here
                    </a>
                  </p>

                  <p className='font-bold'>Key Features:</p>
                  <ul className='list-disc'>
                    <li>
                      Implements server actions for faster, scalable request
                      handling, and enhanced performance.
                    </li>
                    <li>
                      Provides full CRUD functionality, allowing users to manage
                      job applications with ease.
                    </li>
                    <li>
                      Features powerful search, pagination, and interactive
                      charts to analyze job application trends.
                    </li>
                    <li>
                      Ensures data integrity with schema-based validation for
                      consistent and reliable input.
                    </li>
                  </ul>
                  <p>
                    <strong> Full Stack:</strong> TypeScript, NextJS, Tailwind
                    CSS, Shadcn/ui, TanStack Query, React Hook Form, Zod,
                    Prisma, Clerk, Recharts
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* second project */}
          <div>
            <h1 className='text-xl md:text-2xl font-bold'>
              Real Estate : Dashboard Application
            </h1>
            <div className='flex gap-4 mt-4'>
              <span className='w-12 p-8 flex justify-center items-center h-12 bg-blue-700 text-white font-bold rounded-full'>
                MERN
              </span>
              <div className='leading-7 tracking-tight'>
                <div>
                  <Image src={project3} className='h-64' alt='project' />
                </div>
                <div className='mt-4'>
                  <p>
                    Client Link:{' '}
                    <a
                      href='https://github.com/arefinite/mern-estate-client'
                      target='_blank'
                    >
                      Click Here
                    </a>
                  </p>
                  <p>
                    Server Link:{' '}
                    <a
                      href='https://github.com/arefinite/mern-estate-server'
                      target='_blank'
                    >
                      Click Here
                    </a>
                  </p>
                  <p>
                    Live Link:{' '}
                    <a
                      href='https://mern-estate-project.netlify.app/admin/login'
                      target='_blank'
                    >
                      Click Here
                    </a>
                  </p>

                  <p className='font-bold'>Key Features:</p>
                  <ul className='list-disc'>
                    <li>
                      Manage property and other records with ease, including
                      creating, reading, updating, and deleting entries.
                    </li>
                    <li>Schema-based validation for accurate data handling.</li>
                    <li> Search capabilities and complex form handling.</li>
                    <li>
                      Integration of image uploads and rich text editor for
                      property details.
                    </li>
                  </ul>
                  <p>
                    <strong> Front-end:</strong> TypeScript, ReactJS, Tailwind
                    CSS, TanStack Query, React Hook Form, Zod, React Quill
                  </p>
                  <p>
                    <strong>Back-end:</strong> NodeJS, ExpressJS, MongoDB,
                    Mongoose, Multer, Cloudinary
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd project */}
          <div>
            <h1 className='text-xl md:text-2xl font-bold'>
              WebSeta: Info Hub For Startups
            </h1>
            <div className='flex gap-4 mt-4'>
              <span className='w-12 p-8 flex justify-center items-center h-12 bg-blue-900 text-white font-bold rounded-full'>
                REACT
              </span>
              <div className='leading-7 tracking-tight'>
                <div>
                  <Image src={project2} className='h-64' alt='project' />
                </div>
                <div className='mt-4'>
                  <p>
                    Client Link:{' '}
                    <a
                      href='https://github.com/arefinite/startup'
                      target='_blank'
                    >
                      {' '}
                      Click Here{' '}
                    </a>
                  </p>

                  <p>
                    Live Link:{' '}
                    <a href='https://webseta.netlify.app/' target='_blank'>
                      Click Here
                    </a>
                  </p>

                  <p className='font-bold'>Key Features:</p>
                  <ul className='list-disc'>
                    <li>
                      Schema-based validation for efficient and advanced from
                      handling.
                    </li>
                    <li>
                      {' '}
                      Advanced search, sort, filter and pagination capabilities.
                    </li>
                    <li>Quick search and versatile service</li>
                    <li>Animation and large data handling</li>
                  </ul>
                  <p>
                    <strong>Front-end:</strong> React, Tailwind, Firebase, Redux
                    toolkit, Paginate, Swiper
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 4th project */}
          <div>
            <h1 className='text-xl md:text-2xl font-bold'>
              PlayNext: Explore the Game Universe
            </h1>
            <div className='flex gap-4 mt-4'>
              <span className='w-12 p-8 flex justify-center items-center h-12 bg-blue-900 text-white font-bold rounded-full'>
                REACT
              </span>
              <div className='leading-7 tracking-tight'>
                <div>
                  <Image src={project4} className='h-64' alt='project' />
                </div>
                <div className='mt-4'>
                  <p>
                    Client Link:{' '}
                    <a
                      href='https://github.com/arefinite/PlayNext-GameZone'
                      target='_blank'
                    >
                      {' '}
                      Click Here{' '}
                    </a>
                  </p>

                  <p>
                    Live Link:{' '}
                    <a
                      href='https://arefinite-playnext.netlify.app/'
                      target='_blank'
                    >
                      Click Here
                    </a>
                  </p>

                  <p className='font-bold'>Key Features:</p>
                  <ul className='list-disc'>
                    <li>
                      Leverages third-party APIs integration Robust search,
                      sort,
                    </li>
                    <li>Filter and search functionality implement</li>
                    <li> Toggle theme and image optimization</li>
                  </ul>
                  <p>
                    <strong>Front-end:</strong> TypeScript, React, Material UI,
                    Axios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
export default Projects
