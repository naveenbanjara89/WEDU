import NavBar from '../Components/NavBar'
import people from '../assets/people.png'
import security from '../assets/Security.png'
import scale from '../assets/scale.png'
import collab from '../assets/collab.png'
import CurvedSection from '../Components/CurvedSection'

const Home = () => {
  return (
    <>
      <section className='min-h-screen mb-4 bg-cover bg-center flex  items-center w-full overflow-hidden'>
      <NavBar/>
      <div className="relative min-h-screen overflow-visible bg-white ">
        <div className="absolute top-[50px] right-[-500px] pointer-events-none ">
          <img src={people} alt="people" className="w-[650px] h-auto max-w-none" />
        </div>
        <div className='container mt-40 flex flex-col text-start mx-auto py-4 px-6 md:px-20 lg:px-32 text-black  '> 
          <h1 className='text-5xl' >Communicate.
            <br/>
            Collaborate.Create.
          </h1>
          <p className='mt-7 '>WeDu provides an effective and powerful <br className='flex items-start' /> way to manage your projects</p>
          <button className='bg-black mt-7 w-[140px] border cursor-pointer hover:bg-yellow-400 hover:text-black hover:scale-105 border-black w-6px text-white rounded font-bold px-4 py-2 '>Get Started</button>
          <div className="flex mt-20 items-center gap-3">
            <img src={security} alt="Security" className=" rounded w-8 h-8 object-contain" />
            <h1 className='text-xs mr-15'>Spped &<br/>Security</h1>
            <img src={scale} alt="Security" className="rounded w-8 h-8 object-contain" />
            <h1 className='text-xs mr-15'>Flexibility &<br/>Scalability</h1>
            <img src={collab} alt="Security" className="w-8 h-8 object-contain" />
            <h1 className='text-xs mr-15'>Better<br/>Collabration</h1>
          </div>
        </div>
      </div>
    </section>
    <CurvedSection/>
    </>
  )
}

export default Home
