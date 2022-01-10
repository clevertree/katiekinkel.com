import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

/** CSS Styles **/
import "./pages/site/site.css"

/** Pages **/
import IndexPage from "./pages/index.md";
import HeaderPage from "./pages/site/header.md";
import NavPage from "./pages/site/nav.md";
import MarkdownContent from "./components/markdown/PageMarkdown";


function App() {
    return (
        <BrowserRouter>
            <MarkdownContent file={HeaderPage} options={{wrapper: 'header', forceWrapper: true}}/>
            <MarkdownContent file={NavPage} options={{wrapper: 'nav', forceWrapper: true}}/>
            <Routes>
                <Route path="/" element={<MarkdownContent file={IndexPage}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

