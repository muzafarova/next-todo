import db from '@/utils/db'
import TodoList from '@/components/TodoList'

async function getData() {
  await new Promise((res) => setTimeout(res, 1000))
  return await db.todo.findMany({})
}

export default async function Docs() {
  const todos = await getData()

  return (
    <section>
      <h1 className="text-3xl">Todos</h1>
      <div className="max-w-prose my-4">
        <TodoList todos={todos} />
      </div>
    </section>
  )
}
