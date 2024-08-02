import { Category } from "@/models";

export const categoryAdapter = (category: any): Category => (
    {
        id: category.idCategory,
        name: category.strCategory,
        description: category.strCategoryDescription,
        url_img: category.strCategoryThumb,
    }
);

export const categoriesAdapter = (categories: any[]): Category[] => (
    categories.map((category) => categoryAdapter(category))
);
