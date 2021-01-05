interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type apiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
