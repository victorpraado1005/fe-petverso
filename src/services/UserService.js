import HttpClient from './utils/HttpClient';

const url = process.env.REACT_APP_API_URL;

class AnimalsService {
  constructor() {
    this.httpClient = new HttpClient(url);
  }

  getUserById(id) {
    return this.httpClient.get(`/users/${id}`);
  }

  createUser(user) {
    return this.httpClient.post('/users', user);
  }

  updateUser(id, user) {
    return this.httpClient.put(`/users/${id}`, user);
  }
}

export default new AnimalsService();
