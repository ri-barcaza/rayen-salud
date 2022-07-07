import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./assets/css/personalized.scss";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header>
        <p>Desafiogram</p>
      </Header>

      <Router>
        <Content>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
