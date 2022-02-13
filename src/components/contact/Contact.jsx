import './contact.scss'

import CardsContainer from '../info-cards/CardsContainer'

//images
import phone from '../../assets/contact/phone.svg'
import instagram from '../../assets/contact/instagram.svg'
import map from '../../assets/contact/map.svg'
import ContactForm from '../contact-form/ContactForm'

const Contact = () => {

    return(
        <section className="contact">
            <h1 className='title'>¡No te quedes con la duda, contactate con nosotras!</h1>
            <div className='grid-container'>
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

                <ContactForm />
                
                <div className='map-container'>
                    <h2 className='title'>¿Cómo llegar?</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52641.013052706694!2d-58.601618788874354!3d-34.45054060770545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca568119a2861%3A0x27933dc457c12b90!2sSan%20Fernando%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1644092015088!5m2!1ses-419!2sar" height="200" style={{border:0}} allowFullScreen="" loading="lazy" className='map'></iframe>
                </div>
            </div>

            <CardsContainer />

        </section>
    )
}

export default Contact