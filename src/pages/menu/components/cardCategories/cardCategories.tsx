import { Category } from '@/models';
import { useNavigate } from 'react-router-dom';
import './cardCategories.css';


type Props = {
    category: Category;
}

const CardCategories: React.FC<Props> = ({ category }) => {

    const navigate = useNavigate();
    const goToCategory = () => {
        navigate(`/menu/${category.name}`);
    };

    return (
        <div className="categorycard-container">
            <img className='categorycard-img' onClick={goToCategory} src={category.url_img} />
            <div className="categorycard-content">
                <h3 className='categorycard-name' onClick={goToCategory}>{category.name}</h3>
                {/* <p className='categorycard-description'>{category.description}</p> */}
            </div>

        </div>
    )
};

export default CardCategories;