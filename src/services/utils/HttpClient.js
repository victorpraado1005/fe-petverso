class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} = ${response.statusText}`);
  }

  async post(path, body) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
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
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers,
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
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE',
      headers,
    });

    if (response.ok) {
      return response;
    }

    throw new Error('Erro na API!');
  }
}

export default HttpClient;
