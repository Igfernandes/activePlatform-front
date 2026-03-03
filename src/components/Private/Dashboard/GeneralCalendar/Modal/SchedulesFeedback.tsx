import { ScheduleShape } from "@type/Schedule";

type Props = {
  schedules?: Array<ScheduleShape>;
  date: string;
};

export function SchedulesFeedback({ schedules, date }: Props) {
  return (
    <>
      {schedules
        ?.filter((schedule) => schedule.date === date)
        .map((schedule) => (
          <li key={schedule.id} className="bg-white px-2 rounded-md mb-2">
            <span>{`${schedule.title}`}</span>
          </li>
        ))}
    </>
  );
}
