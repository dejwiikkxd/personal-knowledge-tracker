type Note = {
  title: string;
  category: string[];
  content: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'done';
  createdAt: string;
  tags: string[];
  id: number;
};