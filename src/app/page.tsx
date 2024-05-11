import Image from 'next/image';
import Header from './components/header/header';
import HeadShot from './images/personal/head-shot.jpg';
import DisplaySkill from './components/displaySkill/displaySkill';

export default function Home() {
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
          <div className='flex flex-row md:flex-col justify-between px-4 mt-8'>
            <div className='md:m-auto md:pr-16'>
              <h2 className='font-bold text-xl'>Languages</h2>
              <DisplaySkill content="JavaScript" />
              <DisplaySkill content="TypeScript" />
              <DisplaySkill content="Java" />
              <DisplaySkill content="HTML5" />
              <DisplaySkill content="CSS3" />                            
            </div>
            <div className='md:mt-4 md:m-auto md:pr-16'>
              <h2 className='font-bold text-xl'>Frameworks</h2>
              <DisplaySkill content="React" />
              <DisplaySkill content="Next.js" />
              <DisplaySkill content="Angular" />
              <DisplaySkill content="Node/Express" />
              <DisplaySkill content="Spring Boot" />
            </div>
          </div>
        </aside>
        <div className='w-full md:w-3/4'>
          <h1>
            Welcome to my portfolio
          </h1>
        </div>
      </div>
    </main>
  )
}
