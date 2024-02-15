import PdfViewerComponent from './components/PdfViewerComponent';
import SearchAndRedactSidebar from './components/SearchAndRedactSidebar'
import {useState} from "react";

function App() {
  const [keyWord,setKeyWord] = useState("")
  return (
    <div className="App">
      <div className="PDF-viewer" style={{display: "flex"}}>
        <SearchAndRedactSidebar setKeyWord={setKeyWord}/>
        <PdfViewerComponent
          document={"dashboard.pdf"} searchKeyWord={keyWord}
        />
      </div>
    </div>
  );
}

export default App;
