import React, {useEffect, useMemo} from 'react';
import {Avatar, Badge} from 'components/ui';
import {DataTable} from 'components/shared';
import {HiOutlinePencil, HiOutlineTrash} from 'react-icons/hi';
import {FiPackage} from 'react-icons/fi';
import {useDispatch, useSelector} from 'react-redux';
import {getCustomers, setTableData} from '../store/dataSlice';
import {
  setSelectedCustomer,
  setSortedColumn,
  toggleDeleteConfirmation,
} from '../store/stateSlice';
import useThemeClass from 'utils/hooks/useThemeClass';
import CustomerDeleteConfirmation from './CustomerDeleteConfirmation';
import {useNavigate} from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';
import {useTranslation} from 'react-i18next';

const inventoryStatusColor = {
  active: {
    label: 'Active',
    dotClass: 'bg-emerald-500',
    textClass: 'text-emerald-500',
  },
  inactive: {
    label: 'Inactive',
    dotClass: 'bg-red-500',
    textClass: 'text-red-500',
  },
};

const ActionColumn = ({row}) => {
  const dispatch = useDispatch();
  const {textTheme} = useThemeClass();
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/app/crm/customer-edit/${row.id}`);
  };

  const onDelete = () => {
    dispatch(toggleDeleteConfirmation(true));
    dispatch(setSelectedCustomer(row.id));
  };

  return (
    <div className="flex justify-end text-lg">
      <span
        className={`cursor-pointer p-2 hover:${textTheme}`}
        onClick={onEdit}
      >
        <HiOutlinePencil />
      </span>
      <span
        className="cursor-pointer p-2 hover:text-red-500"
        onClick={onDelete}
      >
        <HiOutlineTrash />
      </span>
    </div>
  );
};

const CustomerColumn = ({row}) => {
  const avatar = row.avatar ? (
    <Avatar src={row.avatar} size={40} />
  ) : (
    <Avatar icon={<FiPackage />} />
  );

  return (
    <div className="flex items-center">
      {avatar}
      <span className={`ml-2 rtl:mr-2 font-semibold min-w-[280px]`}>
        {row.name}
      </span>
    </div>
  );
};

const CustomerTable = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {pageIndex, pageSize, sort, query, total} = useSelector(
    (state) => state.customerList.data.tableData
  );
  const filterData = useSelector((state) => state.customerList.data.filterData);
  const loading = useSelector((state) => state.customerList.data.loading);
  const data = useSelector((state) => state.customerList.data.customerList);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, pageSize, sort]);

  const tableData = useMemo(
    () => ({pageIndex, pageSize, sort, query, total}),
    [pageIndex, pageSize, sort, query, total]
  );

  const fetchData = () => {
    dispatch(getCustomers({pageIndex, pageSize, sort, query, filterData}));
  };

  const columns = useMemo(
    () => [
      {
        Header: t('views.appsCrm.customerList.table.code'),
        accessor: 'code',
        sortable: true,
      },
      {
        Header: t('views.appsCrm.customerList.table.name'),
        accessor: 'name',
        sortable: true,
        Cell: (props) => {
          const row = props.row.original;
          return <CustomerColumn row={row} />;
        },
      },
      {
        Header: t('views.appsCrm.customerList.table.abbreviatedName'),
        accessor: 'abbreviatedName',
        sortable: true,
      },
      {
        Header: t('views.appsCrm.customerList.table.documentType'),
        accessor: 'documentType',
        sortable: true,
      },
      {
        Header: t('views.appsCrm.customerList.table.documentNumber'),
        accessor: 'documentNumber',
        sortable: true,
      },
      {
        Header: t('views.appsCrm.customerList.table.phoneNumber'),
        accessor: 'phoneNumber',
        sortable: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        sortable: true,
        Cell: (props) => {
          const {status} = props.row.original;
          return (
            <div className="flex items-center gap-2">
              <Badge className={inventoryStatusColor[status]?.dotClass} />
              <span
                className={`capitalize font-semibold ${inventoryStatusColor[status]?.textClass}`}
              >
                {inventoryStatusColor[status]?.label}
              </span>
            </div>
          );
        },
      },
      {
        Header: 'Actions',
        id: 'action',
        accessor: (row) => row,
        Cell: (props) => <ActionColumn row={props.row.original} />,
      },
    ],
    [t]
  );

  const onPaginationChange = (page) => {
    const newTableData = cloneDeep(tableData);
    newTableData.pageIndex = page;
    dispatch(setTableData(newTableData));
  };

  const onSelectChange = (value) => {
    const newTableData = cloneDeep(tableData);
    newTableData.pageSize = Number(value);
    newTableData.pageIndex = 1;
    dispatch(setTableData(newTableData));
  };

  const onSort = (sort, sortingColumn) => {
    const newTableData = cloneDeep(tableData);
    newTableData.sort = sort;
    dispatch(setTableData(newTableData));
    dispatch(setSortedColumn(sortingColumn));
  };

  console.log(data);

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        skeletonAvatarColumns={[0]}
        skeletonAvatarProps={{className: 'rounded-md'}}
        loading={loading}
        pagingData={tableData}
        onPaginationChange={onPaginationChange}
        onSelectChange={onSelectChange}
        onSort={onSort}
      />
      <CustomerDeleteConfirmation />
    </>
  );
};

export default CustomerTable;
