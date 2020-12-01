
import { PostInterface } from '@/Interfaces/PostInterface';
import Axios, { AxiosInstance } from 'axios';

export default abstract class PostApiServices {
    private static rest: AxiosInstance = Axios.create();

    static async getAllPosts(): Promise<[]> {
        const response = await this.rest.get<[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }

    static async getOnePost(id: number): Promise<PostInterface> {
        const response = await this.rest.get<PostInterface>('https://jsonplaceholder.typicode.com/posts/' + id);
        return response.data;
    }
}
