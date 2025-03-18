import react from "../assets/react.svg";

const About = () => {
  return (
    <section className='relative'>
      <div className='w-full h-screen bg-blue-100'>
        <h1 className='text-center py-8 text-2xl font-bold'>Welcome to about page</h1>
        <img
          src={react}
          width={100}
          height={100}
          alt="react"
          className="m-auto" />
      </div>
    </section>
  )
}

export default About