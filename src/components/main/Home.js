import { OurPets } from './OurPets';
import HomePuppy from '../../assets/image/home-puppy.png'

export function Home() {
  return <div className="home">
    <div className="container home__container">
      <div className='home__content'>
        <h1>Not only people need a house</h1>
        <p className='home__text'>
          We offer to give a chance to a little and nice puppy with an extremely wide 
          and open heart. He or she will love you more than anybody else in the world, 
          you will see!
          </p>
        <button className='home__btn'><a href={ OurPets }>Make a friend</a></button>
      </div>
      <div className='home__img'>
        <img src={ HomePuppy } alt='Puppy' />
      </div>

    </div>
  </div>
}