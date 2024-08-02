import { Footer, Navbar } from '@/components';
import { MapComponent } from './components';
import './contact.css';

const Contact = () => {

    const addressRestaurant: string = 'Don Julio, Guatemala 4699, C1425 Cdad. Autónoma de Buenos Aires';
    const linkedinLink: string = 'https://www.linkedin.com/in/diego-daza-886870186/';
    const twitterLink: string = 'https://x.com/DiegoDaza07';

    return (
        <>
            <Navbar />
            <div className='contact-container'>
                <MapComponent address={addressRestaurant} />
                <h4>{'📍 Ubicación:'}</h4>
                <p>{' Guatemala 4699, C1425 Cdad. Autónoma de Buenos Aires'}</p>
                <h4>{'⌚ Horario de Apertura:'}</h4>
                <p>{'Lunes a Domingo: 6:00 PM - 2:00 AM'}</p>
                <h4>{'📲 Contacto:'}</h4>
                <p>
                    {'Teléfono: +57 1127532627'}
                    <br />
                    {'Correo Electrónico: diegodaza07@gmail.com'}
                </p>
                <h4>{'🤳 Siguenos en:'}</h4>
                <a href={linkedinLink} target="_blank" style={{ color: '#fff' }}>{'📘 Linkedin'}</a>
                <a href={twitterLink} target="_blank" style={{ color: '#fff' }}>{'🐦‍⬛ Twitter'}</a>
            </div>
            <Footer />
        </>
    )
};

export default Contact;
