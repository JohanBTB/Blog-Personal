import BannerCard from "./BannerCard";
import banner35b from "assets/img/events/banner35b.png";
import banner35a from "assets/img/events/banner35a.png";
import banner34b from "assets/img/events/banner34b.png";
import banner34a from "assets/img/events/banner34a.png";
import banner33b from "assets/img/events/banner33b.png";
import banner33a from "assets/img/events/banner33a.png";
import banner32b from "assets/img/events/banner32b.png";
import banner32a from "assets/img/events/banner32a.png";
import banner31b from "assets/img/events/banner31b.png";
import banner31a from "assets/img/events/banner31a.png";

const banners=[
    {
        name:'Elegancia de garza (3)',
        name2:'Advenimiento trascendental (2)',
        start_date:'21-03-2023',
        end_date:'11-04-2023',
        bg1:'#060e19',
        bg2:'#97bcd9',
        urlImage:banner35b,
    },
    {
        name:'Sentencia de crepusculo (2)',
        name2:'Resplandor aurífero',
        start_date:'01-03-2023',
        end_date:'21-03-2023',
        bg1:'#79453a',
        bg2:'#e6d097',
        urlImage:banner35a,
    },
    {
        name:'Florecimiento fugaz (3)',
        name2:'Revelación enigmática (2)',
        start_date: '07-02-2023',
        end_date: '28-02-2023',
        bg1:'#130d17',
        bg2:'#82614e',
        urlImage:banner34b,
    },
    {
        name:'Confidencia exhortativa',
        name2:'Invitación al mundo mortal (4)',
        start_date:'18-01-2023',
        end_date:'07-02-2023',
        bg1:'#0a0c09',
        bg2:'#818d75',
        urlImage:banner34a,
    },
    {
        name:'Reino de la serenidad (3)',
        name2:'Incursión cerúlea (2)',
        start_date:'27-12-2022',
        end_date:'18-01-2023',
        bg1:'#223546',
        bg2:'#8db2bb',
        urlImage:banner33b,
    },
    {
        name:'Renacido de las ascuas',
        name2:'Contienda oni (3)',
        start_date:'07-12-2022',
        end_date:'27-12-2022',
        bg1:'#223546',
        bg2:'#8db2bb',
        urlImage:banner33a,
    },
    {
        name:'Púrpura perpetuo (2)',
        name2:'El adiós de Snezhnaya (4)',
        start_date:'18-11-2022',
        end_date:'07-12-2022',
        bg1:'#331d17',
        bg2:'#f2efea',
        urlImage:banner32b,
    },
    {
        name:'Iluminación verdeluna',
        name2:'Tapiz del fuego áureo (3)',
        start_date:'02-11-2022',
        end_date:'18-11-2022',
        bg1:'#331d17',
        bg2:'#f2efea',
        urlImage:banner32a,
    },
    {
        name:'Revoloteo de los lotos',
        name2:'Susurros enigmáticos (3)',
        start_date:'14-10-2022',
        end_date:'02-11-2022',
        bg1:'#060e19',
        bg2:'#365f7b',
        urlImage:banner31b,
    },
    {
        name:'Oda del cáliz (4)',
        name2:'Sentencia del crepúsculo',
        start_date:'28-09-2022',
        end_date:'14-10-2022',
        bg1:'#060e19',
        bg2:'#365f7b',
        urlImage:banner31a,
    },

];


export default function BannerList(){
    return (
        <div class="bg-white dark:bg-gray-900">
        <div class="py-24 m-auto sm:py-32">
            <div class="px-6 lg:px-16 xl:px-24 m-auto">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-6xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl"> Banners </h2>
                </div>
                <div class="mx-auto min-w-80 mt-10  border-t 
                    border-mylightblue-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
                    <div class="">
                        {banners.map((banner,index) => (
                            <BannerCard banner = {banner} index = {index}/>
                        ))}
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
    );
}