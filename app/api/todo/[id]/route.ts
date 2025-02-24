import { NextResponse } from 'next/server'
import db from '@/utils/db'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const todo = await db.todo.findUnique({ where: { id } })

  if (!todo) {
    return NextResponse.json({ error: 'Todo not found' }, { status: 404 })
  }

  return NextResponse.json({ data: todo })
}
