import HttpClient from './utils/HttpClient';

class ConsultaService {
  constructor() {
    this.httpClient = new HttpClient('https://petverso-production-6d1a.up.railway.app');
  }

  // pegar as consultas pelo ID do animal
  listConsultaByUserId(userId) {
    return this.httpClient.get(`/users/consultas/${userId}`);
  }

  getConsultaByAnimalId(id) {
    return this.httpClient.get(`/consulta/${id}`);
  }

  createConsulta(consulta) {
    return this.httpClient.post('/consulta', consulta);
  }

  updateConsulta(id, consulta) {
    return this.httpClient.put(`/consulta/${id}`, consulta);
  }

  deleteConsulta(consulta) {
    return this.httpClient.delete(`/consulta/${consulta}`);
  }

  deleteConsultaByAnimalId(animalId) {
    return this.httpClient.delete(`/animals/consulta/${animalId}`);
  }
}

export default new ConsultaService();
