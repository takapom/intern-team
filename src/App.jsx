import "./App.css"
import Preview from "./components/Preview"
import Information from "./components/information"

function App() {
  return (
    <>
    <div className="body">
      <div className="information">
        <Information />
      </div>
      <div className="preview">
        <Preview />
      </div>
    </div>
    </>
  )
}

export default App
