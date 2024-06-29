import { useEffect, useState } from 'react';
import { Modal  } from '../../modal/Modal';
import { Content } from '../../modal/Content';
import { Pets } from '../../data.pets';
import ArrowLeft from '../../assets/image/icons/arrow-left.svg';
import ArrowRight from '../../assets/image/icons/arrow-right.svg';

export function OurPets() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [numCards, setNumCards] = useState(3);

  const openInfo = (id) => {
    let info = Pets.find((pet) => pet.id === id);
    setSelectedPet(info);
    setIsOpen(true);
  };

  const generateRandomCards = (numCards) => {
    const newCards = [];
    while (newCards.length < numCards) {
      const randomCard = Math.floor(Math.random() * Pets.length);
      if (!newCards.includes(randomCard)) {
        newCards.push(randomCard);
      }
    }
    return newCards;
  };

  const [cards, setCards] = useState(generateRandomCards(numCards));

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 1230) {
        setNumCards(3);
      }

      if (window.innerWidth <= 1230) {
        setNumCards(2);
      } 

      if (window.innerWidth <= 900) {
        setNumCards(1);
      } 
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    setCards(generateRandomCards(numCards));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [numCards]);

  const handleLeftClick = () => {
    setCards(generateRandomCards(numCards));
  };

  const handleRightClick = () => {
    setCards(generateRandomCards(numCards));
  };

  return (
    <div className='pets'>
      <div className='container pets__container'>
        <h2 className='title pets__title'>
          Our friends who <br /> are looking for a house
        </h2>
        <div className='pets__slider'>
          <button
            onClick={handleLeftClick}
            className='pets__slider-btn pets__box-btn pets__slider-btn1'
          >
            <img src={ArrowLeft} alt='Arrow' />
          </button>

          <div className='pets__content'>
            {cards.map((cardsIndex) => {
              const pet = Pets[cardsIndex];
              const { id, name, image } = pet;

              return (
                <div className='pets__box' key={cardsIndex}>
                  <img src={image} alt='Pet' />
                  <div className='pet__info'>
                    <p className='pets__name'>{name}</p>
                    <button
                      className='btn pets__box-btn'
                      onClick={() => openInfo(id)}
                    >
                      Learn more
                    </button>

                    {isOpen && (
                      <Modal setIsOpen={setIsOpen}>
                        <Content setIsOpen={setIsOpen} pet={selectedPet} />
                      </Modal>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleRightClick}
            className='pets__slider-btn pets__box-btn pets__slider-btn2'
          >
            <img src={ArrowRight} alt='Arrow' />
          </button>
        </div>
      </div>
    </div>
  );
}
