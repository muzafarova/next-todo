'use server'
import db from './db'
import { revalidatePath } from 'next/cache'

export async function newTodo(formData: FormData) {
  await db.todo.create({
    data: { content: formData.get('content') as string },
  })

  revalidatePath('/todos')
}

export async function completeTodo(id: string) {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  })

  revalidatePath('/todos')
}
