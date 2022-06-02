function SidebarItem({ sideItem }) {
  return (
    <div className="item-container">
      <div className="side-image">{sideItem.logo}</div>
      <div className="side-tag">{sideItem.underLogoText}</div>
    </div>
  );
}

export default SidebarItem;
