import SidebarData from "../../data/SidebarData";
import SidebarItem from "./SidebarItem";

function SidebarList() {
  return (
    <>
      <div className="sidebar-wrapper">
        {SidebarData.map((item) => (
          <SidebarItem key={item.id} sideItem={item} />
        ))}
      </div>
    </>
  );
}

export default SidebarList;
