import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Form() {
  const [loader, setLoader] = useState(false);

  const downloadPdf = async () => {
    const capture = document.querySelector('.form');
    setLoader(true);

    try {
      const canvas = await html2canvas(capture);
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('form.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <div className='form'>
        <h2>love</h2>
        <h5>nckdnck</h5>
        <p>mcfffffffffffffffffff <br /> hdddddddddddddddd</p>
        <br />
        <p>mvkfk</p>
        <h5>nckdnck</h5>
        <p>mcfffffffffffffffffff <br /> hdddddddddddddddd</p>
        <br />
        <p>mvkfk</p>
        <h5>nckdnck</h5>
        <p>mcfffffffffffffffffff <br /> hdddddddddddddddd</p>
        <br />
        <p>mvkfk</p>
        <h5>nckdnck</h5>
        <p>mcfffffffffffffffffff <br /> hdddddddddddddddd</p>
        <br />
        <p>mvkfk</p>
        <button onClick={downloadPdf} disabled={loader}>
          {loader ? 'Generating...' : 'SUBMIT'}
        </button>
      </div>
    </div>
  );
}

export default Form;
