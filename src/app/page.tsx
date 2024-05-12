"use client"
import Image from 'next/image';
import Header from './components/header/header';
import HeadShot from './images/personal/head-shot.jpg';
import DisplaySkill from './components/displaySkill/displaySkill';
import Project from './components/project/project';
import Projects from './data/projects.json';
import {useState} from 'react';

export default function Home() {
  const [technologies, setTechnologies] = useState("All");
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='flex flex-col md:flex-row'>
        <aside className='w-full md:w-1/4'>
          {/* Headshot Image */}
          <div className='flex flex-col gap-4 justify-center items-center'>
            <Image src={HeadShot} alt="" width={200} height={200} />
            <h1 className='text-3xl font-bold'>JC Smiley Jr.</h1>
          </div>
          {/* Name and Position */}
          <div className='flex flex-col items-center mt-4'>
            <p>Front End Developer</p>
            <hr className='w-1/5'/>
            <p>Tech Meetup Organizer</p>
          </div>
          {/* Languages and Frameworks */}
          <div className='flex flex-row justify-center gap-16 md:gap-4 md:flex-col md:justify-between px-4 mt-8'>
            <div className='md:m-auto md:pr-16'>
              <h2 className='font-bold text-xl'>Languages</h2>
              <DisplaySkill content="JavaScript" />
              <DisplaySkill content="TypeScript" />
              <DisplaySkill content="Java" />
              <DisplaySkill content="HTML5" />
              <DisplaySkill content="CSS3" />                            
            </div>
            <div className='md:mt-4 md:m-auto md:pr-12'>
              <h2 className='font-bold text-xl'>Frameworks</h2>
              <DisplaySkill content="React" />
              <DisplaySkill content="Next.js" />
              <DisplaySkill content="Angular" />
              <DisplaySkill content="Node/Express" />
              <DisplaySkill content="Spring Boot" />
            </div>
          </div>
        </aside>
        <section className='w-full md:w-3/4'>
          <p className='m-auto px-2 md:px-0 mb-8'>These are my favorite projects curated from more than 100 in my GitHub.</p>
          {/* Filter */}
          <div className='flex flex-row justify-center gap-12 mb-4'>
            <div>
              <input className='appearance-none focus:bg-primaryBlue rounded-full w-4 h-4 border-2 border-solid border-primaryBlue' type="radio" id="All" name="technologies" value="All" checked={technologies === "All"} onChange={(e) => setTechnologies(e.target.value)} />
              <label className='text-lg ml-2' htmlFor="All">All</label>            
            </div>
            <div>
              <input className='appearance-none focus:bg-primaryBlue rounded-full w-4 h-4 border-2 border-solid border-primaryBlue' type="radio" id="Nextjs" name="technologies" value="Nextjs" checked={technologies === "Nextjs"} onChange={(e) => setTechnologies(e.target.value)} />
              <label className='text-lg ml-2' htmlFor="Nextjs">Nextjs</label>            
            </div>
            <div>
              <input className='appearance-none focus:bg-primaryBlue rounded-full w-4 h-4 border-2 border-solid border-primaryBlue' type="radio" id="React" name="technologies" value="React" checked={technologies === "React"} onChange={(e) => setTechnologies(e.target.value)} />
              <label className='text-lg ml-2' htmlFor="React">React</label>            
            </div>
            <div>
              <input className='appearance-none focus:bg-primaryBlue rounded-full w-4 h-4 border-2 border-solid border-primaryBlue' type="radio" id="Angular" name="technologies" value="Angular" checked={technologies === "Angular"} onChange={(e) => setTechnologies(e.target.value)} />
              <label className='text-lg ml-2' htmlFor="Angular">Angular</label>            
            </div>
          </div>

          {/* Projects */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
              Projects.map((project, index) => {
                return (
                  <Project project={project} key={`project-${index}`} />
                )
              })
            }
          </div>
        </section>
      </div>
    </main>
  )
}
