import { Providers } from '@/store/provider';
import './globals.css';
import type { Metadata } from 'next';
import ToastProvider from '@/common/ToastProvider';
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  icons:{
    icon: "../app/favicon.ico",
  },
  description: 'JAPA Description',
};

const poppins = Poppins({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <ToastProvider>{children}</ToastProvider>
        </Providers>
        <div id='modals' />
      </body>
    </html>
  );
}
