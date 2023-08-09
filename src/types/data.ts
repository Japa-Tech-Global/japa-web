export type NotificationType = {
  _id: string;
  userId: string;
  isRead: boolean;
  category: string;
  identifier: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export type SecurityQuestionType = {
  createdDate: string;
  id: number;
  item: string;
};

export type PayeeType = {
  payeeId: string;
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  address2: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  status: string | null;
  statusReason: string | null;
};

export type PaymentMethodType = {
  paymentMethodId: string;
  accountName: string;
  bankRoutingABANumber: string;
  accountNumber: string;
  confirmAccountNumber: string;
  bankName: string;
  accountType: string;
};
