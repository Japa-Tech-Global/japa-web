type Link = {
  label: string;
  href: string;
};

const navLinks: Link[] = [
  {
    label: 'Login',
    href: '/auth/login',
  },
  {
    label: 'Get Started',
    href: '/auth/register',
  },
];

export default navLinks;
