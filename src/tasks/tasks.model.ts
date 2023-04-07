export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

// creating class of constants
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
