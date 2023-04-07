import content1 from "assets/img/community/content1.png"
import content2 from "assets/img/community/content2.png"

export default function Content(){
    return (
        <div class="sm:py-32 py-48 bg-mydarkblue-900">
            <div class=" max-w-6xl mx-auto">
                <div className="ml-24 pt-7 sm:px-2  lg:px-4 ">
                    <p className="mt-4 text-2xl sm:min-w-none w-3/4 text-mypink-500">
                    With a team of over 100 experienced developers, designers, and artists,
                    we create immersive and engaging digital experiences for gamers and fans
                    of Genshin Impact. Based in the heart of Shanghai, China, we also have a
                    global presence with team members from various countries and regions, 
                    including the United States and Europe. Whether you're a hardcore gamer 
                    or a casual player, our team is committed to delivering high-quality 
                    products that will transport you to the magical world of Genshin Impact.
                    </p>
                </div>
                
            </div>
            <div class="inline-block mt-32 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <img class="col-span-1" src={content1}/>
                <img class="col-span-1" src={content2}/>
            </div>
        </div>
    );
}
