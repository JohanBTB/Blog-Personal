export default function MeetCard({data, index}){
    return (
                
        
        <div id={index} class="border border-myblue-900 dark:border-mypink-900 rounded-lg shadow dark:bg-mypink-900 "
        onMouseEnter={()=>{
                        const animeImg = document.getElementById(`anime${index}`);
                        const characterImg = document.getElementById(`character${index}`);
                        const aName= document.getElementById(`aname${index}`);
                        const cName= document.getElementById(`cname${index}`);
                        animeImg.classList.add('translate-y-[-100%]');
                        characterImg.classList.add('translate-y-[-100%]');
                        aName.classList.add('hidden');
                        cName.classList.remove('hidden');
                    }}
                    onMouseLeave={()=>{
                        const animeImg = document.getElementById(`anime${index}`);
                        const characterImg = document.getElementById(`character${index}`);
                        const aName= document.getElementById(`aname${index}`);
                        const cName= document.getElementById(`cname${index}`);
                        animeImg.classList.remove('translate-y-[-100%]');
                        characterImg.classList.remove('translate-y-[-100%]') 
                        aName.classList.remove('hidden');
                        cName.classList.add('hidden');
                    }}>
            <a href="#" >
                <div class="h-48  items-center overflow-hidden">
                    <img id = {`anime${index}`} class="w-full max-w-full min-h-40 h-full object-cover  duration-1000 rounded-lg " src={data.animeImg} alt={data.name} />
                    <img id = {`character${index}`} class="w-full max-w-full min-h-40 h-full rounded-lg trans-y-full duration-1000" src={data.characterImg} alt={data.name} />
                </div>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 id = {`aname${index}`}  class="mb-2 text-2xl font-bold tracking-tight text-myblue-700  dark:text-mypink-100  ease-in-out duration-1000">{data.name}</h5>
                    <h5 id = {`cname${index}`}  class="mb-2 text-2xl font-bold tracking-tight text-myblue-700  dark:text-mypink-100 hidden  duration-1000">{data.character}</h5>
                
                </a>
                
            </div>
        </div>


    )
}