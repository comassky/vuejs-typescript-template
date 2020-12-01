
import { AlbumInterface } from '@/Interfaces/AlbumInterface';
import Axios, { AxiosInstance } from 'axios';

export default abstract class AlbumsApiServices {
    private static rest: AxiosInstance = Axios.create();

    static async getAllAlbumsOfUser(userId: number): Promise<AlbumInterface[]> {
        const response = await this.rest.get<AlbumInterface[]>('https://jsonplaceholder.typicode.com/users/' + userId + '/albums');
        return response.data;
    }
}
