function SidebarItem({ sideItem }) {
  return (
    <div className="sidebar-item">
      <div className="side-image">{sideItem.logo}</div>
      <div className="side-tag">{sideItem.underLogoText}</div>
    </div>
  );
}

export default SidebarItem;
