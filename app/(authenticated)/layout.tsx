import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <div className="fixed right-10 bottom-10">
        <ThemeToggle />
      </div>
      <Footer />
    </div>
  );
}
