import Image from 'next/image'
import hero from 'public/hero.jpg'

export default function About() {
    return (
        <main>
            {/* section 1 */}
            <div className="bg-white text-black py-4 px-16 lg:px-16 flex items-center h-[100vh]">
                <div className="w-full lg:w-1/2">
                    <h2 className='text-[60px] font-extrabold '>
                        Who We Are?
                    </h2>
                    <h2 className="text-[45px] font-bold  mb-4">Remote CoWorker is an experienced team of experts that have
                        established roots while working with Filipino VA’</h2>
                </div>

                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <Image
                        src={hero}
                        alt="Hero Banners"
                        className=" rounded-lg w-[100%] "
                    />
                </div>
            </div>

            {/* section 2 */}
            <div className="bg-[#F1F1F1] w-[80%] mx-auto py-8 flex justify-center text-black items-center rounded-[10px]">
                <div className="w-[26.67%] p-4 mx-4">
                    <h3 className="text-2xl font-bold mb-2">Let Us Do It For You!</h3>
                </div>


                <div className="w-[26.67%] p-4 bg-[#1C5567] mx-4 text-white">
                    <p>Our goal is to leverage our experience and contacts to ensure that you and your business are able to keep up with the
                        daily challenges that your business faces. Offloading your tasks to our Remote CoWorkers allows you to delegate tasks that
                        eat a lot of your time enabling you to focus on what is important to the operation of your business. </p>
                </div>


                <div className="w-[26.67%] p-4 bg-[#1C5567] mx-4 text-white">
                    <p>Our goal is to leverage our experience and contacts to ensure that you and your business are able to keep up with the
                        daily challenges that your business faces. Offloading your tasks to our Remote CoWorkers allows you to delegate tasks
                        that eat a lot of your time enabling you to focus on what is important to the operation of your business. .</p>
                </div>
            </div>

            {/* section 3 */}
            <div className='pt-[50px]'>
            <div className="bg-cover " >
                <Image 
                src={hero}
                alt='text'
                />
            <div className="container mx-auto py-8">
            <div className="flex">
          {/* Left side - Heading and Paragraph */}
          <div className="w-full lg:w-1/2 p-4 text-black">
            <h2 className="text-3xl font-bold mb-4">Interested?</h2>
            <p>Take your business to the next level with a highly-skilled, professionallytrained virtual assistant.</p>
          </div>
        </div>
      </div>
    </div>

            </div>

        </main>
    )
}