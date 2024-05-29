import { Navbar } from './_components/navbar';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="aurora-w-full aurora-h-full aurora-flex aurora-flex-col aurora-gap-y-10 aurora-items-center aurora-justify-center">
      <Navbar />
      {children}
    </div>
  );
}
