import HttpClient from './utils/HttpClient';

class BanhoService {
  constructor() {
    this.httpClient = new HttpClient('https://petverso-production-f14e.up.railway.app');
  }

  // pegar as consultas pelo ID do animal
  listBanhoByUserlId(UserID) {
    return this.httpClient.get(`/users/banhos/${UserID}`);
  }

  getBanhoByAnimalId(id) {
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

  deleteBanhoByAnimalId(animalId) {
    return this.httpClient.delete(`/animals/banho/${animalId}`);
  }
}

export default new BanhoService();
