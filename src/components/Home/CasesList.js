import p1img from "assets/img/canva/bocchi2.jpg"
import a1img from "assets/img/canva/genshin5.jpg"
import p2img from "assets/img/canva/genshin4.jpg"
import a2img from "assets/img/canva/genshin6.jpg"
import p3img from "assets/img/canva/genshin8.jpg"
import a3img from "assets/img/canva/genshin7.jpg"
import p4img from "assets/img/canva/bocchi7.jpg"
import a4img from "assets/img/canva/bocchi4.png"
import p5img from "assets/img/canva/genshin2.jpg"
import a5img from "assets/img/canva/genshin5.jpg"
import p6img from "assets/img/canva/vinland1.png"
import a6img from "assets/img/canva/vinland2.png"
import CaseCard from "./CaseCard"
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

const posts = [
    {   
        'id': 'P001',
        'date': 'Jan 20, 2023',
        'datetime':'2023-01-20',
        'href':'#',
        'imageUrl': p1img,
        'category': 'Music',
        'title': 'The Girls Who Rocked the World',
        'content': 'These four girls are the ultimate rockstars, taking the music scene by storm with their unique sound and incredible stage presence. With each performance, they leave audiences in awe and craving more. ',
        'author':{
            'name':'Johan Timana',
            'href': '#',
            'imageUrl':a1img
        }
    },
    {
        'id': 'P002',
        'date': 'Oct 13, 2022',
        'datetime': '2022-10-13',
        'href': '#',
        'imageUrl': p2img,
        'category': 'Dance',
        'title': 'Exploring the Art of Belly Dance in Sumeru',
        'content': "Arabian dance is a unique and elegant dance form that has been popular for centuries in the Middle East. With its graceful and fluid movements, it's no wonder that Arabian dance has become a symbol of beauty and passion",
        'author': {
            'name': 'Elena Gomez',
            'href': '#',
            'imageUrl': a2img
        }
    },
    {
        'id': 'P003',
        'date': 'Dec 25, 2019',
        'datetime': '2019-12-25',
        'href': '#',
        'imageUrl': p3img,
        'category': 'Sport',
        'title': 'The Crimson Lion',
        'content':' She was a force to be reckoned with, the most skilled and beautiful mercenary in all the land. With her piercing gaze and quick wit, she could take down any target without breaking a sweat. ',
        'author': {
            'name': 'David Kim',
            'href': '#',
            'imageUrl': a3img
        }
    },
    {
        'id': 'P004',
        'date': 'Jul 7, 2021',
        'datetime': '2021-07-07',
        'href': '#',
        'imageUrl': p4img,
        'category': 'Music',
        'title': 'Rock and Roll Party',
        'content': 'The night started off with laughter and joy as the band members of "Kessoku Band" played party games such as beer pong and charades. But as the night went on, the competitive spirit took over and one get striked to the honey spot',
        'author': {
            'name': 'Jenna Lee',
            'href': '#',
            'imageUrl': a4img
        }
    },
    
    {
        'id': 'P005',
        'date': 'Aug 19, 2022',
        'datetime': '2022-08-19',
        'href': '#',
        'imageUrl': p5img,
        'category': 'Fashion',
        'title': 'New Clothes from a Faraway Land',
        'content': 'A traveler from another world arrived in town with a new set of clothes that caught everyone\'s attention. The traveler had been gifted these clothes by a pharaoh from a faraway land, and they were unlike anything anyone had ever seen before.',
        'author': {
          'name': 'Sarah Smith',
          'href': '#',
          'imageUrl': a5img
        }
      },
      {
        'id': 'P006',
        'date': 'Jan 5, 2023',
        'datetime': '2023-01-05',
        'href': '#',
        'imageUrl': p6img,
        'category': 'History',
        'title': 'The Bloody End of a Viking Encounter',
        'content': 'A traveler and his brother faced off against a group of vikings after a heated discussion turned violent. Despite being outnumbered, they fought fiercely and emerged victorious, though the memory of the battle stayed with the traveler for the rest of his life.',
        'author': {
          'name': 'Michael Johnson',
          'href': '#',
          'imageUrl': a6img
        }
      },
      
      
      
    
]

export default function CasesList(){
    return (
        <div class="bg-white dark:bg-gray-900">
        <div class="py-24 sm:py-32">
            <div class=" max-w-8xl mx-auto px-6 lg:px-8">
                <div class="mx-auto  lg:mx-0">
                <h2 class="text-2xl font-bold tracking-tight text-mylightblue-900 sm:text-5xl">Some news</h2>
                <p class="mt-2 text-lg leading-8 text-mylightblue-700">Learn more about your favorite characters.</p>
                </div>
                <div class="-auto min-w-80 mt-10  gap-y-16 gap-x-8 border-t 
                    border-mylightblue-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
                <Carousel 
                    itemsToScroll={1}
                    itemsToShow={3}
                    pagination={false}
                    itemPadding={[0,2]}

                    breakPoints={breakPoints}>
                {posts.map((card,index) => (
                    
                   <CaseCard data={card}  index={index} />
                ) )}    
                    
                </Carousel>

                </div>
            </div>
            </div>
        </div>
    )

}