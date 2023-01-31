import HttpClient from './utils/HttpClient';

const url = process.env.REACT_APP_API_URL;

class VaccineService {
  constructor() {
    this.httpClient = new HttpClient(url);
  }

  // metodo para buscar o medicamento relacionado ao animal
  listMedicationByAnimalId(animalId) {
    return this.httpClient.get(`/animals/medication/${animalId}`);
  }

  // metodo para buscar o medicamento para alterar
  getMedicationById(id) {
    return this.httpClient.get(`/medication/${id}`);
  }

  createMedication(medication) {
    return this.httpClient.post('/medication', medication);
  }

  updateMedication(id, medication) {
    return this.httpClient.put(`/medication/${id}`, medication);
  }

  deleteMedication(id) {
    return this.httpClient.delete(`/medication/${id}`);
  }

  deleteMedicationByAnimalId(animalId) {
    return this.httpClient.delete(`/animals/medication/${animalId}`);
  }
}

export default new VaccineService();
