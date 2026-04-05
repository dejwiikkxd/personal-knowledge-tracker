export type Note = {
  title: string;
  category: 'work' | 'school' | 'personal';
  content: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'done';
  createdAt: string;
  tags: string[];
  id: number;
};