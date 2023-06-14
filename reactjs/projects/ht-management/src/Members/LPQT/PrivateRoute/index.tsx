import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
    const isLogin = localStorage.getItem('currentLogin');
    if (!isLogin) {
        return <Navigate to="/login" />;
    }
    return children;
}
