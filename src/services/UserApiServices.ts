
import { UserInterface } from '@/Interfaces/UserInterface';
import Axios, { AxiosInstance } from 'axios';

export default abstract class UserApiServices {
    private static rest: AxiosInstance = Axios.create();

    static async getAllUsers(): Promise<[UserInterface]> {
        const response = await this.rest.get<[UserInterface]>('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }

    static async getOneUser(id: number): Promise<UserInterface> {
        const response = await this.rest.get<UserInterface>('https://jsonplaceholder.typicode.com/users/' + id);
        return response.data;
    }
}
