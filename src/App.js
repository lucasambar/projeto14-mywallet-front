import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constants/globalstyle";
import PageLogin from "./page login/pagelogin";

function App() {
  return (
    <>
      <GlobalStyle/>
    	<BrowserRouter>
        <Routes>
          <Route path="/"  element={<PageLogin/>}/>
        </Routes>
		  </BrowserRouter>
    </>
  );
}

export default App;
