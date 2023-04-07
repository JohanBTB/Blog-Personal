export default function NewsCard({data, index}){
    return(
        <div class="max-w-sm  lg:max-w-6xl lg:flex  border-mylightblue-500 border-2 border-gray-500 hover:border-gray-700 dark:border-gray-800 dark:hover:border-mydarkblue-500 duration-500  my-8 mx-auto  lg:rounded-r ">

            
            <div class="lg:h-40 lg:w-64 p-6 flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img class="w-full h-full" src={data.imgUrl} alt={data.name}/>
            </div>
            
            <div class=" p-4 flex flex-col justify-between leading-normal w-full">
                
                <div class="font-semibold ">
                    <h2 class="text-mylightblue-900 text-2xl mb-2">{data.title}</h2>
                    <div class="text-mylightblue-500  text-lg mb-2 opacity-60">{data.content}</div>
                </div>
                <div class="flex ">
                    <div class="text-sm ml-auto">
                        <time datetime={data.datetime} class=" text-lg text-mylightblue-500 mx-6">{data.date}</time>
                        <a href="#" class="font-semibold text-mylightblue-500 ">
                            <span class="absolute inset-0 " aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>   
    )
}