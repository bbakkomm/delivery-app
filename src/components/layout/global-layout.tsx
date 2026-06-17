import { Outlet } from "react-router";

export default function GlobalLayout() {
  return (
    <div className="px-[18px] py-[28px] min-h-[100vh]">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
