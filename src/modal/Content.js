import './Modal.css';
import '../App.css';

export const Content = ({ setIsOpen, pet }) => {
  const { name, image, breed, text, info } = pet;
  const { age, inoculations, diseases, parasites } = info;
  return (
    <div className="modal__container">
      <div className="modal__content">
      <div className='modal__img'>
        <img src={ image } alt={ name } />
      </div>
      <div className='modal__info'>
        <h2 className='modal__title'>{ name }</h2>
        <p className='modal__subtitle'>{ breed }</p>
        <p className='modal__text'>{ text }</p>
        <ul className='modal__text'>
          <li><b>Age:</b> { age }</li>
          <li><b>Inoculations:</b> { inoculations }</li>
          <li><b>Diseases:</b> { diseases }</li>
          <li><b>Parasites:</b> { parasites }</li>
        </ul>
      </div>
      </div>
      <button onClick={() => setIsOpen(false)} className='modal__btn'>X</button>
    </div>
  )
}