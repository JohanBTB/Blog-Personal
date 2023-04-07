import bocchi from "assets/img/icons/bocchi1.png"


const incentives = [
    {
      name: 'Free shipping',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },{
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      },
      {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
      },
      {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
          "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
      },{
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      },
      {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
      }
  ]


export default function Incentives() {
    return (
      <div className="relative md:py-10 lg:py-32 xl:py-40 bg-gray-900 ">
        <div className="max-w-7xl grid grid-cols-4 gap-8 ml-24 pt-24  sm:px-2  lg:px-4 z-10">
          <h2 className="text-3xl col-span-2 sm:col-span-1 font-bold tracking-tight text-mydarkblue-500 dark:text-mylightblue-900">
              We built our game on player satisfaction
          </h2>
          <p className="mt-4 text-xl col-span-2 text-mylightblue-500">
             From the very start, we focused on creating a game that would be enjoyable and engaging for players.
               We believe that if we prioritize our players' experience, our game will thrive. Our team works 
               tirelessly to create new content and features that will enhance the game's story, world, and gameplay.
                We want our players to know that they are valued and their feedback is taken seriously.
          </p>
        </div>
        <div className=" py-24 sm:px-2 sm:py-32 lg:px-4 z-10">
          <div className="flex mx-auto  px-4 lg:max-w-7xl">
            
            <div className="mt-16 max-w-4xl grid sm:grid-cols-2 grid-cols-1 gap-y-10 gap-x-8 z-[1]">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block ">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="sm:text-3xl text-2xl font-medium text-mydarkblue-500 dark:text-mylightblue-900">{incentive.name}</h3>
                    <p className="mt-2 sm:text-xl text-lg text-mylightblue-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        
        <img alt="a" className="absolute  h-[70%] right-0  top-[30%] z-[0] overflow-hidden opacity-25" src={bocchi}></img>
        
      </div>
      
    )

}


