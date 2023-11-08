class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const header = new Headers();
    header.append('Authorization', localStorage.getItem('accessToken'));

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'GET',
      headers: header,
    });

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} = ${response.statusText}`);
  }

  async post(path, body) {
    const header = new Headers();
    header.append('Authorization', localStorage.getItem('accessToken'));
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

    if (response.ok) {
      return responseBody;
    }

    throw new Error('Erro na API!');
  }

  async put(path, body) {
    const header = new Headers();
    header.append('Authorization', localStorage.getItem('accessToken'));
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

    if (response.ok) {
      return responseBody;
    }

    throw new Error('Erro na API!');
  }

  async delete(path) {
    const header = new Headers();
    header.append('Authorization', localStorage.getItem('accessToken'));
    header.append('Content-Type', 'application/json');

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE',
      headers: header,
    });

    if (response.ok) {
      return response;
    }

    throw new Error('Erro na API!');
  }
}

export default HttpClient;
