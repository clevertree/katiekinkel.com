import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

/** CSS Styles **/
import "github-markdown-css/github-markdown-light.css"
import "./pages/site/site.css"

/** Pages **/
import IndexPage from "./pages/index.md";
import HeaderPage from "./pages/site/header.md";
import NavPage from "./pages/site/nav.md";
import MarkdownContent from "./components/markdown/PageMarkdown";


function App() {
    return (
        <BrowserRouter>
            <MarkdownContent file={HeaderPage} options={{wrapper: 'header'}}/>
            <MarkdownContent file={NavPage} options={{wrapper: 'nav'}}/>
            <Routes>
                <Route path="/" element={<MarkdownContent file={IndexPage}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

