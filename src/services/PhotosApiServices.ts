
import { PhotoInterface } from '@/Interfaces/PhotoInterface';
import Axios, { AxiosInstance } from 'axios';

export default abstract class PhotosApiServices {
    private static rest: AxiosInstance = Axios.create();

    static async getAllPhotosOfAlbum(albumId: number): Promise<PhotoInterface[]> {
        const response = await this.rest.get<PhotoInterface[]>('https://jsonplaceholder.typicode.com/albums/' + albumId + '/photos');
        return response.data;
    }
}
