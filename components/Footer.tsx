import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="border-b py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Hebuildswebistes, All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
