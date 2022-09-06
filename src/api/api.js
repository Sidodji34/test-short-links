import Cookie from 'js-cookie';

export function getToken() {
  return Cookie.get('token');
}

export async function createAccount(email, password) {
  try {
    const url = `http://79.143.31.216/register?username=${email}&password=${password}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username: email }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function loginAccount(username, password) {
  const url = `http://79.143.31.216/login`;
  const data = new FormData();
  data.append('username', `${username}`);
  data.append('password', `${password}`);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function compressLink(link) {
  const url = `http://79.143.31.216/squeeze?link=${link}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ target: link }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export const FILTER = {
  ASCENDING_SHORT: 'asc_short',
  ASCENDING_TARGET: 'asc_target',
  ASCENDING_COUNTER: 'asc_counter',
  DESCENDING_SHORT: 'desc_short',
  DESCENDING_TARGET: 'desc_target',
  DESCENDING_COUNTER: 'desc_counter',
};

export async function getStatistics(filter, offset) {
  const url = `http://79.143.31.216/statistics?order=${filter}&offset=${offset}&limit=10`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
