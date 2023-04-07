import React from 'react';
import main from "assets/img/news/main.png"
import discord_light from "assets/img/icons/discord_light.png"
import discord_dark from "assets/img/icons/discord_dark.png"
import youtube_dark from "assets/img/icons/youtube_dark.png";
import youtube_light from "assets/img/icons/youtube_light.png";
import hoyo_lab_dark from "assets/img/icons/hoyolab_dark.png";
import hoyo_lab_light from "assets/img/icons/hoyolab_light.png";
import facebook_dark from "assets/img/icons/facebook_dark.png";
import facebook_light from "assets/img/icons/facebook_light.png";

const medias =[
    {
        name: "Discord",
        lightImage: discord_light,
        darkImage: discord_dark,
        url:'https://discord.com/invite/genshinimpact'
    },
    {
        name: "YouTube",
        lightImage: youtube_light,
        darkImage: youtube_dark,
        url:'https://hoyo.link/56v1BCAd'
    },
    {
        name: "Hoyo Lab",
        lightImage: hoyo_lab_light,
        darkImage: hoyo_lab_dark,
        url:'https://hoyo.link/52uYBBAd',
    },
    {
        name: "Facebook",
        lightImage: facebook_light,
        darkImage: facebook_dark,
        url:'https://hoyo.link/32SCB5Ad'
    },
    
]


function Header(){



  
    return (
        <div class="dark:bg-gray-900 py-24 m-auto sm:py-32">
            <div class="px-2 lg:px-16 md:px-8 xl:px-32 m-auto ">
                <div class="mx-auto max-w-full relative grid grid-cols-3 gap-y-16 gap-x-8">
                    <div class="col-span-3">
                        <h2 class="text-3xl sm:text-6xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl ">Genshin Impact's Latest News</h2>
                    </div>
                    <div class="col-span-2">
                    <p class=" mb-6 font-lightlg:mb-8 md:text-lg lg:text-2xl my-16 tracking-wide text-mylightblue-700">
                    Knowledge about the latest Genshin Impact updates is power, but it becomes even more powerful when it's shared.
                     As avid players ourselves, we're here to keep you up-to-date with all the latest news, rumors, and speculations 
                     surrounding this beloved game. 
                    </p>
                    </div>
                    <img src={main} class="col-span-3 sm:relative absolute h-full opacity-25 sm:opacity-75 sm:col-span-1" />
                </div>
                
                <div class="mt-16">
                    {medias.map((media, index)=> {
                        return(
                            <a href={media.url}class="inline-block m-4 w-10 md:w-12 xl:w-14 hover:scale-90">
                                <img src={media.lightImage} alt = {media.name} class="inline-block dark:hidden"/>

                                <img src={media.darkImage} alt = {media.name} class="hidden dark:inline-block"/>
                            </a>
                        )
                    })}
                </div>
            </div>
            

        </div>

    )
}

export default Header