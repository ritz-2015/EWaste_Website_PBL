import React from 'react'
import Navbar from './navBar';
const ContactUs = () => {
  return (
<div className='overflow-hidden h-screen'>
      <Navbar />
      <section className= "bg-gradient-to-br from-green-400 to-green-100 h-[92%]  ">
        <div className="container px-6 mx-auto ">
          <div>
            <p className="font-medium text-green-500 dark:text-green-400">Contact us</p>

            <h1 className="mt-2 text-2xl font-bold text-black-800 md:text-3xl dark:text-black">Chat to our friendly team</h1>

            <p className="mt-3 text-black-500 dark:text-black-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-black-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-black-800 dark:text-black">Email</h2>
                <p className="mt-2 text-sm text-black-500 dark:text-black-400">Our friendly team is here to help.</p>
                <p className="mt-2 text-sm text-green-500 dark:text-green-400">hello@merakiui.com</p>
              </div>

              <div>
                <span className="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-black-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-black-800 dark:text-black">Live chat</h2>
                <p className="mt-2 text-sm text-black-500 dark:text-black-400">Our friendly team is here to help.</p>
                <p className="mt-2 text-sm text-green-500 dark:text-green-400">Start new chat</p>
              </div>

              <div>
                <span className="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-black-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-black-800 dark:text-black">Office</h2>
                <p className="mt-2 text-sm text-black-500 dark:text-black-400">Come say hello at our office HQ.</p>
                <p className="mt-2 text-sm text-green-500 dark:text-green-400">100 Smith Street Collingwood VIC 3066 AU</p>
              </div>

                <div>
                    <span className="inline-block p-3 text-green-500 rounded-full bg-blue-100/80 dark:bg-black-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-black-800 dark:text-black">Phone</h2>
                    <p className="mt-2 text-sm text-black-500 dark:text-black-400">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-green-500 dark:text-green-400">+1 (555) 000-0000</p>
                </div>
            </div>

            <div className="rounded-lg bg-black-50 dark:bg-black-800 md:p-8">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-black-600 dark:text-black-200">First Name</label>
                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-black-700 placeholder-black-400 bg-white border border-black-200 rounded-lg dark:placeholder-black-600 dark:bg-black-900 dark:text-black-300 dark:border-black-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-black-600 dark:text-black-200">Last Name</label>
                            <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-black-700 placeholder-black-400 bg-white border border-black-200 rounded-lg dark:placeholder-black-600 dark:bg-black-900 dark:text-black-300 dark:border-black-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-black-600 dark:text-black-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-black-700 placeholder-black-400 bg-white border border-black-200 rounded-lg dark:placeholder-black-600 dark:bg-black-900 dark:text-black-300 dark:border-black-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-black-600 dark:text-black-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-black-700 placeholder-black-400 bg-white border border-black-200 rounded-lg md:h-56 dark:placeholder-black-600 dark:bg-black-900 dark:text-black-300 dark:border-black-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
</div>

  )
}

export default ContactUs;