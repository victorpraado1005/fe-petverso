import HttpClient from './utils/HttpClient';

const url = process.env.REACT_APP_API_URL;

class PedidoService {
  constructor() {
    this.httpClient = new HttpClient(url);
  }

  getPedidosByUserId(id) {
    return this.httpClient.get(`/users/pedidos/${id}`);
  }

  createPedido(pedido) {
    return this.httpClient.post('/pedidos', pedido);
  }
}

export default new PedidoService();
