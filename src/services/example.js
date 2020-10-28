import request from '../utils/request';

export function query() {
  return request('/api/users');
}
 

export function testRequest() {
  return request('http://localhost:8091/test1');
}


export function mockData() {
  return request('/api/mockdata');
}