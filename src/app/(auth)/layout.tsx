export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="aurora-h-full aurora-flex aurora-items-center aurora-justify-center">
      {children}
    </div>
  );
}
