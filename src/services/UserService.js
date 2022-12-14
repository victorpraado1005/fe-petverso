import HttpClient from './utils/HttpClient';

class AnimalsService {
  constructor() {
    this.httpClient = new HttpClient('https://petverso-production-6d1a.up.railway.app');
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
