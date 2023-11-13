"use client"
import Image from 'next/image'
import hero from 'public/hero.jpg'
import needHelp from 'public/help.jpg'
import box1 from 'public/box-1.png'
import box2 from 'public/box-2.png'
import box3 from 'public/box-3.png'

export default function Home() {


  return (

    <main >
      {/* Section 1 */}
      <section className="bg-white text-black py-4 px-16 lg:px-16 flex items-center h-[100vh]">
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl lg:text-xl font-bold mb-4 text-[#78CBEE]">Fully Specialized</h1>
          <h2 className="text-3xl font-bold lg:text-2xl mb-4">Virtual Assistant for Researchers</h2>
          <p className="mb-6">
            Do things that matter, leave the rest to Wing!We help hundreds of businesses grow faster by delegating recurring,
            mission-critical tasks to dedicated virtual assistants.
          </p>
          <div className="space-x-4">
            <button className="bg-[#1C5567] hover:bg-blue-600 text-white px-4 py-2 rounded-[10px]">
              Get Started
            </button>
            <button className="bg-[#78CBEE] hover:bg-blue-600 text-white px-4 py-2 rounded-[10px]">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <Image
            src={hero}
            alt="Hero Banners"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Section 2 */}
      < div className="pt-50 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Need Help For you Research ?</h1>
        <Image
          src={needHelp}
          alt="Need our Help"
          className="mt-4 rounded-lg w-[700px] h-[550px]" />

      </div>

      {/* Section 3 */}
      <div className="flex justify-between  p-4 pb-[50px]">
        <div className="w-1/7"></div> {/* Left padding */}

        <div className="w-11/12 flex justify-between space-x-4">

          <div className="w-1/3 bg-[#1C5567] rounded-lg p-4 flex flex-col items-center justify-center">
            <Image
              src={box1}
              alt="Image 1"
              className="w-full h-40 object-contain"
            />
            <h2 className="text-xl font-bold mt-4 text-center text-white">Perform Web Research and Produce Reports</h2>
          </div>


          <div className="w-1/3 bg-[#1C5567] rounded-lg p-4 flex flex-col items-center justify-center">
            <Image
              src={box2}
              alt="Image 2"
              className="w-full h-40 object-contain"
            />
            <h2 className="text-xl font-bold mt-4 text-center text-white">Manage Personal/Team Calendars</h2>
          </div>


          <div className="w-1/3 bg-[#1C5567] rounded-lg p-4 flex flex-col items-center justify-center">
            <Image
              src={box3}
              alt="Image 3"
              className="w-full h-40 object-contain"
            />
            <h2 className="text-xl font-bold mt-4 text-center text-white">Handle Internal Support</h2>
          </div>
        </div>

        <div className="w-1/7"></div>
      </div>

      {/* section 4 */}
      <div className="flex justify-center p-4  bg-[#2B2828] pl-[50px] pr-[50px]">
        {/* Left side with heading and list */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Here’s how it works
          </h2>
          <div className="pt-[10px]">
          <h3 className='text-2xl font-normal text-white pb-[10px]'>1. Choose your plan</h3>
          <h3 className='text-2xl font-normal text-white pb-[10px]'>2. Meet your assistant</h3>
          <h3 className='text-2xl font-normal text-white pb-[10px]'>3. Schedule a Kick off Meeting</h3>
          <h3 className='text-2xl font-normal text-white pb-[10px]'>4. Breathe a sign of Relief</h3>
          </div>
          <div className="mb-4 flex justify-center pt-[50px]">
            <button className="bg-[#1C5567] text-white px-4 py-2 rounded-lg">Final Button</button>
          </div>

        </div>

        {/* Right side with picture */}
        <div className="w-1/2">
          <Image
            src={needHelp}
            alt="Your Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Section 5 */}
      <div className='pt-[50px] pb-[50px]'>
      <div className="bg-[#1C5567] w-[60%] m-auto py-8 rounded-[10px]">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Got a Question</h2>
      <div className="flex justify-center space-x-4">
        <button className="bg-[#78CBEE] text-white px-6 py-3 rounded-lg">Schedule A Call</button>
        <button className="bg-[#78CBEE] text-white px-6 py-3 rounded-lg">Chat Live</button>
      </div>
    </div>
    </div>

    </main>
  )
}
