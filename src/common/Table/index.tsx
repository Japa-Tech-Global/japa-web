import LoadingIndicator from '../LoadingIndicator';
import { TableProps } from './types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from './Pagination';

function Table({ loading, tableHeaders, data, menuItems, tableAction }: TableProps) {
  return (
    <div className='overflow-x-auto w-full'>
      {loading ? (
        <div className='flex items-center justify-center p-10 bg-white'>
          <LoadingIndicator />
        </div>
      ) : data && data.length ? (
        <>
          <table className='w-full text-center bg-white'>
            <TableHeader tableHeaders={tableHeaders} />
            <TableBody
              data={data}
              tableHeaders={tableHeaders}
              menuItems={menuItems}
              tableAction={tableAction}
            />
          </table>
          <Pagination />
        </>
      ) : (
        <div className='flex items-center justify-center p-10 font-bold bg-white'>
          No data found
        </div>
      )}
    </div>
  );
}

export default Table;
