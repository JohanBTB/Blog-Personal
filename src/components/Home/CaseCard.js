

export default function CaseCard({data, index}) {

    return (
        <article onMouseEnter={()=>{
            const title_div = document.getElementById(index);
            title_div.classList.add("text-mylightblue-100");

            const post_img = document.getElementById(data.id);
            post_img.classList.add('scale-90')

        }}
            onMouseLeave={()=>{
            const title_div = document.getElementById(index);
            title_div.classList.remove("text-mylightblue-100");

            const post_img = document.getElementById(data.id);
            post_img.classList.remove('scale-90', )
        }} class="flex mx-4 max-w-xl flex-col items-start justify-between">
        <img id={data.id} class="w-full h-96 object-cover rounded-t-3xl mb-4 transition duration-1000" src={data.imageUrl} alt=""/>

        <div class="group relative">
        <h3 class="mt-5 text-2xl font-semibold leading-6 text-mydarkblue-900 dark:text-mylightblue-900 " id={index}>
            <a href={data.href}>
            <span class="absolute inset-0" ></span>
            {data.title}
            </a>
        </h3>
        <p class="mt-5 text-xl leading-8 text-myblue-900 dark:text-myblue-100 line-clamp-3">{data.content}</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
        <img src={data.author.imageUrl} alt="" class="h-16 w-16 rounded-full bg-myblue-500 border-4 border-mydarkblue-100 hover:border-0"/>
        <div class="text-lg leading-6">
            <p class="font-semibold text-myblue-100">
            <a href={data.author.href}>
                <span class="absolute inset-0"></span>
                {data.author.name}
            </a>
            </p>
            <p class="text-mylightblue-700">Co-Founder / CTO</p>
        </div>
        
        </div>
        <div class="mt-4 flex items-center gap-x-4 text-xs">
        <time datetime={data.datetime} class=" text-lg text-mylightblue-500">{data.date}</time>
        <a href="#" class="text-lg relative z-10 rounded-full bg-mylightblue-50 py-1.5 px-3 font-medium text-mylightblue-500">{data.category}</a>
        </div>
        </article>
    )

}