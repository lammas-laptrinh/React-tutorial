import AppHeader from "./AppHeader";
import PageContent from "./PageContent";
import Footer from "./Footer";
import AppSidebar from "./AppSidebar";
import "./session_2.css";

function dashboard() {
  return (
    <div className="App">
      <AppHeader />
      <AppSidebar />
      <PageContent />
      <Footer />
    </div>
  );
}

export default dashboard;
