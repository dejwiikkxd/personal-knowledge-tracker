import { Note } from "@/types/note";

export const notes: Note[] = [
  {
    title: "Learn TypeScript",
    category: 'work',
    content: "Na základě mé touhy naučit se programovat, a možnosti vývoje formuláře v práci, chci opět zabřednout do programování. Vybral jsem si TypeScript a React.",
    priority: "high",
    status: "todo",
    createdAt: "5.4.2026",
    tags: ['typescript', 'react', 'programming'],
    id: 1,
  },
  {
    title: "Zkouška Daně a Správa daní",
    category: 'school',
    content: "Naučit se na zkoušku z daní a správy daní, která se koná 20.4.2026. Zaměřit se na daň z příjmu, daň z přidané hodnoty a daň z nemovitosti.",
    priority: "high",
    status: "todo",
    createdAt: "2026-04-05",
    tags: ['law', 'taxes', 'exam'],
    id: 2,
  },
];

