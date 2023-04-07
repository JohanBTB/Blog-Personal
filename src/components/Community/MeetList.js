import mushoku_anime from "assets/img/community/mushoku_anime.jpg";
import mushoku_character from "assets/img/community/mushoku_character.jpg";
import naruto_anime from "assets/img/community/naruto_anime.jpg";
import naruto_character from "assets/img/community/naruto_character.jpg";
import bocchi_anime from "assets/img/community/bocchi_anime.jpg";
import bocchi_character from "assets/img/community/bocchi_character.jpg";
import ousama_anime from "assets/img/community/ousama_anime.jpg";
import ousama_character from "assets/img/community/ousama_character.jpg";
import berserker_anime from "assets/img/community/berserker_anime.jpg";
import berserker_character from "assets/img/community/berserker_character.jpeg";
import madeinabyss_anime from "assets/img/community/madeinabyss_anime.jpg";
import madeinabyss_character from "assets/img/community/madeinabyss_character.jpg";

import MeetCard from "./MeetCard";

const animes = [
    {
        name:"Mushoku Tensei",
        animeImg:mushoku_anime,
        character:'Eris',
        characterImg:mushoku_character,
    },
    {
        name:"Naruto",
        animeImg:naruto_anime,
        character:'Shikamaru',
        characterImg:naruto_character,
        },
        
        {
        name:"Bocchi the Rock",
        animeImg:bocchi_anime,
        character:'Gotou',
        characterImg:bocchi_character,
        },
        
        {
        name:"Ousama Ranking",
        animeImg:ousama_anime,
        character:'Bouji',
        characterImg:ousama_character,
        },
        
        {
        name:"Berserker",
        animeImg:berserker_anime,
        character:'Guts',
        characterImg:berserker_character,
        },
        
        {
        name:"Made in Abyss",
        animeImg:madeinabyss_anime,
        character:'Reg',
        characterImg:madeinabyss_character,
        }
]


export default function MeetList(){
    return (
        <div class="bg-white dark:bg-mydarkblue-900">
        <div class="py-24 m-auto sm:py-32">
            <div class="lg:px-48 xl:px-64 md:px-24 sm:px-10 m-auto">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-6xl font-bold tracking-tight text-myblue-700 dark:text-mypink-900 sm:text-4xl">Meet my favourite animes</h2>
                </div>
                <div class=" w-full mt-10 m-auto gap-x-8 border-t border-myblue-700 dark:border-mypink-900 pt-10 sm:mt-16 sm:pt-16 ">
                    <div class="grid md:grid-cols-2  sm:grid-cols-1 xl:grid-cols-3 gap-8 px-10 mx-auto ">
                        {animes.map((anime,index) => (
                            <MeetCard data = {anime} index = {index} />
                        ))}
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
    )

}
