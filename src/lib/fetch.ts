import {AuthData} from '../../screens/Login';
import {BASE_URL} from '../constants';

export const getDataByPost = async <T>(
  url: string,
  data: AuthData,
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(r => r.json())
    .catch(e => console.error(e));
  console.log(response);
  return await response;
};
