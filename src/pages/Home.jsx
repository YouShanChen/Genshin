import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();  
  const title = "Home";
  
    return (
      <div className="mainLayout">
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
        <Header
          className="layoutHeader"
          title={title}
        />
        <div className="layoutContent container">
 
        </div>
        <Footer className="layoutFooter" />
      </div>
    );
  }
  
  export default Home;