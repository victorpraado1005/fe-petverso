import HttpClient from './utils/HttpClient';

class VaccineService {
  constructor() {
    this.httpClient = new HttpClient(process.env.API_URL);
  }

  // pegar as vacinas pelo ID do animal
  listVaccinesByAnimalId(animalId) {
    return this.httpClient.get(`/vaccines/${animalId}`);
  }

  getVaccineById(id) {
    return this.httpClient.get(`/vaccines/${id}`);
  }

  createVaccine(vaccine) {
    return this.httpClient.post('/vaccines', vaccine);
  }

  updateVaccine(id, vaccine) {
    return this.httpClient.put(`/vaccines/${id}`, vaccine);
  }

  deleteVaccine(id) {
    return this.httpClient.delete(`/vaccines/${id}`);
  }
}

export default new VaccineService();
