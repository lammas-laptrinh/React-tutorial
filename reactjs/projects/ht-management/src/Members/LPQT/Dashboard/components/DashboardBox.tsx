import DayRevenueBox from "./DayRevenueBox";
import OverViewBox from "./OverViewBox";

export default function DashboardBox() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <DayRevenueBox />
            </div>
            <div style={{ flex: 1.5, marginLeft:20 }}>
                <OverViewBox />
            </div>
        </div>
    );
}
