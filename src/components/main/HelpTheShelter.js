import { HelpItems } from '../../data.help';
import Dog from '../../assets/image/donation-dog.png';
import Card from '../../assets/image/icons/credit-card.svg';


export function HelpTheShelter() {
  return <div className='help'>

    <div className="container  help__container">
      <h2 className='title pets__title'>How you can help <br/> our shelter</h2>
      <div className="help__content">
        {HelpItems.map((item, index) => {
          const { title, image } = item;

          return (
            <div key={ index } className='help__items'>
              <img src={ image } alt='Help' />
              <p className='pets__name'>{ title }</p>
            </div>
          )
        })}

      </div>
    </div>

    <div className='container  help__donation'>
      <div>
        <img src={ Dog } alt='Dog' />
      </div>
      <div className='help__info'>
        <h2 className='title'>You can also make a donation</h2>
        <p className='help__text'>Name of the bank / Type of bank account</p>
        <div className='help__card'>
          <img src={ Card } alt='Credit Card' />
          <span className='help__text'>8380 2880 8028 8791 7435</span>
        </div>
      </div>
    </div>
    
  </div>
}