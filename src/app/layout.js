import './globals.css';
import Header from '@/components/Header/header.js';
import Footer from '@/components/Footer/footer.js';

export const metadata = {
  title: 'JS Mastery 💻',
  description: 'Curso de JavaScript do Zero ao Avançado',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
