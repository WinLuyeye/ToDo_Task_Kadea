function List() {
  return (
    <main className="flex w-full bg-white h-[90vh]">
        <aside className="bg-white w-1/3 py-[20px] flex justify-between flex-col">
            <h2>Tasks</h2>
            <div>
                <button className="bg-green-400 py-4 px-6 rounded-lg text-white">Create New Task</button>
            </div>
            
        </aside>

        <section className="bg-green-200 w-2/3 py-[20px] ">
            <h2>Description</h2>
        </section>
    </main>
  )
}
export default List