import { newTodo } from '@/utils/actions'

export default function NewTodoForm() {
  return (
    <form action={newTodo} className="flex gap-1">
      <input
        name="content"
        type="text"
        placeholder="Next task"
        className="rounded py-1 px-2 flex-1 border-black/25 text-black bg-white"
        required
      />
      <button type="submit" className="button">
        Add
      </button>
    </form>
  )
}
