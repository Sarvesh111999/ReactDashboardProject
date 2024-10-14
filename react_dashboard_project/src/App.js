import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Slider, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/Dashboard.jsx";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/Team.jsx";
import Invoices from "./scenes/Invoices.jsx";
import Contacts from "./scenes/Contacts.jsx";
import Form from "./scenes/Form.jsx";
import Calendar from "./scenes/Calendar.jsx";
import FAQ from "./scenes/FAQ.jsx";
import PieChart from "./components/PieChart.jsx";
import BarChart from "./components/BarChart.jsx";
import LineChart from "./components/LineChart.jsx";
import GeographyChart from "./components/GeographyChart.jsx";


function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path = "/" element = {<Dashboard/>}/>
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/calendar" element={<Calendar/>} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/line" element={<LineChart />} />
            <Route path="/geography" element={<GeographyChart />} />
          </Routes>
        </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
