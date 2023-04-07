
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"
import main from "assets/img/characters/main.png"
function Header(){



  
    return (
        <section class="pt-32  pb-64 sm:pb-4 relative bg-white dark:bg-gray-900 sm:flex-nowrap ">
            
            <div class="w-4/5  relative mx-auto h-[15rem] xl:h-screen lg:h-[50.25rem] md:h-[30rem] text-myblue-300 dark:text-mylightblue-100"  >
                <img src={main} class="z-0 absolute max-h-[83%] hidden sm:block md:opacity-50 right-0 opacity-25 xl:h-[71.25rem] lg:h-[50.25rem]  overflow-x-hidden" />
                <div class="absolute mt-10 mr-auto place-self-center  z-10">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-mylightblue-700">Join the adventure in Teyvat</h1>
                    <p class="max-w-2xl mb-6 font-lightlg:mb-8 md:text-lg lg:text-xl ">Explore a vast world of elemental magic and mythical creatures, team up with friends to conquer challenging bosses, and uncover the mysteries of Genshin Impact.</p>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-mylightblue-900">
                        Get started
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-mylightblue-700 dark:hover:bg-mylightblue-700 dark:focus:ring-gray-800">
                        Speak to Sales
                    </a> 
                </div>      
                       
            </div>
        </section>

    )
}

export default Header

