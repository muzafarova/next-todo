'use client'
import type { Todo } from '@prisma/client'
import { useTransition } from 'react'
import { completeTodo } from '@/utils/actions'

export default function Todo({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition()
  return (
    <li
      onClick={() => startTransition(() => completeTodo(todo.id))}
      className={`${
        todo.completed ? 'line-through text-gray-500' : 'cursor-pointer'
      }`}
    >
      {todo.content}
    </li>
  )
}
