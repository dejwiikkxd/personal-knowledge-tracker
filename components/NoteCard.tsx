import { Note } from "@/types/note";

type Props ={
  note: Note;
}

export function NoteCard({note}: Props){
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
    </div>
  );
}