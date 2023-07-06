import api from '../auth/http'
import { AxiosResponse } from 'axios'
import { IUser } from '../../models/IUser'

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.get<IUser[]>('/users/list')
  }
}
