import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo, updateTodo, deleteTodo } from '@/actions/todos';
import { Todo } from '@/lib/types';
import { createClient } from '@/supabase/client';

type CreateTodoInput = {
  title: string;
  body: string;
};

type UpdateTodoInput = {
  id: string;
  title: string;
  body: string;
};

export const useGetAllTodos = (todos: Todo[]) => {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const supabase = await createClient();
      const { data, error } = await supabase.from('todos').select('*');

      if (error) throw new Error('Failed to fetch todos');

      return data;
    },
    initialData: todos,
  });

  return query;
};

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateTodoInput) => createTodo(input.title, input.body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: UpdateTodoInput) =>
      updateTodo(input.id, input.title, input.body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoId: string) => deleteTodo(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
