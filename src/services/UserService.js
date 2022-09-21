import HttpClient from './utils/HttpClient';

class AnimalsService {
  constructor() {
    this.httpClient = new HttpClient('https://api-petverso.herokuapp.com');
  }

  getUserById(id) {
    return this.httpClient.get(`/users/${id}`);
  }
}

export default new AnimalsService();
