
import news1 from "assets/img/news/news1.jpg";
import news2 from "assets/img/news/news2.jpg";
import news3 from "assets/img/news/news3.jpg";
import news4 from "assets/img/news/news4.jpg";
import news5 from "assets/img/news/news5.jpg";
import news6 from "assets/img/news/news6.jpg";
import news7 from "assets/img/news/news7.jpg";
import news8 from "assets/img/news/news8.jpg";
import news9 from "assets/img/news/news9.jpg";

import NewsCard from "./NewsCard";
const news =[
    {
        title: 'The Version 3.6 "A Parade of Providence" Preview page is here!',
        content: "Joy and sorrow are constant companions to life, and the endless flow of history's long river runs ever unceasing.",
        date: 'Apr 2, 2023',
        datetime: '2023-04-02',
        imgUrl: news1,
        },
        {
        title: 'Version 3.6 "A Parade of Providence" Trailer | Genshin Impact',
        content: "Joy and sorrow are constant companions to life, and the endless flow of history's long river runs ever unceasing.",
        date: 'Mar 31, 2023',
        datetime:'2023-03-31',
        imgUrl: news2,
        },
        {
        title: 'Version 3.6 Special Program Preview',
        content: 'This special program will feature juicy details about new game content and developments in Version 3.6. It will also "drop" some redemption codes and other goodies!',
        date: 'Mar 29, 2023',
        datetime: '2023-03-29',
        imgUrl: news3,
        },
        {
        title: 'Collected Miscellany - "Mika: Constellatory Companion" | Genshin Impact',
        content: 'Gaze not on the velvety snowflakes with belittling eyes.',
        date: 'Mar 21, 2023',
        datetime: '2023-03-21',
        imgUrl: news4,
        },
        {
        title: "Genshin Impact EP - A Scattered Rainbow Over Spring Dew",
        content: "Take a stroll into the woods, and you'll see frost condensing on the cold dewdrops.",
        date: "Mar 20, 2023",
        datetime:'2023-03-20',
        imgUrl: news5
        },
        {
        title: "Hello, Travelers~ Today, we will be introducing a new character, Mika!",
        content: "We'd better stay battle ready... Our next mission could start at any time.",
        date: "Mar 17, 2023",
        datetime:'2023-03-17',
        imgUrl: news6
        },
        {
        title: `Character Demo - "Mika: Plume of Navigation" | Genshin Impact`,
        content: "Being a Front-Line Surveyor sounds simple, but the role entails far more than just cartography and taking point.",
        date: "Mar 17, 2023",
        datetime:'2023-03-17',
        imgUrl: news7
        },
        {
        title: `"Windblume's Breath" Version 3.5 Events Preview - Phase II`,
        content: "Hello Travelers! Let's take a look at the upcoming events!",
        date: "Mar 16, 2023",
        datetime:'2023-03-16',
        imgUrl: news8
        },
        {
        title: "Version 3.5 Event Wishes Notice - Phase II",
        content: "Travelers, stock up on weapons and characters in the event wish to make your party stronger in combat!",
        date: "Mar 16, 2023",
        datetime:'2023-03-16',
        imgUrl: news9
        }

]

export default function NewsList(){
    return (
        <div class="bg-white dark:bg-gray-900">
        <div class="py-24 m-auto sm:py-32 ">
            <div class="px-6 lg:px-48 md:px-24  m-auto">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-6xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl"> News </h2>
                </div>
                <div class="mx-auto  min-w-80 mt-10  border-t 
                    border-mylightblue-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
                    <div class="">
                        {news.map((data,index) => (
                            <NewsCard data = {data} index = {index}/>
                        ))}
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
    );
}