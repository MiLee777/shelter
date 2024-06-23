import { useState } from 'react';
import { Modal  } from '../../modal/Modal';
import { Content } from '../../modal/Content';
import { Pets } from '../../data';
import ArrowLeft from '../../assets/image/icons/arrow-left.svg';
import ArrowRight from '../../assets/image/icons/arrow-right.svg';

export function OurPets() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectedPet, setSelectedPet ] = useState(null)

  const openInfo = (id) => {
    let info = Pets.find(pet => pet.id === id);
    setSelectedPet(info);
    setIsOpen(true);
  }

  const generateRandomCards = (prevCards) => {
    const newCards = [];
    while(newCards.length < 3) {
      const randomCard = Math.floor(Math.random() * Pets.length);
      if(!prevCards.includes(randomCard) && !newCards.includes(randomCard)) {
        newCards.push(randomCard);
      }
    }
    return newCards;
  }

  const [cards, setCards] = useState(generateRandomCards([]));

    const handleLeftClick = () => {
      setCards(generateRandomCards(cards));
    }

    const handleRightClick = () => {
      setCards(generateRandomCards(cards));
    }

  return <div className='pets'>
    <div className='container pets__container'>
      <h2 className='title pets__title'>Our friends who <br/> are looking for a house</h2>
      <div className='pets__slider'>
      <button onClick={ handleLeftClick } className='pets__slider-btn pets__box-btn'><img src={ ArrowLeft } alt='Arrow' /></button>

      <div className='pets__content'>
      {cards.map((cardsIndex) => {
        const pet = Pets[cardsIndex]
        const { id, name, image } = pet;

          return (
              <div className='pets__box' key={ cardsIndex }>
                <img src={ image } alt='Pet' />
                <div className='pet__info'>
                  <p className='pets__name'>{ name }</p>
                  <button className='btn pets__box-btn' onClick={() => openInfo(id)}>Learn more</button>

                  {isOpen &&
                  <Modal setIsOpen={ setIsOpen }>
                    <Content setIsOpen={ setIsOpen } pet={ selectedPet } />
                  </Modal>
                  }

                </div>
              </div>
          )
        })}
      </div>


      <button onClick={ handleRightClick } className='pets__slider-btn pets__box-btn'><img src={ ArrowRight } alt='Arrow' /></button>
      </div>

    </div>
  </div>
}