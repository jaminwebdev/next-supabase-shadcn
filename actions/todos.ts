'use server';

import { getUser, createClient } from '@/supabase/server';
import { handleError } from '@/lib/utils';

export const createTodo = async (title: string, body: string) => {
  try {
    const user = await getUser();
    if (!user) throw new Error('You must be logged in to create a todo');

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('todos')
      .insert([
        {
          title,
          body,
        },
      ])
      .select();

    if (error) throw error;

    return { data, errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const updateTodo = async (
  todoId: string,
  title: string,
  body: string
) => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('todos')
      .update({
        title,
        body,
        updated_at: new Date().toISOString(),
      })
      .eq('id', todoId)
      .select();

    if (error) throw error;

    return { data, errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const user = await getUser();
    if (!user) throw new Error('You must be logged in to delete a todo');

    const supabase = await createClient();

    const { error } = await supabase.from('todos').delete().eq('id', todoId);

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};
