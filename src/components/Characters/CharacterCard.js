export default function CharacterCard({character, index}){
    return (
    <a onMouseEnter={()=>{
        const content = document.getElementById(index+'content');
        content.classList.add("opacity-0"); 
        content.classList.remove("opacity-100"); 
        const imageUrl = document.getElementById(index+"img");
        imageUrl.classList.add('opacity-100');
        imageUrl.classList.remove('opacity-25')
    }}

    onMouseLeave={()=>{
        const content = document.getElementById(index+'content');
        content.classList.add("opacity-100"); 
        content.classList.remove("opacity-0");
        const imageUrl = document.getElementById(index+"img");
        imageUrl.classList.remove('opacity-100');
        imageUrl.classList.add('opacity-25') 
    }}
    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer col-span-1 my-10 mx-8" href={character.href}>
        <img class="object-cover h-full opacity-25 transition duration-500" id={index+"img"}  src={character.imageUrl} alt="Flower and sky "/>
    
        <div class="absolute top-1/4 max-w-1/2 left-0 w-4/6 px-6 py-4  mb-2 transition duration-500" id={index +"content"}>
           <h4 class="mb-3 sm:text-4xl text-xl tracking-tight  font-bold text-myblue-900  dark:text-mypink-900">{character.name}</h4>
           <p class="leading-normal text-myblue-500 dark:text-mypink-500" >{character.description} {character.description2}</p>
           <div class="px-6 pt-4 pb-2 text-myblue-300 dark:text-mypink-300">
                Learn more &nbsp;
                <svg class="w-5 inline-block text-myblue-700 dark:text-mypink-900"viewBox="0 0 23 17">
                <path d="M14.0448 -2.72982e-05L12.5677 1.48488L18.4134 7.37185L0.425781 7.37185L0.425781 9.4781L18.4134 9.4781L12.5572 15.3545L14.0448 16.85L22.4258 8.42497L14.0448 -2.72982e-05Z"></path>
                </svg>
            </div>
        </div>
        
      </a>
    )
}
