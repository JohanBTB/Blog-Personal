import CollaborationCard from "./CollaborationCard";
const collabs =[
    {
        title:'HeyTea 喜茶',
        location:'China',
        content:'This collaboration features various HeyTea 喜茶 drinks and merchandise, with a custom theme centred around Kamisato Ayaka and Kamisato Ayato.',
    },
    {
        title:'OnePlus',
        location:'China',
        content:'This collaboration features a OnePlus 9RT with a custom UI theme and wallpaper based on Sucrose and Anemo. The device comes in special packaging with the same theming style.',
    },
    {
        title:'POCO',
        location:'Global',
        content:'This collaboration features a POCO Buds Pro with a custom theme centred around Klee. The device comes in special packaging with the same theming style.',
    },
    {
        title:'Samsung',
        location:'South Korea',
        content:'This collaboration features a Galaxy Z Fold4 with a theme centred around Ganyu. The device comes in special packaging with the same theming style.',
    },
    {
        title:'Xiaomi',
        location:'China',
        content:'For the global version of this collaboration, please see Genshin Impact x POCO. This collaboration features a Redmi Airdots 3 Pro with a custom theme centred around Klee. The device comes in special packaging with the same theming style.',
    },
    {
        title:'Pizza Hut',
        location:'China',
        content:'This collaboration features various Pizza Hut items, with a custom theme centred around Amber and Eula',
    },
]

export default function CollaborationList(){
    return (
        <div class="bg-white dark:bg-mydarkblue-900">
        <div class="py-24 m-auto sm:py-32">
            <div class="px-6 lg:px-16 xl:px-24 m-auto">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl">Collaborations </h2>
                </div>
                <div class="mx-auto min-w-80 mt-10 max-w-2xl gap-y-16 gap-x-8 border-t 
                    border-mylightblue-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
                    <div class="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 mx-auto">
                        {collabs.map((collab,index) => (
                            <CollaborationCard collab = {collab} index = {index}/>
                        ))}
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
    );
}