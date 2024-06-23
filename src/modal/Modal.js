import './Modal.css';

export const Modal = ({ setIsOpen, children }) => {

  const closeModal = (e) => {
    if(e.target.classList.contains('modal__overlay')) {
      setIsOpen(false);
    }
  }
  return (
    <div className='modal'>
      <div className='modal__overlay' onClick={ closeModal }>{ children }</div>
    </div>
  )
}