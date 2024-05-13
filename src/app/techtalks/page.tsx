import Header from '../components/header/header';

const TechTalks = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <h1 className='text-3xl font-bold text-center'>Technical Talks</h1>
            <section className='flex flex-col justify-center items-center'>
                <h2 className='text-xl my-4 underline'>Help Me: A Behind The Scenes look at winning the Digital Ocean hackathon by JC Smiley</h2>
                <iframe title="Behind The Scenes of the winning hackaton app" width="560" height="315" src="https://www.youtube.com/embed/CVrkP9AhSOk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </section>
            <section className='flex flex-col justify-center items-center mt-8'>
                <h2 className='text-xl my-4 underline'>Project Development: A Farmer's Guide from Sprout to Sweet Potato Pie</h2>
                <iframe title="Tips on project management" width="560" height="315" src="https://www.youtube.com/embed/PsrLIrMcVDU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </section>


        </main>
    )
}

export default TechTalks;