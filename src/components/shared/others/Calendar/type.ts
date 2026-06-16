export type CalendarEventShape = {
  title: string;
  start: Date;
  alternative?: string;
  end: Date;
  allDay: boolean;
  resource: string;
  color?: string;
};
