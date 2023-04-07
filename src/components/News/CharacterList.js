import CharacterCard from "./CharacterCard";
import mika from "assets/img/news/mika.jpg";
import dehya from "assets/img/news/dehya.png";
import yaoyao from "assets/img/news/yaoyao.jpg";
import faruzan from "assets/img/news/faruzan.jpg";
import alhaitham from "assets/img/news/alhaitham.jpg";
import wanderer from "assets/img/news/wanderer.jpg";
import layla from "assets/img/news/layla.jpg";
import candace from "assets/img/news/candace.png";
import nahida from "assets/img/news/nahida.jpg";
import nilou from "assets/img/news/nilou.jpg";
import collei from "assets/img/news/collei.jpg";
import dori from "assets/img/news/dori.jpg";
import tighnari from "assets/img/news/tighnari.jpg";
import cyno from "assets/img/news/cyno.png";
import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Thumbs]);



const characters = [
    {
        'imageUrl':mika,
        'name':'Mika',
        'description': 'Coordinates of Clear Frost',
    },
    {
        'imageUrl':dehya,
        'name':'Dehya',
        'description': 'Flame-Mane' ,
    },
    {
        'imageUrl':yaoyao,
        'name':'Yaoyao',
        'description': 'Burgeoning Grace',
    },
    {
        'imageUrl': faruzan,
        'name':'Faruzan',
        'description': 'Enigmatic Machinist',
    },
    {
        'imageUrl': alhaitham,
        'name':'Alhaitham',
        'description': 'Admonishing Instruction',
    },
    {
        'imageUrl': layla,
        'name':'Layla',
        'description': 'Fantastical Evening Star',
    },
    {
        'imageUrl': wanderer,
        'name':'Wanderer',
        'description': 'Eons Adrift',
    },
    {
        'imageUrl': candace,
        'name':'Candace',
        'description': 'Golden Vow',
    },
    {
        'imageUrl': nahida,
        'name':'Nahida',
        'description': 'Physic of Purity',
    },
    {
        'imageUrl': nilou,
        'name':'nilou',
        'description': 'Dance of Lotuslight',
    },
    {
        'imageUrl': collei,
        'name':'Collei',
        'description': 'Sprout of Rebirth',
    },
    {
        'imageUrl': dori,
        'name':'Dori',
        'description': 'Treasure of Dream Garden',
    },
    {
        'imageUrl': tighnari,
        'name':'Tighnari',
        'description': 'Verdant Strider',
    },
    {
        'imageUrl': cyno,
        'name':'Cyno',
        'description': 'Judicator of Secrets',
    },
];


export default function CharacterList(){

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <React.Fragment>

        <div class="bg-white dark:bg-mydarkblue-900">
        <div class="py-24 m-auto sm:py-32">
            <div class="px-6 lg:px-48 xl:px-64 m-auto">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-6xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl">New Characters</h2>
                </div>
                <div class="mx-auto min-w-80 mt-10 max-w-2xl gap-y-16 gap-x-8 border-t 
                    border-mylightblue-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
                    <div class="mx-auto">

                            <Swiper 
                            className="my-10 rounded-xl border-8 opacity-60 border-transparent duration-1000 hover:opacity-100 hover:border-mypink-900"
                            spaceBetween={20}
                            slidesPerView={1}
                            id="characters"
                            navigation
                            pagination
                            thumbs={{swiper:thumbsSwiper}}
                            grabCursor={true}
                            >
                                {characters.map((character,index) => (
                                    <SwiperSlide key={`slide-${index}`}>
                                        <img src={character.imageUrl} alt = {character.name} class="w-full h-full"
                                        onClick={() => thumbsSwiper.slideTo(index)} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                                
                            <Swiper 
                            id="thumbs"                            
                            spaceBetween={20}
                            slidesPerView={3}
                            onSwiper={setThumbsSwiper}
                            >
                                {characters.map((character,index) => (
                                    <SwiperSlide key={`slide-${index}`}>
                                        <CharacterCard character = {character} index = {index}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            
                    </div>
                    
                </div>
                
            </div>
            </div>
            
        </div>         
        </React.Fragment>
        
        
        )
}