import { Note } from "@/types/note";

type Props ={
  note: Note;
  onDelete: (id: number) => void;
}

export function NoteCard({note, onDelete}: Props){
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p className="">{note.content}</p>
      <div className="mt-2 text-sm ">
        <span>Category: {note.category}</span>
        <span className="mx-2">|</span>
        <span>Priority: {note.priority}</span>
        <span className="mx-2">|</span>
        <span>Status: {note.status}</span>
      </div>
      <button
        className="mt-4 px-3 py-1 bg-red-800 text-white rounded-md hover:bg-red-600"
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
    </div>
  );
}