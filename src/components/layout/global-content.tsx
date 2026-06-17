import GlobalNav from "./global-nav";

export default function GlobalContent() {
  return (
    <div className="global-content grid items-start overflow-visible xl:grid-cols-[170px_minmax(0,1fr)_360px] bg-white">
      <GlobalNav />
    </div>
  );
}
