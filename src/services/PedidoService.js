import HttpClient from './utils/HttpClient';

class PedidoService {
  constructor() {
    this.httpClient = new HttpClient('https://petverso-production-6d1a.up.railway.app');
  }

  getPedidosByUserId(id) {
    return this.httpClient.get(`/users/pedidos/${id}`);
  }

  createPedido(pedido) {
    return this.httpClient.post('/pedidos', pedido);
  }
}

export default new PedidoService();
