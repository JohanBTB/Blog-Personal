export default function CharacterCard({collab, index}){
    return (
        <div class="mx-2 sm:m-8">
            <h3 class="mt-5 text-2xl font-semibold leading-6 text-mydarkblue-900 dark:text-mylightblue-900 " id={index}>
                
                {collab.title}
            </h3>
            <div class="mt-4 flex items-center gap-x-4 text-xs">
                <p href="#" class="text-md font-extrabold relative z-10 rounded-full bg-mylightblue-900 py-1.5 px-3  text-myblue-900">{collab.location}</p>
            </div>
            <p class="mt-5 text-lg sm:text-xl leading-7 text-myblue-900 dark:text-myblue-100 line-clamp-3">{collab.content}</p>
        </div>
    );

}