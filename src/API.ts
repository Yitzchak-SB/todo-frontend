import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getTodos = async (): Promise<AxiosResponse<apiDataType>> => {
  try {
    const todos: AxiosResponse<apiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<apiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveTodo: AxiosResponse<apiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    );
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<apiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    const updatedTodo: AxiosResponse<apiDataType> = await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<apiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<apiDataType> = await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    throw new Error(error);
  }
};
