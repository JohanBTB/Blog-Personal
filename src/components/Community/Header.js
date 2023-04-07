import React from 'react';
import main from "assets/img/community/main.png"
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
                <div class="mx-auto max-w-4xl lg:mx-0 inline-block float-left">
                    <h2 class="text-3xl sm:text-6xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl">Genshin Impact's Community</h2>
                    <p class=" mb-6 font-lightlg:mb-8 md:text-lg lg:text-2xl my-16 tracking-wide text-mylightblue-700">
                    Genshin Impact has a vibrant and active community of players from all around the world. Whether you're 
                    looking to team up with other players for challenging co-op battles or simply want to share your love for
                     the game with like-minded fans, there's always something happening in the Genshin Impact community.
                    </p>
                </div>
                <img src={main} class="block mx-auto w-full md:w-1/4" />
                <div class="mt-16">
                    {medias.map((media, index)=> {
                        return(
                            <a href={media.url}class="inline-block m-4 w-12 md:w-14 xl:w-16">
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