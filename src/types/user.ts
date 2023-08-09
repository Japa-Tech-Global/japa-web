export type UserType = {
  email: string;
  firstName: string;
  hasPayment: boolean;
  lastLoginDate: string;
  lastName: string;
  otherNames: string;
  phone: string;
  role: string;
  status: string;
  token: string;
};

export type ProfileType = {
  address: string;
  city: string;
  country: string;
  createdDate: Date;
  email: string;
  idExpiryDate: Date;
  idIssuerCountry: string;
  idMeans: string;
  idNumber: string;
  isActive: 'Active' | 'InActive';
  isEmailConfirmed: 'YES' | 'NO';
  isPhoneConfirmed: 'YES' | 'No';
  kycStatus: string;
  lastLoginDate: Date;
  lastUpdatedDate: Date;
  name: string;
  phone: string;
  role: string;
  state: string;
  userId: number | string;
};

export type UncertainObjectType = {
  [key: string]: any;
};
