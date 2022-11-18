import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constants/globalstyle";
import PageHome from "./page home/pageHome";
import PageLogin from "./page login/pagelogin";
import PageSignUp from "./page sign-up/pageSignUp";

function App() {
  return (
    <>
      <GlobalStyle/>
    	<BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin/>}/>
          <Route path="/sign-up" element={<PageSignUp/>}/>
          <Route path="/home" element={<PageHome/>}/>
        </Routes>
		  </BrowserRouter>
    </>
  );
}

export default App;
