import Image from 'next/image'
import Header from './components/header/header'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <h1>Hello World</h1>
    </main>
  )
}
