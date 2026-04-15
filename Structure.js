// Shared Structure Definition
export interface ProjectFile {
  id: string;
  name: string;   // e.g., 'index.html', 'styles.css'
  content: string;
  type: 'html' | 'js' | 'css' | 'tsx';
  lastModified: number;
}
