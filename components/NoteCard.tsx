import { Note } from "@/types/note";

type Props ={
  note: Note;
}

export function NoteCard(props: Props){
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h2 className="text-xl font-semibold">{props.note.title}</h2>
      <p className="">{props.note.content}</p>
      <div className="mt-2 text-sm ">
        <span>Category: {props.note.category}</span>
        <span className="mx-2">|</span>
        <span>Priority: {props.note.priority}</span>
        <span className="mx-2">|</span>
        <span>Status: {props.note.status}</span>
      </div>
    </div>
  );
}