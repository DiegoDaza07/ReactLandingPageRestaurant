import { Footer, Navbar } from '@/components';
import logo from '@/assets/logo.jpeg';
import './home.css';

const Home = () => {

    return (
        <>
            <Navbar />
            <div className='home-container'>

                <div className='home-logo-container'>
                    <h3>{'Forks'}</h3>
                    <img className='home-logo-img' src={logo} alt="" />
                    <p>{'Donde cada vocado es un deleite.'}</p>
                </div>

                <div>
                    <h3>{'Bienvenidos a Forks'}</h3>
                    <p>{'En el corazón de la ciudad, donde el lujo y la sofisticación se encuentran, se erige Forks, un santuario culinario destinado a los paladares más exigentes. Desde nuestra inauguración, hemos sido sinónimo de excelencia, ofreciendo una experiencia gastronómica sin igual que va más allá de la comida.'}</p>

                    <h3>{'Nuestra Filosofía'}</h3>
                    <p>{'Forks no es solo un restaurante; es una celebración del arte culinario en su forma más pura. Cada plato que servimos es una obra maestra, creada con los ingredientes más frescos y de la más alta calidad. Nuestro equipo de chefs galardonados combina técnicas tradicionales con innovación contemporánea para ofrecer un menú que deleita y sorprende en cada bocado.'}</p>

                    <h3>{'El Ambiente'}</h3>
                    <p>{'Diseñado para reflejar nuestra dedicación al lujo, Forks ofrece un ambiente elegante y refinado que invita a la relajación y al disfrute. Desde la decoración meticulosamente seleccionada hasta la iluminación suave y la música de fondo cuidadosamente curada, cada detalle ha sido pensado para proporcionar una atmósfera inigualable.'}</p>
                </div>

            </div>
            <Footer />
        </>
    )
};

export default Home;