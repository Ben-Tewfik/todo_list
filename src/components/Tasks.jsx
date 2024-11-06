import SingleTask from "./SingleTask";

export default function Tasks({ todos }) {
  return (
    <section className="flex flex-col gap-3 pb-20">
      {todos.map(todo => {
        return <SingleTask key={todo.id} {...todo} />;
      })}
    </section>
  );
}
