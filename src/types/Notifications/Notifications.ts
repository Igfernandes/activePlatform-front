export type NotificationShape = {
  id: number;
  title: string;
  message: number;
  action: string;
  scope: string;
  key: string | number;
  author_id: number;
  author: {
    id: number;
    name: string;
  };
  created_at: string;
};
