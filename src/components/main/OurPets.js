import { Pets } from '../../data';
import ArrowLeft from '../../assets/image/icons/arrow-left.svg';
import ArrowRight from '../../assets/image/icons/arrow-right.svg';

export function OurPets() {
  return <div className='pets'>
    <div className='container pets__container'>
      <h2 className='title pets__title'>Our friends who <br/> are looking for a house</h2>
      <div className='pets__slider'>
      <button className='pets__slider-btn'><img src={ ArrowLeft } alt='Arrow' /></button>

        {Pets.map((pet, index) => {
          const { name, src } = pet;

          return (
            <div key={ index } className='pets__content'>
              <div className='pets__box'>
                <img src={ src } alt='Pet' />
                <div className='pet__info'>
                  <p className='pets__name'>{ name }</p>
                  <button className='pets__box-btn'>Learn more</button>
                </div>
              </div>
            </div>
          )
        })}


      <button className='pets__slider-btn'><img src={ ArrowRight } alt='Arrow' /></button>
      </div>

    </div>
  </div>
}