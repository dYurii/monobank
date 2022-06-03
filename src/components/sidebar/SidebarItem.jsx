import { Link } from "react-router-dom";
function SidebarItem({ sideItem }) {
  return (
    
      <Link to={{ pathname: `${sideItem.link}` }} className="sidebar-item">
        <div className="side-image">{sideItem.logo}</div>
        <div className="side-tag">{sideItem.underLogoText}</div>
      </Link>
    
  );
}

export default SidebarItem;
