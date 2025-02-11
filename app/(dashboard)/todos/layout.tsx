import NewTodoForm from '@/components/NewTodoForm'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <h1 className="opacity-50 mb-8">Dashboard</h1>
      {children}

      <footer className="fixed bottom-0 left-0 right-0 p-4">
        <NewTodoForm />
      </footer>
    </div>
  )
}
