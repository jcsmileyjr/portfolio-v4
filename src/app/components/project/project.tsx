import ProjectType from '../../types/project';
import Image from 'next/image';
import Link from 'next/link';
import edgeMotors from '../../images/project-images/edge-motors.jpg';
import blackjack from '../../images/project-images/blackjack3.png';
import helpMe from '../../images/project-images/helpMe.png';
import elder from '../../images/project-images/elder-1.png';
import maintenance from '../../images/project-images/maintenance.png';
import levelUp from '../../images/project-images/levelUp-1.png';

const Project = ({project}: {project: ProjectType}) => {
    return (
        <article className='min-h-max flex flex-col justify-between p-2 border-2 border-solid rounded-lg' style={{borderColor: '#F0F0F0'}}>
            {/* Feature a video - Future feature */}
            {/* Feature a image */}
            {project.picture === 'edgeMotors' && <Image src={edgeMotors} alt="" width={200} height={200} className=' w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'blackjack' && <Image src={blackjack} alt="" width={200} height={200} className='w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'helpMe' && <Image src={helpMe} alt="" width={200} height={200} className='w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'elder' && <Image src={elder} alt="" width={200} height={200} className='w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'maintenance' && <Image src={maintenance} alt="" width={200} height={200} className='w-full h-96 md:w-96 rounded-lg' /> }
            {project.picture === 'levelUp' && <Image src={levelUp} alt="" width={200} height={200} className='w-full h-96 md:w-96 rounded-lg' /> }

            {/* Feature title */}
            <h3 className='mt-2'>{project.title}</h3>

            {/* Feature content */}
            <p className='mt-4'>{project.description}</p>

            {/* Feature Github link & demo link side by side */}
            <div className="flex flex-row justify-between mt-4">
                <Link className='hover:underline' style={{color: '#20B3C7', fontWeight: 'bold'}} href={project.github} rel="noopener" target="_blank">GitHub </Link>

                {project.demo !== "none" &&
                    <Link className='hover:underline' style={{color: '#20B3C7', fontWeight: 'bold'}} href={project.demo} rel="noopener" target="_blank">Demo </Link>
                }
            </div>
        </article>
    );
};

export default Project;