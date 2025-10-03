import './globals.css';
import Header from '@/components/Header/header.js';

export const metadata = {
  title: 'GaláxiaX - Exploração Espacial',
  description: 'Descubra as fronteiras do universo!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
