import { Swiper, SwiperSlide } from 'swiper/react';

export default function CharacterCard({character,index}){
    return (
        
        <div id={index} class="max-w-sm border border-transparent hover:border-myblue-900 dark:hover:border-mypink-900 rounded-lg shadow dark:bg-mypink-900
                        border-4 opacity-60 border-transparent duration-1000 hover:opacity-100 ">
                <div class="h-48  items-center overflow-hidden">
                    <img id = {`anime${index}`} class="w-full max-w-full min-h-40 h-full object-cover  duration-1000 rounded-lg " src={character.imageUrl} alt={character.name} />
                        
                </div>
            <div class="p-5">
                    <h5 id = {`aname${index}`}  class="mb-2 text-2xl font-bold text-myblue-700  dark:text-mypink-100 ">{character.name}</h5>
                    <h5 id = {`cname${index}`}  class="mb-2 text-2xl font-bold text-myblue-700  dark:text-mypink-100 ">{character.title}</h5>
                

            </div>
        </div>
    )
}