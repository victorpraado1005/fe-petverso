import HttpClient from './utils/HttpClient';

const url = process.env.REACT_APP_API_URL;

class VaccineService {
  constructor() {
    this.httpClient = new HttpClient(url);
  }

  // pegar as vacinas pelo ID do animal
  listVaccinesByAnimalId(animalId) {
    return this.httpClient.get(`/animals/vaccines/${animalId}`);
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

  deleteVaccineByAnimalId(animalId) {
    return this.httpClient.delete(`/animals/vaccines/${animalId}`);
  }
}

export default new VaccineService();
