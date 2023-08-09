import React from 'react';

export interface TableProps {
  data: any[];
  tableHeaders: string[];
  loading: boolean;
  menuItems?: menuItemType[];
  tableAction?: (data: any) => void;
}

export type rowType = { row: { value: string; headerName: string }[] }[];

export type menuItemType = {
  label: string;
  onClick: (id: string) => void;
  style?: React.CSSProperties;
};
