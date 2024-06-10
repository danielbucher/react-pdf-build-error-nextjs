"use client";

import { Document, Page, pdfjs } from "react-pdf";
import styles from "./styles.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export function TestComponent() {
  const Loading = <div>Loading...</div>;

  return (
    <Document
      file={"/test.pdf"}
      onLoadSuccess={console.log}
      loading={Loading}
      className={styles.document}
    >
      <Page key={`page_1`} pageNumber={1} width={640} className={styles.page} />
    </Document>
  );
}
