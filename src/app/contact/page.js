export default function Contact() {
    return (
      <main>
      <div className="flex mx-10 my-10">
        <div className="flex w-full">
          {/* Left side with form */}
          <div className="w-1/2 p-4">
            <form className="space-y-4 w-full">
              <h2 className="font-bold text-[30px]">Get In Touch</h2>
              <div>
                <label htmlFor="fullName" className="block font-medium">
                  Full Name
                </label>
                <input type="text" id="fullName" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input type="email" id="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium">
                  Phone Number
                </label>
                <input type="tel" id="phone" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea id="message" row-start="4" className="w-full p-2 border rounded"></textarea>
              </div>
              <button className="bg-[#78CBEE] text-white p-2 rounded">Submit</button>
            </form>
          </div>
  
  
          {/* Right side with background image and paragraph */}
          <div className="w-1/2 bg-[#1C5567] flex items-center justify-center m-[50px] rounded-[10px] ">
            <div className="bg-opacity-75 p-4">
              <h2 className="text-[#78CBEE] font-bold text-[40px] pb-[10px] ">Get In Touch</h2>
              <p className="text-white text-[20px]">
                Call
                <br />
                1-800-00-9797
                <br />
                Support
                <br />
                test@resarch.com
              </p>
              <h2 className="text-[#78CBEE] font -bold text-[40px]">Mailing Address</h2>
              <p className="text-white text-[20px]">
                You can write to us at:
                <br />
                Time etc276 5th Avenue
                <br />
                Suite 704 - 3274
                <br />
                New York
                <br />
                NY 10001
                <br />
                United States
                <br />
              </p>
            </div>
        
          </div>
        </div>
      </div>
    </main>
    )
  }