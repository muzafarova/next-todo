export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <h1 className="opacity-50 mb-8">Dashboard</h1>
      {children}
    </div>
  )
}
