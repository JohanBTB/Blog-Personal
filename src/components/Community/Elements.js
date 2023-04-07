import anemo_dark from "assets/img/icons/anemo_dark.png";
import anemo_light from "assets/img/icons/anemo_light.png";
import cryo_dark from "assets/img/icons/cryo_dark.png";
import cryo_light from "assets/img/icons/cryo_light.png";
import hydro_dark from "assets/img/icons/hydro_dark.png";
import hydro_light from "assets/img/icons/hydro_light.png";
import geo_dark from "assets/img/icons/geo_dark.png";
import geo_light from "assets/img/icons/geo_light.png";
import pyro_dark from "assets/img/icons/pyro_dark.png";
import pyro_light from "assets/img/icons/pyro_light.png";
import dendro_dark from "assets/img/icons/dendro_dark.png";
import dendro_light from "assets/img/icons/dendro_light.png";
import electro_dark from "assets/img/icons/electro_dark.png";
import electro_light from "assets/img/icons/electro_light.png";

export default function Elements(){

const elementos =[
    {
        name:"Anemo",
        lightImage: anemo_light,
        darkImage: anemo_dark,
    },
    {
        name: "Cryo",
        lightImage: cryo_light,
        darkImage: cryo_dark,
        },
        {
        name: "Electro",
        lightImage: electro_light,
        darkImage: electro_dark,
        },
        {
        name: "Geo",
        lightImage: geo_light,
        darkImage: geo_dark,
        },
        {
        name: "Dendro",
        lightImage: dendro_light,
        darkImage: dendro_dark,
        },
        {
        name: "Pyro",
        lightImage: pyro_light,
        darkImage: pyro_dark,
        },
        {
        name: "Hydro",
        lightImage: hydro_light,
        darkImage: hydro_dark,
        }
    
];

  
    return (
        <div class="dark:bg-gray-900 py-24 m-auto sm:py-32">
            <div class="px-6 lg:px-48 xl:px-64 m-auto">
                <div class="mx-auto max-w-6xl lg:mx-0">
                    <h2 class="text-3xl sm:text-6xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl">Elements</h2>
                    <p class="max-w-2xl mb-6 font-lightlg:mb-8 md:text-lg lg:text-2xl my-16 tracking-wide text-mylightblue-700 ">
                    These are the basic components of this world and the source of many miraculous phenomena.
                     All kinds of things happen when the elements interact. Adventurers, travelers, and warriors
                      use Elemental Reactions to perform feats that would be impossible to achieve otherwise.
                    </p>
                </div>
                <div class="mt-16">
                    {elementos.map((element, index)=> {
                        return(
                            <div class="inline-block m-4 w-20">
                                <img src={element.lightImage} alt = {element.name} class="inline-block dark:hidden"/>
                                
                                <img src={element.darkImage} alt = {element.name} class="hidden dark:inline-block"/>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}

