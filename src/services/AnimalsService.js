import HttpClient from './utils/HttpClient';

class AnimalsService {
  constructor() {
    this.httpClient = new HttpClient('https://api-petverso.herokuapp.com');
  }

  async listAnimals(UserID) {
    return this.httpClient.get(`/users/animals/${UserID}`);
  }

  async createAnimal(animal) {
    return this.httpClient.post('/users/animals', animal);
  }
}

export default new AnimalsService();
