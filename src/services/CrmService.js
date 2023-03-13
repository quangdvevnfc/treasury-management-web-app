import ApiService from './ApiService';

export async function apiGetCrmCustomers(data) {
  return ApiService.fetchData({
    url: '/crm/customers/search',
    method: 'post',
    data,
  });
}

export async function apiCreateCrmCustomer(data) {
  return ApiService.fetchData({
    url: '/crm/customers',
    method: 'post',
    data,
  });
}

export async function apiUpdateCrmCustomer(id, data) {
  return ApiService.fetchData({
    url: `/crm/customers/${id}`,
    method: 'put',
    data,
  });
}

export async function apiGetCrmCustomer(id) {
  return ApiService.fetchData({
    url: `/crm/customers/${id}`,
    method: 'get',
  });
}

export async function apiDeleteCrmCustomer(id) {
  return ApiService.fetchData({
    url: `/crm/customers/${id}`,
    method: 'delete',
  });
}
