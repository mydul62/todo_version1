function AddTodo(){
  return <div className="todo-input grid gap-3 grid-cols-12 my-8 *:border *:border-[#ccc] *:border-[2px] *:rounded-md *:px-4 *:outline-none">
  <input
    className=" col-span-5 block"
    type="text"
    placeholder="Enter Todo here"
  />
  <input className=" col-span-4 block" type="date" />
  <input className=" col-span-3 btn btn-warning" type="submit" />
</div>
}
export default AddTodo;