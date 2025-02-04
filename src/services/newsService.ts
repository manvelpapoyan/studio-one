import axios from "axios";

const API_URL = "http://localhost:5000/news"; // Mock API

export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    fibonacci: number;
    isPrime: boolean;
}

export const fetchNews = async (): Promise<NewsItem[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addNews = async (newsItem: Omit<NewsItem, "id">): Promise<NewsItem> => {
    const response = await axios.post(API_URL, newsItem);
    console.log(response)

    return response.data;
};

export const deleteNews = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
