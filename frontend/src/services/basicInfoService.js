import { get } from 'axios';

export async function getIndexInfo() {
  return get('/api/v1/indexinfo');
}
