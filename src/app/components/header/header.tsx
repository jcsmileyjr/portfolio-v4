"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState} from 'react';
import Coder from '../../images/personal/coder.png';
import Devto from '../../images/personal/devto-1.png';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [size, setSize] = useState(0);

    useEffect(() => {
        setSize(window.innerWidth);
        console.log(window.innerWidth);
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, []);
    
    const handleSize = () => {
    setSize(window.innerWidth);
    };    
    return (
        <section className="bg-primaryBlue w-full text-white py-4 px-8 flex flex-col md:flex-row justify-between mb-8">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-4 items-center '>
                    <Image priority={false} src={Coder} width={75} height={50} alt="" className='h-16 ml-12' />
                    {/* LinkedIn Link */}
                    <Link href="https://www.linkedin.com/in/jcsmileyjr/" rel="noopener" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>                    
                    </Link>
                    {/* Twitter Link */}
                    <Link href="https://twitter.com/JCSmiley4" rel="noopener" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                    </Link>
                    {/* GitHub Link */}
                    <Link href="https://github.com/jcsmileyjr" rel="noopener" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
                        </svg>
                    </Link>
                    <Link href="https://dev.to/jcsmileyjr" rel="noopener" target="_blank">
                        <Image priority={false} src={Devto} width={20} height={5} alt="" className='h-6' />            
                    </Link>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden' aria-expanded={isMenuOpen} aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>
            </div>
            
        {/* Possible use for transitions: transition-opacity duration-1000 ease-in-out opacity-100 */}
            <div className={`${size > 650 ? 'flex md:flex-row gap-2 md:gap-4 mt-4 md:mt-0 md:mr-8 items-center flex-col' : isMenuOpen ? 'flex flex-col gap-2 mt-4 items-center' : 'hidden'}`}>
                <Link href="/"><span className='text-white'>Projects</span></Link>
                <Link href="/">About</Link>
                <Link href="/">Blogs</Link>
                <Link href="/">Technical Talks</Link>
                <Link href="https://jcsmileyjr.gumroad.com/l/breakingIntoTech" rel="noopener" target="_blank">E-book</Link>
                <Link href="/">Download Resume</Link>
            </div>
        </section>
    )
}   


export default Header;