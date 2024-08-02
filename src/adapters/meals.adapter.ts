import { Meals } from "@/models";

export const mealAdapter = (meal: any): Meals => (
    {
        id: meal.idMeal,
        name: meal.strMeal,
        url_img: meal.strMealThumb,
    }
);

export const mealsAdapter = (meals: any[]): Meals[] => (
    meals.map((meals) => mealAdapter(meals))
);
