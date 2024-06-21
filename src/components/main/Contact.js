import contactPuppy from '../../assets/image/contact-puppy.png'

export function Contacts() {
  return <div className='contact'>
    <div className='container contact__container'>

      <div className='contact__content'>
        <h2 className='contact__title'>For questions and suggestions</h2>
        <div className='contact__info'>
        <i class="uil uil-envelope-check"></i>
        <a href="mailto:email@shelter.com">email@shelter.com</a>
        </div>
        <div className='contact__info'>
        <i class="uil uil-phone"></i>
        <a href="tel:+136745677554">+13 674 567 75 54</a>
        </div>
      </div>

      <div className='contact__content'>
        <h2 className='contact__title'>We are waiting for your visit</h2>
        <div className='contact__info'>
        <i class="uil uil-location-point"></i>
        <span>1 Central Street, Boston (entrance from the store)</span>
        </div>
        <div className='contact__info'>
        <i class="uil uil-location-point"></i>
        <span>18 South Park, London</span>
        </div>
      </div>

      <div className='contact__img'>
        <img src={ contactPuppy } alt='Puppy'/>
      </div>
    </div>
  </div>
}