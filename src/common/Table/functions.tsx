import { UncertainObjectType } from '@/types/user';
import Button from '../Button/Button';
import TableMenu from './TableMenu';
import { menuItemType } from './types';

export const formatTableValue = ({
  value,
  headerName,
  menuItems,
  tableAction,
  data,
}: {
  value: string;
  headerName: string;
  tableAction?: (data: any) => void;
  menuItems?: menuItemType[];
  data: UncertainObjectType;
}) => {
  // Boolean Check
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  // Capitalize Check
  if (['email'].includes(headerName)) {
    // should not be capitalized
    return value;
  }

  // Data check
  if (['createdAt'].includes(headerName)) {
    return new Date(value).toDateString();
  }

  // Object check
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
    return (
      <span className='capitalize'>
        {(value['fullname'] || value['name'] || Object.values(value)[0]) as string}
      </span>
    );
  }

  // Status Check
  if (headerName === 'status') {
    let output = <span className='capitalize text-success'>{value}</span>;
    if (!value) {
      output = <span>-</span>;
    }
    return output;
    // return value === 'open' ? (
    //   <span className='capitalize text-success'>{value}</span>
    // ) : (
    //   <span className='capitalize text-error'>{value || '-'}</span>
    // );
  }

  // Menu ID check
  if (headerName === 'action' && tableAction) {
    return (
      <div className='flex justify-center'>
        <Button
          className='!w-fit !bg-[#8000D738] !text-black !h-8'
          onClick={() => tableAction(data)}
        >
          Edit
        </Button>
      </div>
    );
    // return <TableMenu id={value} menuItems={menuItems} />;
  }

  return <span className='capitalize'>{value || '-'}</span>;
};
