import CharacterCard from "./CharacterCard";
import eula_card from "assets/img/characters/eula_card.png";
import kaeya_card from "assets/img/characters/kaeya_card.png";
import mona_card from "assets/img/characters/mona_card.png";
import cyno_card from "assets/img/characters/cyno_card.png";
const characters = [
    {
        'imageUrl':eula_card,
        'name':'Eula',
        'description': 'Eula is the Spindrift Knight and Captain of the Knights of Favonius Reconnaissance Company. Born into the aristocratic',
        'description2': ' Lawrence clan, Eula was raised to place great emphasis on the value of family and honor.',
        'href':'#'
    },
    {
        'imageUrl':kaeya_card,
        'name':'Kaeya',
        'description': 'Kaeya is the Cavalry Captain of the Knights of Favonius and a master of reconnaissance and espionage.' ,
        'description2':'A gentlemanly and elegant young man, Kaeya always has a smile on his face, but it is unclear what he is truly thinking.',
        'href':'#'
    },
    {
        'imageUrl':mona_card,
        'name':'Mona',
        'description': 'Mona is a mysterious astrologer who can peer into the future with her unique abilities. Though she is often ',
        'description2': 'seen as eccentric and unreliable, her predictions are always accurate and her talent is widely acknowledged.',
        'href':'#'
    },
    {
        'imageUrl': cyno_card,
        'name':'Cyno',
        'description': 'Cyno leads the Matra and strikes fear into the hearts of researchers of the Sumeru Akademiya. In spite of this,',
        'description2': 'Cyno has a fun side outside of his role in the Akademiya',
        'href':'#'
    }
];


export default function CharactersList(){
    return (
        <div class="bg-white dark:bg-mydarkblue-900">
        <div class="py-24 m-auto sm:py-32">
            <div class="px-6 lg:px-48 xl:px-64 m-auto">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-6xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl">Characters</h2>
                </div>
                <div class="mx-auto min-w-80 mt-10 max-w-2xl gap-y-16 gap-x-8 border-t 
                    border-mylightblue-900 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
                    <div class="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 mx-auto">
                        {characters.map((character,index) => (
                            <CharacterCard character = {character} index = {index}/>
                        ))}
                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
    )
}