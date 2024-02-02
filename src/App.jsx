import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoIten1";
function App() {
  return (
    <div class="todo-app" className="container max-w-[60%] mx-auto">
      <AppName/>
      <AddTodo/>
      <TodoItem1/>
      <div className="data-base">
        <div className="todo-input grid items-center gap-3 grid-cols-12 my-8 *:text-xl">
          <h2 className=" col-span-5 block">mr. Jahen khan</h2>
          <h2 className=" col-span-4 block">05/02/20024</h2>
          <button className=" col-span-3 btn btn-secondary">Delete</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
