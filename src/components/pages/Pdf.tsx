import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import arquivo from "../../assets/images/testeGrande.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Pdf = () => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState<number>(1);
  const { course_id, subject_id, exam_id } = useParams();

  console.log(course_id);
  console.log(subject_id);
  console.log(exam_id);

  function onDocumentLoadSuccess(numPages: number) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function changeScale(offset: number) {
    setScale((prevScale) => prevScale + offset);
  }

  function previousScale() {
    changeScale(-0.2);
  }

  function nextScale() {
    changeScale(0.2);
  }

  return (
    <div>
      <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
        Previous
      </button>
      <button
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next
      </button>
      <div style={{ height: "800px", width: "600px", overflow: "auto" }}>
        <Document
          file={arquivo}
          onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf.numPages)}
          renderMode="canvas"
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <button type="button" onClick={previousScale}>
        zoom out
      </button>
      <button type="button" onClick={nextScale}>
        zoom in
      </button>
    </div>
  );
};
