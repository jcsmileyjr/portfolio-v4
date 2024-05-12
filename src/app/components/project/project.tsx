import ProjectType from '../../types/project';
import Image from 'next/image';
import Link from 'next/link';
import edgeMotors from '../../images/project-images/edge-motors-1.jpg';
import blackjack from '../../images/project-images/blackjack3.png';

const Project = ({project}: {project: ProjectType}) => {
    return (
        <article className='min-h-max flex flex-col justify-between'>
            {/* Feature a video - Future feature */}
            {/* Feature a image */}
            {project.picture === 'edgeMotors' && <Image src={edgeMotors} alt="" width={200} height={200} className='h-auto min-h-80 min-w-full' /> }
            {project.picture === 'blackjack' && <Image src={blackjack} alt="" width={200} height={200} className='h-auto min-h-80 w-full' /> }
            

            {/* Feature title */}
            <h3>{project.title}</h3>

            {/* Feature content */}
            <p>{project.description}</p>

            {/* Feature Github link & demo link side by side */}
            <div className="flex flex-row justify-between">
                <Link href={project.github} rel="noopener" target="_blank">GitHub </Link>
                <Link href={project.demo} rel="noopener" target="_blank">Demo </Link>
            </div>
        </article>
    );
};

export default Project;