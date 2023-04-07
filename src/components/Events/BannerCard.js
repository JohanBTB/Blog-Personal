export default function BannerCard({banner, index}){
    const bg_color=  "linear-gradient(to bottom, "+banner.bg1+ ", " + banner.bg2+ ")";
    return(
        <div 
            class="max-w-sm  lg:max-w-6xl lg:flex  border-mylightblue-500 border-2 my-8 mx-auto  lg:rounded-r hover:border-mylightblue-900 hover:border-4 duration-500" style={{ backgroundImage: bg_color}}>

            
            <div class="lg:h-48 lg:w-48   min-h-40 h-full flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img class="h-full" src={banner.urlImage} alt={banner.name}/>
            </div>
            
            <div class=" p-4 flex flex-col justify-between leading-normal">
                
                <div class="mb-8">
                    <div class="text-mylightblue-900 font-bold text-xl mb-2">{banner.name} - {banner.name2}</div>
                </div>
                <div class="flex items-center">
                <div class="text-sm">
                    <p class="text-mylightblue-600"><span class="text-myblue-700">{banner.start_date}</span></p>
                    <p class="text-mylightblue-600"><span class="text-myblue-700">{banner.end_date}</span></p>
                </div>
                </div>
            </div>
        </div>   
    )
}