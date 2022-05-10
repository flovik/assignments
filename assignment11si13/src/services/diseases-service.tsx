//import {Diseases} from '../api/axios'
export interface UserDiseases {
    disease: string;
    remarks: string;
}

export interface Diseases {
    id: number;
    disease: string;
    remarks: string;
}

class DiseasesService {
    //aici trebuie sa faca call la backend sa transmita datele
    // async getAll(params: object) {
    //     return await Diseases.getAll(params);
    // }
}

export default new DiseasesService();