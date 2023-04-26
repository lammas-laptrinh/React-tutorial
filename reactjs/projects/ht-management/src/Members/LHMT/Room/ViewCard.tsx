import { useState } from "react";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface ViewCardProps {
  onViewModeChange: (viewMode: string) => void;
}

enum ViewMode {
  Grid = "grid",
  Line = "line",
}

const ViewCard = ({ onViewModeChange }: ViewCardProps) => {
  const [, setViewMode] = useState(ViewMode.Grid);

  const handleViewModeChange = (mode: string) => {
    setViewMode(mode as ViewMode);
    onViewModeChange(mode);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => handleViewModeChange(ViewMode.Grid)}
        icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
        style={{ backgroundColor: "gray" }}
      >
        Grid
      </Button>
      <Button
        type="primary"
        onClick={() => handleViewModeChange(ViewMode.Line)}
        icon={<UnorderedListOutlined style={{ fontSize: "1.5rem" }} />}
        style={{ backgroundColor: "gray" }}
      >
        Line
      </Button>
    </>
  );
};

export default ViewCard;
