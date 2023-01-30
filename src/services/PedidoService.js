import HttpClient from './utils/HttpClient';

class PedidoService {
  constructor() {
    this.httpClient = new HttpClient('https://petverso-production-f14e.up.railway.app');
  }

  getPedidosByUserId(id) {
    return this.httpClient.get(`/users/pedidos/${id}`);
  }

  createPedido(pedido) {
    return this.httpClient.post('/pedidos', pedido);
  }
}

export default new PedidoService();
