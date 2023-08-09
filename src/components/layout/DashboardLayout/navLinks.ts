import HomeIcon from '@/assets/icons/sidebar/home.svg';
import ProfileIcon from '@/assets/icons/sidebar/profile.svg';
import PaymentMethodIcon from '@/assets/icons/sidebar/payment-method.svg';
import PayeeIcon from '@/assets/icons/sidebar/payee.svg';
import PaymentIcon from '@/assets/icons/sidebar/payment.svg';
import TransactionsIcon from '@/assets/icons/sidebar/transactions.svg';
import PasswordIcon from '@/assets/icons/sidebar/password.svg';

type links = {
  name: string;
  href: string;
  icon: string;
};

const navLinks: links[] = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'My Profile ',
    href: '/dashboard/profile',
    icon: ProfileIcon,
  },

  {
    name: 'Payment Method',
    href: '/dashboard/payment-method',
    icon: PaymentMethodIcon,
  },
  {
    name: 'My Payees',
    href: '/dashboard/payees',
    icon: PayeeIcon,
  },
  {
    name: 'Make a Payment',
    href: '/dashboard/payment',
    icon: PaymentIcon,
  },
  {
    name: 'My Transactions ',
    href: '/dashboard/transactions',
    icon: TransactionsIcon,
  },
  {
    name: 'Change Password',
    href: '/dashboard/change-password',
    icon: PasswordIcon,
  },
];

export default navLinks;
