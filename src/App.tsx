import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, name: "Todo1", completed: false },
  // ]);
  const [todos, setTodos] = useState<any[]>([]);

  const todoNameRef = useRef<HTMLInputElement | null>(null);

  const generateId = () => {
    return Math.floor(Math.random() * 1000); // 適切なID生成方法に変更するべきですが、今回は簡単なランダム数を使用
  };

  const handleAddTodo = () => {
    const name = todoNameRef.current?.value;
    // 名前がない場合は追加しない
    if (!name) return;
    // if (name === "") return;

    setTodos((prevTodos) => {
      //prevTodosは今あるタスク、右は新しいタスクを追加する。
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });

    if (todoNameRef.current) {
      todoNameRef.current.value = '';
    }
  };

  // const handleClear = () => {
  //   setTodos((prevTodos: any) => prevTodos.filter((todo: any) => !todo.completed));
  // };
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  const toggleTodo = (id: any) => {
    const newTodos = [...todos];
    //find関数（条件式がtrueであれば、trueになったものだけを変数の中に入れる）
    const todo = newTodos.find((todo) => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed;
      setTodos(newTodos);
    }
  };

  return (
    <>
      <div className="max-w-[390px] my-10 mx-auto px-2">
      <h2 className="font-semibold text-[32px] pb-10 text-center">Todoリスト</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      {/* filter関数はfalseになったものだけを残す、フィルタリングする */}
      <div className="text-[#8d3dbe] max-sm:text-center sm:ml-12">残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
        <div className="flex gap-4 justify-center items-center max-sm:flex-col pb-10">
          <input type="text" ref={todoNameRef} className="bg-[#E6E8E6] border border-gray-500" />
          <button onClick={handleAddTodo} className="bg-[#3772FF] text-[#fff] px-6 py-2 rounded-2xl">
            追加
          </button>
        </div>
        <div className="text-center">
          <button onClick={handleClear} className="bg-[#DF2935] text-[#fff] px-6 py-2 rounded-2xl">
            完了したタスク削除
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

