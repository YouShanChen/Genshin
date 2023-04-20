import Header from "../components/Header"
import Footer from "../components/Footer"

function Home() {
    const title = "Home";
  
    return (
      <div className="mainLayout">

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