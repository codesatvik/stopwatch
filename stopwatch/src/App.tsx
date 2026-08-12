import { useRef, useState } from "react";
import { useTodos } from "./hooks/useTodo";

type TodoType = { title: string; id: string };

function Essay() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div style={{ padding: 30 }}>
      <div ref={divRef} style={{ fontSize: 20, height: "80vh", overflow: "scroll" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, porro veniam accusamus reprehenderit dolore, labore error ipsa harum, aspernatur soluta iure iste aperiam similique. Voluptate eos totam in rem aperiam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, porro veniam accusamus reprehenderit dolore, labore error ipsa harum, aspernatur soluta iure iste aperiam similique. Voluptate eos totam in rem aperiam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, porro veniam accusamus reprehenderit dolore, labore error ipsa harum, aspernatur soluta iure iste aperiam similique. Voluptate eos totam in rem aperiam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio voluptatibus aliquam. Autem dolor sequi, fugit, totam molestias illo ullam unde quod suscipit praesentium, vel necessitatibus? Non, dolorum! Totam soluta, repellendus ducimus ullam cupiditate labore assumenda fugit alias at ipsam eius accusamus nemo! Pariatur officiis odio, laudantium harum, vero dignissimos quisquam accusamus saepe nulla dolores eveniet facere perferendis tempora ipsum minima molestias temporibus nam molestiae! Iusto molestias debitis alias aspernatur. Modi ducimus neque temporibus, odit, nihil praesentium fuga perferendis eligendi hic velit harum amet deserunt autem, quam recusandae molestias voluptatem sed fugiat mollitia nam beatae magni reprehenderit quos. Amet, vel.
      </div>
      <button onClick={() => { divRef.current!.scrollTop = 0; }}>Take me to top</button>
    </div>
  );
}

function DeleteButton({ id, onDelete }: { id: string; onDelete: (id: string) => void }) {
  return (
    <div>
      <span
        style={{ background: "orange", cursor: "pointer", border: "2px solid red" }}
        onClick={() => onDelete(id)}
      >
        Delete
      </span>
    </div>
  );
}

function Todo({ title, id, onDelete }: TodoType & { onDelete: (id: string) => void }) {
  return (
    <div style={{ padding: 20, margin: 20, border: "2px solid black" }}>
      <div>{title}</div>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

function App() {
  const [secondsPassed, setSecondsPassed] = useState(0);
  const interval = useRef<number>(0);

  function startClock() {
    interval.current = setInterval(() => {
      setSecondsPassed(s => s + 1);
    }, 1000);
  }

  function stopClock() {
    clearInterval(interval.current);
    interval.current = 0;
  }

  const { todos, setTodos } = useTodos();

  function handleDelete(id: string) {
    setTodos(todos => todos.filter(x => x.id !== id));
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <div style={{ fontSize: 100 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={startClock}>Start clock</button>
            <button onClick={stopClock}>Stop clock</button>
          </div>
          <div>{secondsPassed} s</div>
        </div>
      </div>
      <br />
      <div>
        <Essay />
      </div>
      <br />
      <div>
        {todos.map(t => <Todo key={t.id} title={t.title} id={t.id} onDelete={handleDelete} />)}
      </div>
    </div>
  );
}

export default App;
