'use client'
import TodoItem from '@/components/Todo'
import type { Todo } from '@prisma/client'

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ol>
  )
}
