import Header from '../components/header/header';
import Image from 'next/image';
import HelpMe from '../images/project-images/helpMe-2.png';
import CCGroup from '../images/about/code-connector-group.jpg'
import Hiking from '../images/about/hike.jpg'
import Biking from '../images/about/bike-ride.jpg'

const About = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <div className='w-5/6 lg:w-1/2 mx-auto'>
                <h1 className='text-center text-3xl font-bold'>Who is JC Smiley</h1>
                <section className='flex flex-col justify-center items-center'>
                    <h2 className='text-xl underline'>Hackathon Winner</h2>
                    <Image priority={false} src={HelpMe} width={300} height={300} alt="" className='my-4' />
                    <p>
                    On January 10, 2021, a friend and I submitted a mental health crisis app to the DigitalOcean 2021 App Hackathon. 
                    To our surprise, out of 4 categories and 600 teams, we won the grand prize in the “Power to the People” category. 
                    My greatest joy is that I helped create something that supports my friends and family who struggle with mental health issues.
                    </p>
                    <p className='mt-4'>
                    The app is called “Help Me” and is designed primarily as an “SOS” (distress signal) to a selected circle of trusted people 
                    when someone is going through a mental health crisis. The goal is for the user to build a trusted community around themselves 
                    with private conversations and provide a system to show the user's range of emotions.
                    </p>
                </section>
                <section className='flex flex-col justify-center items-center mt-4'>
                    <h2 className='text-xl underline'>Active in the Tech Community</h2>
                    <Image priority={false} src={CCGroup} width={300} height={300} alt="" className='my-4' />
                    <p>
                    Since 2018, I have dedicated my time and energy to serving as a leader with the Memphis 
                    chapter of the non-profit organization Code Connector. In my capacity as the online 
                    community manager for the organization, I am responsible for igniting discussions and 
                    fostering valuable content within our vibrant Slack community, which now boasts over 
                    1000 passionate members. Each month, I assist in organizing up to five physical or virtual 
                    technology meetups in Memphis, TN.
                    </p>
                    <p className='mt-4'>
                    Code Connector is a community of aspiring developers and mentors networking 
                    together. It hosts online and physical tech meetups to foster a safe, friendly 
                    environment for learning and for mentors to teach people trying to break 
                    into the field of development.
                    </p>
                    <p className='mt-4'>
                    Memphis, TN has a growing tech community for every technology and 
                    interest. I regularly attend DevMemphis, Memphis Web Workers, 901AI, and GDGMemphis.
                    </p>
                </section>
                <section className='flex flex-col justify-center items-center mt-4'>
                    <h2 className='text-xl underline'>Non-tech Related Passions</h2>
                    <div className='flex flex-row gap-8'>
                        <Image priority={false} src={Biking} width={300} height={300} alt="" className='my-4' />
                        <Image priority={false} src={Hiking} width={300} height={300} alt="" className='my-4' />
                    </div>
                    <ul>
                        <li className='list-disc'>I come from a family of gardeners and my personal favorite plants to grow are peppers, cucumbers, melons, green beans, lettuce, and sweet potatoes.</li>
                        <li className='list-disc mt-2'>I am an avid bicyclist. The farthest I have biked in one day is 80 miles.</li>
                        <li className='list-disc mt-2'>I fell in love with hiking. I have hiked most of the state parks in north Mississippi and around Memphis, TN.</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default About;