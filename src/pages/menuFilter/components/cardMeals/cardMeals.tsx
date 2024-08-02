import { Meals } from '@/models';
import './cardMeals.css';

type Props = {
    meals: Meals;
};

const CardMeals: React.FC<Props> = ({ meals }) => {

    return (
        <div className="mealscard-container">
            <img className='mealscard-img' src={meals.url_img} />
            <div className="mealscard-content">
                <h3 className='mealscard-name'>{meals.name}</h3>
            </div>

        </div>
    )
};

export default CardMeals;