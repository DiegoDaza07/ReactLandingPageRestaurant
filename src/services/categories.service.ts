import { Category } from "@/models";
import axios from "axios";

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export const getAllCategories = () => {
    const call: Promise<Category[]> = axios.get(url).then((res) => res.data.categories);
    return call;
};