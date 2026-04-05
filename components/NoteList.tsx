import { Note } from "@/types/note";
import { NoteCard } from "@/components/NoteCard";

type Props = {
    notes: Note[];
}

export function NoteList({ notes }: Props){
    return (
        <div className="flex flex-col gap-4">
            {notes.map((note) => (
                <NoteCard note={note} key={note.id}>
                    
                </NoteCard>
            ))}
        </div>
    )
};