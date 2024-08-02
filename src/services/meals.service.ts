import { Category } from "@/models";
import axios from "axios";

const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export const getMealsByCategory = (categoryname: string) => {
    const call: Promise<Category[]> = axios.get(`${url}${categoryname}`).then((res) => res.data.meals);
    return call;
};