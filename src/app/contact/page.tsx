import ContactForm from '@/components/contact/ContactForm';
import Header from '@/components/contact/Header';
import AppLayout from '@/components/layout/AppLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Afripie - Contact Us',
};

function ContactPage() {
  return (
    <AppLayout>
      <Header />
      <ContactForm />
    </AppLayout>
  );
}

export default ContactPage;
