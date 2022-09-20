import HttpClient from './utils/HttpClient';

class BanhoService {
  constructor() {
    this.httpClient = new HttpClient('https://api-petverso.herokuapp.com');
  }

  // pegar as consultas pelo ID do animal
  listBanhoByAnimalId(animalId) {
    return this.httpClient.get(`/users/banho/${animalId}`);
  }

  getBanhoById(id) {
    return this.httpClient.get(`/banho/${id}`);
  }

  createBanho(banho) {
    return this.httpClient.post('/banho', banho);
  }

  updateBanho(id, banho) {
    return this.httpClient.put(`/banho/${id}`, banho);
  }

  deleteBanho(banho) {
    return this.httpClient.delete(`/banho/${banho}`);
  }
}

export default new BanhoService();
