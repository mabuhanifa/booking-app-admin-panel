import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./widget.scss";
const Widget = ({ type }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">users</span>
        <span className="counter">25454</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
      </div>
    </div>
  );
};

export default Widget;
