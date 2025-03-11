import Preview from "./componets/Preview"
import "./App.css"
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
