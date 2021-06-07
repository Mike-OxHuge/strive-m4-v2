import { Badge } from "react-bootstrap";

const MyBadge = ({ text, color, style }) => {
  return (
    <div style={style}>
      <Badge variant={color}>{text}</Badge>
    </div>
  );
};

export default MyBadge;
