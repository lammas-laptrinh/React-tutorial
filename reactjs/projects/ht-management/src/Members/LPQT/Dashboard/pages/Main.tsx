import DashboardBox from "../components/DashboardBox";
import CustomerAccount from "../components/CustomerAccount";
import { Input } from 'antd';

export default function Main() {
    const { Search } = Input;

    return (
        <div style={{ backgroundColor: '#ede2e1', minHeight: '100vh', overflow: 'hidden' }}>
            <div style={{ margin: '0 auto', paddingTop: '20px', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold', marginRight: '10px' }}>DASHBOARD</div>
                    <Search style={{ maxWidth: '300px' }} placeholder="input search text" enterButton />
                </div>
                <div style={{ margin: '20px' }}>
                    <DashboardBox />
                </div>
                <div>
                    <CustomerAccount />
                </div>
            </div>
        </div>
    );


};


