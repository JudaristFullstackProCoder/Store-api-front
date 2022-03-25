import Dashboard from "./components/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardPage from "./components/pages/Dashboard";
import ProductsPage from "./components/pages/Products";
import AnalyticsPage from "./components/pages/Analytics";
import MessagesPage from "./components/pages/Messages";
import SettingsPage from "./components/pages/Settings";
import { AppTitleContext } from "./components/context/AppTitleContext";
import LoginPage from "./components/pages/LogIn";
import SignInPage from "./components/pages/SignIn";

function App() {
    return <div className="App">
    <AppTitleContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard AppTitle="Dashboard" pageElement={<DashboardPage />} />} />
          <Route path="/Prods" element={<Dashboard AppTitle="Products" pageElement={<ProductsPage />} />} />
          <Route path="/Analytics" element={<Dashboard AppTitle="Analytics" pageElement={<AnalyticsPage />} />} />
          <Route path="/Messages" element={<Dashboard AppTitle="Messages" pageElement={<MessagesPage />} />} />
          <Route path="/Settings" element={<Dashboard AppTitle="Settings" pageElement={<SettingsPage />} />} />
          <Route path="/Login" element={LoginPage} />
          <Route path="/SignIn" element={SignInPage} />
        </Routes>
      </BrowserRouter>
    </AppTitleContext.Provider>
    </div>
}

export default App;
