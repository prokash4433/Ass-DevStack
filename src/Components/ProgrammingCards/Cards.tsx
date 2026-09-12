import React, { use } from 'react';
 
interface CardsProps{
          cardsPromise:Promise<Icards[]>       
}


const Cards = ({cardsPromise}:CardsProps) => {
          console.log(cardsPromise);
          const cards = use(cardsPromise)
          console.log(cards ,'cards')
          return (
                    <div>
                              
                    </div>
          );
};

export default Cards;