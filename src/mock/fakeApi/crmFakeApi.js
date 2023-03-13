import wildCardSearch from 'utils/wildCardSearch';
import sortBy from 'utils/sortBy';
import paginate from 'utils/paginate';

export default function crmFakeApi(server, apiPrefix) {
  server.post(`${apiPrefix}/crm/customers/search`, (schema, {requestBody}) => {
    const body = JSON.parse(requestBody);
    const {pageIndex, pageSize, sort, query} = body;
    const {order, key} = sort;
    const users = schema.db.customersData;
    let data = users.filter((elm) => typeof elm !== 'function');
    let total = users.length;

    if (key && order) {
      if (key !== 'lastOnline') {
        data.sort(sortBy(key, order === 'desc', (a) => a.toUpperCase()));
      } else {
        data.sort(sortBy(key, order === 'desc', parseInt));
      }
    }

    if (query) {
      data = wildCardSearch(data, query);
      total = data.length;
    }

    data = paginate(data, pageSize, pageIndex);

    const responseData = {
      data: data,
      total: total,
    };
    return responseData;
  });

  server.post(`${apiPrefix}/crm/customers`, (schema, {requestBody}) => {
    const data = JSON.parse(requestBody);
    schema.db.userDetailData.insert(data);
    return true;
  });

  server.get(`${apiPrefix}/crm/customers/:id`, (schema, {params}) => {
    const id = params.id;
    const user = schema.db.userDetailData.find(id);
    return user;
  });

  server.del(`${apiPrefix}/crm/customers/:id`, (schema, {params}) => {
    const id = params.id;
    schema.db.userDetailData.remove({id});
    return {};
  });

  server.put(
    `${apiPrefix}/crm/customers/:id`,
    (schema, {params, requestBody}) => {
      const id = params.id;
      const data = JSON.parse(requestBody);
      schema.db.userDetailData.update({id}, data);
      return {};
    }
  );
}
