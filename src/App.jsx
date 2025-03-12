import InputItem from './components/Input.jsx'
import Information from "./components/information"
import Preview from "./components/preview"
import './App.css';
import { createContext, useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const InfomationContext = createContext([
    { name : "" , price : 0 }, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : "",
    price : 0
  });
  const printDocument = () => {
    const target = document.getElementById('pdf');
    if (target === null) return;
    html2canvas(target, { scale: 2.5 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/svg', 1.0);
      let pdf = new jsPDF();
      pdf.addImage(imgData, 'SVG', 5, 10, canvas.width / 18, canvas.height / 18);
      pdf.save(`preview.pdf`);
    });
  };
  return (
    <div className='information-preview'>
      <div className='information'>
        <Information />
      </div>
      <div className='preview'>
        <InfomationContext.Provider value={[value, setValue]}>
        <Preview />
        <div className='printbutton'>
        <button type = 'button' onClick={printDocument}>
          PDFダウンロード
        </button>
        </div>
        </InfomationContext.Provider>
      </div>
    </div>
  );
}

export default App
