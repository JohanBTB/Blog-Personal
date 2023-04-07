import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {useState, react, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import logo_nav from "assets/img/icons/chilliwiny-logo.png";
import paimon from "assets/img/icons/paimon.png";
import loading_gif from "assets/gif/loading.gif";

const solutions = [
    {
      name: 'Characters',
      description: 'See all characters of Teyvat',
      href: '/characters',
      icon: charactersIcon,
    },
    {
      name: 'Community',
      description: 'Look for people that are like you',
      href: '/community',
      icon: communityIcon,
    },
    {
      name: 'Events',
      description: 'New things are comming',
      href: '/events',
      icon: eventsIcon,
    },
    {
      name: 'News',
      description: 'Keep track the last news',
      href: '/news',
      icon: newsIcon,
    },
    {
      name: 'Contact',
      description: 'Keep track of your growth',
      href: '/contact',
      icon: contactIcon,
    },

]

function scrollFunction() {
    if(document.getElementById('navbar')){
        if(window.scrollY < 50 || document.documentElement.scrollTop < 50){
            document.getElementById('navbar').classList.remove('dark:bg-gray-900');
            document.getElementById('navbar').classList.remove('shadow-mynavbar');
        }else{
            document.getElementById('navbar').classList.add('dark:bg-gray-900');
            document.getElementById('navbar').classList.add('shadow-mynavbar');
        }
    }
}

window.onscroll = scrollFunction


function Navbar(){

    const [open, setOpen] = useState(false)
    return (
        <nav id="navbar"className=" fixed duration-1000 min-w-[30rem] transition w-full py-10 top-0 z-[999] ">
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] inset-0 w-full max-w-none">

            </div>
            <div className="px-4 sm:px-12">
                <div className="-ml-4 -mt-2  flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 ">
                    <Link to="/" >
                    <img

                        className=""
                        src={logo_nav}
                        width={250}
                        height={150}
                    />
                    </Link>
                    </div>
                    <div className="hidden md:block lg:ml- mt-2 flex-shrink-0"> 
                    <NavLink to="/characters" className=" text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4   p-0.25 border-gray-900 hover:border-mydarkblue-900 dark:hover:border-mypink-900 transition ease-in-out duration-500">Characters</NavLink>
                    <NavLink to="/community" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">Community</NavLink>
                    <NavLink to="/events" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">Events</NavLink>
                    <NavLink to="/news" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">News</NavLink>
                    <NavLink to="/contact" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-500 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">Contact</NavLink>
                    <button
                        type="button" 
                        className="bg-mydarkblue-900 dark:bg-mydarkblue-500 ml-8 relative inline-flex items-center rounded-md border border-transparent
                         px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-mylightblue-500 hover:ring-mylightblue-500 hover:ring-2
                          hover:ring-offset-2 ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-mydarkblue-900 focus:ring-offset-2"
                    >
                        Hire us
                        <img 
                            className="w-16  hidden lg:block"
                            src={loading_gif}
                        />
                    </button>
                    
                    
                    </div>
{/* 00 */}
                        <Popover className="relative block md:hidden">
                            {({ open }) => (
                            <>
                                <Popover.Button
                                className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    rounded-md bg-myblue-700 px-3 py-2  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-mydarkblue-100`}
                                >
                                { open ?
                                    <svg onClick={()=>{setOpen(true)}}id="menu-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#635f9c" class="w-10 h-10 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>  
                                    :
                                    <svg onClick={()=>{setOpen(false)}} id="menu-close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#635f9c" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    
                                    
                                    
                                }   
                                </Popover.Button>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                >
                                <Popover.Panel className="absolute -left-28 sm:-left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-8 bg-myblue-700  p-7 lg:grid-cols-2">
                                        {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-mydarkblue-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-whit sm:h-12 sm:w-12">
                                            <item.icon aria-hidden="true" />
                                            </div>
                                            <div className="ml-4">
                                            <p className="text-sm font-medium text-mylightblue-700">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-mylightblue-300">
                                                {item.description}
                                            </p>
                                            </div>
                                        </a>
                                        ))}
                                    </div>
                                    <div className="bg-myblue-700 hover:bg-mydarkblue-900 p-4">
                                        <a
                                        target="blank"
                                        href="https://genshin.hoyoverse.com/pc-launcher/"
                                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                        <span className="flex items-center">
                                            <span className="text-sm font-medium text-mylightblue-700">
                                            Play now!
                                            </span>
                                        </span>
                                        <span className="block text-sm text-mylightblue-300">
                                            Start the journey now
                                            <img src={paimon} class="w-16 h-16 inline-block ml-20 "/>
                                        </span>
                                        </a>
                                    </div>
                                    </div>
                                </Popover.Panel>
                                </Transition>
                            </>
                            )}
                        </Popover>
{/* 00 */}
                    {/* <button class="border-2 border-transparent rounded-md p-1 active:border-mydarkblue-100">
                        
                        { open ?
                        <svg onClick={()=>{setOpen(false)}} id="menu-close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#635f9c" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        
                        :
                        <svg onClick={()=>{setOpen(true)}}id="menu-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#635f9c" class="w-10 h-10 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }                            
                    </button> */}

                </div>
            </div>
        </nav>
    )
}



function newsIcon() {
    return (
      <svg 
      width=""
      height=""
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#25254b" />
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round"
        stroke="#635f9c"
        strokeWidth={1.5}
        vector-effect="non-scaling-stroke" // add this line
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        
      </svg>

    )
  }
  
  function charactersIcon() {
    return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
      stroke-width="1.5" 

      
      >
        <rect width="24" height="24" rx="4" fill="#25254b" />
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke="#635f9c"
        vector-effect="non-scaling-stroke"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>

    )
  }
  
  function eventsIcon() {
    return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 

      >
        <rect width="24" height="24" rx="4" fill="#25254b" />
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke="#635f9c"
        vector-effect="non-scaling-stroke"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>

    )
  }


  function contactIcon() {
    return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 

      >
        <rect width="24" height="24" rx="4" fill="#25254b" />
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke="#635f9c"
        vector-effect="non-scaling-stroke"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
      />  
      </svg>

    )
  }
  function communityIcon() {
    return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 

      >
        <rect width="24" height="24" rx="4" fill="#25254b" />
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke="#635f9c"
        vector-effect="non-scaling-stroke"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>

    )
  }
const mapStateToProp = state =>({

})

export default connect(mapStateToProp, {

}) (Navbar)
