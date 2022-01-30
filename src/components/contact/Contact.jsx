import './contact.scss'

import CardsContainer from '../info-cards/CardsContainer'

//images
import phone from '../../assets/contact/phone.svg'
import instagram from '../../assets/contact/instagram.svg'
import map from '../../assets/contact/map.svg'

const Contact = () => {

    return(
        <section className="contact">
            <h1 className='title'>¡No te quedes con la duda, contactate con nosotras!</h1>
            <div className='contact-info-container'>
                <div className="contact-info">
                    <img src={instagram} alt="Icono instagram" />
                    <a href='https://instagram.com/nenecahomedeco' target="_blank">@nenecahomedeco</a>
                </div>
                <div className="contact-info">
                    <img src={map} alt="Icono mapa" />
                    <p>San Fernando, Buenos Aires</p>
                </div>
                <div className="contact-info">
                    <img src={phone} alt="Icono teléfono" />
                    <p>+54 9 11 4401 5529</p>
                </div>
                <div className="contact-info">
                    <img src={phone} alt="Icono teléfono" />
                    <p>+54 9 11 4474 2958</p>
                </div>
            </div>

            <CardsContainer />
        </section>
    )
}

export default Contact