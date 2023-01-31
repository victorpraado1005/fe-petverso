import HttpClient from './utils/HttpClient';

const url = process.env.REACT_APP_API_URL;

class BanhoService {
  constructor() {
    this.httpClient = new HttpClient(url);
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
