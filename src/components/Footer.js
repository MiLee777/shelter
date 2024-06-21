import FooterPuppy from '../assets/image/footer-puppy.png'
export function Footer() {
  return <div className='footer'>
    <div className='container footer__container'>
      <div>
        <img src={ FooterPuppy } alt='Puppy'/>
      </div>

      <div className='footer__content'>
        <h2 className='footer__title'>For questions and suggestions</h2>
        <div className='footer__info'>
        <i class="uil uil-envelope-check"></i>
        <a href="mailto:email@shelter.com">email@shelter.com</a>
        </div>
        <div className='footer__info'>
        <i class="uil uil-phone"></i>
        <a href="tel:+136745677554">+13 674 567 75 54</a>
        </div>
      </div>

      <div className='footer__content'>
        <h2 className='footer__title'>We are waiting for your visit</h2>
        <div className='footer__info'>
        <i class="uil uil-location-point"></i>
        <span>1 Central Street, Boston (entrance from the store)</span>
        </div>
        <div className='footer__info'>
        <i class="uil uil-location-point"></i>
        <span>18 South Park, London</span>
        </div>
      </div>
    </div>
  </div>
}