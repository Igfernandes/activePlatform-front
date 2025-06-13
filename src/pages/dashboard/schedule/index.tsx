import { ScheduleCalendar } from "@components/Private/Schedule/Calendar";
import { SchedulingModal } from "@components/Private/Schedule/Modals/Scheduling";
import { OptionsBar } from "@components/Private/Schedule/OptionsBar";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import useGetSchedules from "@services/Schedule/Get/useGet";

export default function Schedule() {
  const { data: schedules } = useGetSchedules();
 

  return (
    <DashboardContainer>
      <OptionsBar />
      <div className="bg-white p-6 rounded-xl relative z-0">
        <ScheduleCalendar schedules={schedules ?? []} />
      </div>
      <SchedulingModal
        schedules={schedules}
      />
    </DashboardContainer>
  );
}
