export const formatNumberToNaira = (number: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(
    Number(number)
  );
};

export const getNameInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
};

export const splitCamelCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export const getCatchMessage = (error: any) => {
  return error?.response?.data
    ? Object.values(error?.response?.data).length
      ? Object.values(error?.response?.data).join(', ')
      : error?.response?.data?.message
    : 'Request Unsuccessful';
};
