import { Note } from "@/types/note";
import { NoteCard } from "@/components/NoteCard";

type Props = {
    notes: Note[];
    onDelete: (id: number) => void;

}

export function NoteList({ notes, onDelete }: Props){
    return (
        <div className="flex flex-col gap-4">
            {notes.map((note) => (
                <NoteCard note={note} key={note.id} onDelete={onDelete}>
                    
                </NoteCard>
            ))}
        </div>
    )
};