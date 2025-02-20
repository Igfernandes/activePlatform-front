import { Bell } from "@assets/Icons/black/Bell";

export function Header() {
  return (
    <header className="w-full border-b-2 border-zinc-200 p-6">
      <div className="flex justify-between">
        <div>
          <h3>
            <strong>{"Olá, Carlos Batista!"}</strong>
          </h3>
        </div>
        <div>
          <div  className="relative bg-tertiary rounded-sm">
            <span className="bg-red px-1 rounded-xl text-[10px] text-white absolute right-[-4px] top-[-10px]">{0}</span>
            <Bell className="w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
