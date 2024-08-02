import { categoriesAdapter } from '@/adapters';
import { Footer, Loading, Navbar } from '@/components';
import { UseAsync, UseFetchAndLoad } from '@/hooks';
import { Category } from '@/models';
import { getAllCategories } from '@/services';
import { useState } from 'react';
import { CardCategories } from './components';
import './menu.css';

const Menu = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const { callEndPoint, loading } = UseFetchAndLoad();
    UseAsync(() => callEndPoint(getAllCategories()), setCategories, categoriesAdapter, []);

    return (
        <>
            <Navbar />
            <div className='menu-container'>
                <h3>{'Categorias'}</h3>

                <div className='menu-categories-container'>
                    {loading ?
                        <Loading />
                        :
                        categories.map((category) =>
                            <CardCategories category={category} key={category.id} />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Menu;