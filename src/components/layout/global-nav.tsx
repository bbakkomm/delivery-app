import {
  CalendarDays,
  ClipboardList,
  FileText,
  History,
  LayoutDashboard,
  Package,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Package, label: "Delivery", active: true },
  { icon: CalendarDays, label: "Schedule" },
  { icon: ClipboardList, label: "Manifest" },
  { icon: History, label: "History" },
  { icon: FileText, label: "Report" },
];

export default function GlobalNav() {
  return (
    <nav className="grid gap-1">
      <div className="mobile-nav-brand flex items-center gap-3 font-black text-text">
        <span className="grid size-8 place-items-center rounded-[8px] bg-teal text-sm text-white">OQ</span>
        OMNIQ OPS
      </div>

      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button aria-label={item.label} className="flex min-h-10 items-center gap-3 rounded-[7px] px-3 text-left text-sm font-extrabold" key={item.label} type="button">
            <Icon aria-hidden="true" className="size-4 shrink-0" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
