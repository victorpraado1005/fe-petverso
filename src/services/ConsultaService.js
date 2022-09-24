import HttpClient from './utils/HttpClient';

class ConsultaService {
  constructor() {
    this.httpClient = new HttpClient('https://api-petverso.herokuapp.com');
  }

  // pegar as consultas pelo ID do animal
  listConsultaByUserId(userId) {
    return this.httpClient.get(`/users/consultas/${userId}`);
  }

  getConsultaById(id) {
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
}

export default new ConsultaService();
