import ProjectType from '../../types/project';
import Image from 'next/image';
import Link from 'next/link';
import edgeMotors from '../../images/project-images/edge-motors.jpg';
import blackjack from '../../images/project-images/blackjack3.png';
import helpMe from '../../images/project-images/helpMe.png';
import elder from '../../images/project-images/elder-1.png';
import maintenance from '../../images/project-images/maintenance.png';
import levelUp from '../../images/project-images/levelUp-1.png';
import reactIcon from '../../images/project-images/reactjs-icon.png';
import cssIcon from '../../images/project-images/css-icon.png';
import htmlIcon from '../../images/project-images/html-icon.png';
import tsIcon from '../../images/project-images/typescript-icon.png';
import angularIcon from '../../images/project-images/angular-icon.png';
import bootstrapIcon from '../../images/project-images/bootstrap-icon.png';
import nextIcon from '../../images/project-images/nextjs-icon.png';
import sanityIcon from '../../images/project-images/sanity-1.jpg';
import tailwindCSSIcon from '../../images/project-images/tailwindcss-icon.png';
import netlifyIcon from '../../images/project-images/netlify-icon.png';

const Project = ({project}: {project: ProjectType}) => {
    return (
        <article className='min-h-max flex flex-col justify-between p-2 border-2 border-solid rounded-lg' style={{borderColor: '#F0F0F0'}}>
            {/* Feature a video - Future feature */}
            {/* Feature a image */}
            {project.picture === 'edgeMotors' && <Image src={edgeMotors} alt="" width={200} height={200} className='w-full min-w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'blackjack' && <Image src={blackjack} alt="" width={200} height={200} className='w-full min-w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'helpMe' && <Image src={helpMe} alt="" width={200} height={200} className='w-full min-w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'elder' && <Image src={elder} alt="" width={200} height={200} className='w-full min-w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'maintenance' && <Image src={maintenance} alt="" width={200} height={200} className='w-full min-w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'levelUp' && <Image src={levelUp} alt="" width={200} height={200} className='w-full min-w-full h-96 md:w-96 rounded-lg' /> }

            {/* Feature title */}
            <h3 className='mt-2'>{project.title}</h3>

            {/* Feature content */}
            <p className='mt-4'>{project.description}</p>

            {/* Feature technologies */}
            <div className='flex flex-row gap-4 justify-evenly mt-4'>
                {project.tech1 ==="react" &&
                    <div className='flex flex-col gap-4'>
                        <Image src={reactIcon} alt="" width={25} height={25} className='' />
                        <p className=''>React</p>
                    </div>
                }
                {project.tech1 ==="reactnative" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={reactIcon} alt="" width={25} height={25} className='' />
                        <p className=''>React Native</p>
                    </div>
                }
                {project.tech1 ==="nextjs" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={nextIcon} alt="" width={25} height={25} className='' />
                        <p className=''>Nextjs</p>
                    </div>
                }
                {project.tech1 ==="angular" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={angularIcon} alt="" width={25} height={25} className='' />
                        <p className=''>Angular</p>
                    </div>
                }                
                {project.tech2 ==="typescript" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={tsIcon} alt="" width={25} height={25} className='' />
                        <p className=''>TypeScript</p>
                    </div>
                }                
                {project.tech2 ==="css" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={cssIcon} alt="" width={25} height={25} className='' />
                        <p className=''>CSS</p>
                    </div>
                }
                {(project.tech2 ==="tailwindcss" || project.tech3 ==="tailwindcss") &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={tailwindCSSIcon} alt="" width={40} height={25} className='' />
                        <p className=''>TailwwindCSS</p>
                    </div>
                }                
                {(project.tech2 ==="html" || project.tech3 ==="html") &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={htmlIcon} alt="" width={25} height={25} className='' />
                        <p className=''>HTML5</p>
                    </div>
                }
               {project.tech3 ==="bootstrap" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={bootstrapIcon} alt="" width={25} height={25} className='' />
                        <p className=''>Bootstrap</p>
                    </div>
                }
               {project.tech3 ==="sanityio" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={sanityIcon} alt="" width={25} height={25} className='' />
                        <p className=''>Sanity.io</p>
                    </div>
                } 
               {project.tech3 ==="netlify" &&
                    <div className='flex flex-col gap-4 items-center'>
                        <Image src={netlifyIcon} alt="" width={25} height={25} className='' />
                        <p className=''>Netlify</p>
                    </div>
                }                                                
            </div>

            {/* Feature Github link & demo link side by side */}
            <div className="flex flex-row justify-between mt-4">
                {project.github === "none" && <p>Code is private to Employer</p>}
                {project.github !== "none" && 
                    <Link className='hover:underline' style={{color: '#20B3C7', fontWeight: 'bold'}} href={project.github} rel="noopener" target="_blank">GitHub </Link>
                }
                {project.demo !== "none" &&
                    <Link className='hover:underline' style={{color: '#20B3C7', fontWeight: 'bold'}} href={project.demo} rel="noopener" target="_blank">Demo </Link>
                }
            </div>
        </article>
    );
};

export default Project;