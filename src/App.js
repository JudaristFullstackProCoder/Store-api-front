import Dashboard from "./components/Dashboard";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import ProductsPage from "./pages/Products";
import AnalyticsPage from "./pages/Analytics";
import MessagesPage from "./pages/Messages";
import SettingsPage from "./pages/Settings";
import SignInPage from "./pages/SignIn";
import UserProfilePage from "./pages/Profile";
import { defaultUserContextState, userContext } from "./context/userContext";
import {  useState } from "react";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";

function App() {
  const [user, setUser] = useState(defaultUserContextState);
    return <MantineProvider>
    <NotificationsProvider>
    <div className="App">
    <userContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard AppTitle="Dashboard" pageElement={<DashboardPage />} />} />
          <Route path="/Prods" element={<Dashboard AppTitle="Products" pageElement={<ProductsPage />} />} />
          <Route path="/Analytics" element={<Dashboard AppTitle="Analytics" pageElement={<AnalyticsPage />} />} />
          <Route path="/Messages" element={<Dashboard AppTitle="Messages" pageElement={<MessagesPage />} />} />
          <Route path="/Settings" element={<Dashboard AppTitle="Settings" pageElement={<SettingsPage />} />} />
          <Route path="/Profile" element={<Dashboard AppTitle="Settings" pageElement={<UserProfilePage />} />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  </div>
  </NotificationsProvider>
  </MantineProvider>
}

export default App;
