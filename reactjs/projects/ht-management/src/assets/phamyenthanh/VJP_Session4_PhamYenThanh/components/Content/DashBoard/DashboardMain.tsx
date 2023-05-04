import Dashboard from "./Dashboard"
import DashboardCreat from "./DashboardCreat"
import '../../../css/DashboardMain.css'
const DashboardMain = () => {
  return (
    <div>
      <div className="DashboardMain-Dashboard">
        <Dashboard />
      </div>
      <div className="DashboardMain-DashboardCreat">
        <DashboardCreat />
      </div>
    </div>
  )
}

export default DashboardMain