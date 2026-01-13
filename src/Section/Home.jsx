import NavBar from '../Components/NavBar'

const Home = () => {
  return (
    <section className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'>
        <NavBar/>
        {/* Left Side */}
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-black  '>
            <h1 className='font-medium text-5xl' >Communicate.</h1>
            <h1 className='font-medium text-5xl' >Collaborate. Create.</h1>
            <p className='mt-5'>WeDu provides an effective and powerful <br className='flex items-start' /> way to manage your projects</p>
        </div>
    </section>
  )
}

export default Home
