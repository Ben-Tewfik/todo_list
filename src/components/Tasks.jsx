import SingleTask from "./SingleTask";

export default function Tasks({ todos }) {
  return (
    <section>
      {todos.map(todo => {
        return <SingleTask key={todo.id} {...todo} />;
      })}
    </section>
  );
}
