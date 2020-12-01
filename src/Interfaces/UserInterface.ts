import UserApiServices from '@/services/UserApiServices';

export interface UserInterface {
    id: number,
    name: string,
    username: string,
    adress: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        phone: string,
        website: string
    }
}
