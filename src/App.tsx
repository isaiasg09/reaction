import { Editor } from "./components/Editor";

function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800 min-h-screen text-zinc-50 p-8">
      <div className="bg-zinc-800 xl:w-[1100px] mx-auto rounded-xl h-[860px] shadow-md border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] w-[80vw]">
        <aside className="bg-zinc-900 border-r-zinc-700 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400 transition" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400 transition" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400 transition" />
          </div>
        </aside>
        <main className="p-4 overflow-auto">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
