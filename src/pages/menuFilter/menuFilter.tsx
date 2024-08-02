import { mealsAdapter } from '@/adapters';
import { Footer, Loading, Navbar } from '@/components';
import { UseAsync, UseFetchAndLoad } from '@/hooks';
import { Meals } from '@/models';
import { getMealsByCategory } from '@/services';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CardMeals } from './components';
import './menuFilter.css';

const MenuFilter = () => {

    const navigate = useNavigate();
    const { categoryname } = useParams();
    (!categoryname) && navigate('/menu');
    const categoryName = `${categoryname}`;

    const [meals, setMeals] = useState<Meals[]>([]);

    const { callEndPoint, loading } = UseFetchAndLoad();
    UseAsync(() => callEndPoint(getMealsByCategory(categoryName)), setMeals, mealsAdapter, []);

    const returnMenu = () => {
        navigate('/menu');
    };

    return (
        <>
            <Navbar />
            <div className='menu-filter-container'>
                <button onClick={returnMenu}>{'<- Volver'}</button>
                <h3>{categoryName}</h3>
                {loading ?
                    <Loading />
                    :
                    <div className='menu-meals-container'>
                        {meals.map((meal) =>
                            <CardMeals meals={meal} key={meal.id} />
                        )}
                    </div>
                }

            </div>
            <Footer />
        </>
    )
};

export default MenuFilter;