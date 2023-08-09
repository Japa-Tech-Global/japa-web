import './globals.css';
import { Providers } from '@/store/provider';
import { Metadata } from 'next';
import FeedbackModal from '@/common/FeedbackModal';

export const metadata: Metadata = {
  title: 'Afripie',
  description: 'Say Hello To Your One Stop Utility Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {children}
          <div id='modals' />
          <FeedbackModal />
        </Providers>
      </body>
    </html>
  );
}
