import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"
import main from "assets/img/events/main.png"
function Header(){



  
    return (
        <section class=" sm:pt-32 sm:pb-64 h-[45rem] md:h-screen   bg-white dark:bg-gray-900 sm:flex-nowrap ">
            
            <div class="w-4/5  flex align-center jusitfy-center mx-auto text-myblue-300 dark:text-mylightblue-100"  >
                
                <div class=" mt-48 md:mt-0 mr-auto tracking-tight  z-10">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-mylightblue-700">Events in Teyvat</h1>
                        <p class="max-w-2xl mb-6 font-lightlg:mb-8 md:text-lg lg:text-xl ">
                        Genshin Impact regularly hosts exciting events that keep players engaged 
                        and entertained. From limited-time challenges to special rewards and bonuses,
                        there's always something new to look forward to. Some of the most popular
                        events include the Lantern Rite Festival, the Windblume Festival, and the 
                        Midsummer Island Adventure. These events offer players a chance to earn
                        exclusive items and take part in unique activities.
                        </p>

                </div>      
                       
            </div>
            <img src={main} class="absolute mt-36 top-0 right-0 opacity-25 h-[30rem] md:h-[80%] md:opacity-50 overflow-x-hidden" />
        </section>

    )
}

export default Header
 