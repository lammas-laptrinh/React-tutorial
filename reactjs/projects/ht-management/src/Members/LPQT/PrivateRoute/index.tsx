import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
    const auth = true;
    if (!auth) {
        return <Navigate to="/'register" state={{ from: location }} replace />;
    }
    return children;
}
