export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action) {
//     case "add":
//       return [
//         ...state,
//         { id: Date.now(), todo: action.payload, isDone: false },
//       ];
//     case "remove":
//       return state.filter((todo) => todo.id !== action.payload);
//     case "done":
//       return state.map((todo) =>
//         todo.id !== action.payload
//           ? { ...todo, isDone: !todo.isDone }
//           : { todo }
//       );
//   }
// };

// const reducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
// };
