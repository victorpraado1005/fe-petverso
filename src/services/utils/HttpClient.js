class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    if (path === '/users/login') {
      const response = await fetch(`${this.baseURL}${path}`);
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} = ${response.statusText}`);
    }

    const token = localStorage.getItem('accessToken');
    const accessToken = `Bearer ${token}`;

    const header = new Headers();
    header.append('Authorization', accessToken);

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: header,
    });

    if (response.status === 401) {
      localStorage.removeItem('accessToken');
    }

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} = ${response.statusText}`);
  }

  async post(path, body) {
    const token = localStorage.getItem('accessToken');
    const accessToken = `Bearer ${token}`;

    const header = new Headers();
    header.append('Authorization', accessToken);
    header.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: header,
    });

    let responseBody = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.status === 401) {
      localStorage.removeItem('accessToken');
    }

    if (response.ok) {
      return responseBody;
    }

    throw new Error('Erro na API!');
  }

  async put(path, body) {
    const token = localStorage.getItem('accessToken');
    const accessToken = `Bearer ${token}`;

    const header = new Headers();
    header.append('Authorization', accessToken);
    header.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: header,
    });

    let responseBody = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.status === 401) {
      localStorage.removeItem('accessToken');
    }

    if (response.ok) {
      return responseBody;
    }

    throw new Error('Erro na API!');
  }

  async delete(path) {
    const token = localStorage.getItem('accessToken');
    const accessToken = `Bearer ${token}`;

    const header = new Headers();
    header.append('Authorization', accessToken);
    header.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE',
      headers: header,
    });

    if (response.status === 401) {
      localStorage.removeItem('accessToken');
    }

    if (response.ok) {
      return response;
    }

    throw new Error('Erro na API!');
  }
}

export default HttpClient;
