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
      let pdf = new jsPDF('l', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width / 10;
      const imgHeight = canvas.height / 10;
      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;
      pdf.addImage(imgData, 'SVG', x, y, imgWidth, imgHeight);
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
