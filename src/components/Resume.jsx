import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Resume() {
  return (
    <section id="resume" >

      <h2 className="section-title resume"><a href="/assets/Resume-Sean Madigan.pdf" download="Resume - Sean Madigan">Download my Resume</a></h2>

      <embed
        src="/assets/Resume-Sean Madigan.pdf"
        type="application/pdf"
        width="80%"
        height="1000px"
      />

    </section>
  )
}

      // <div style={{ height: '600px' }}>
      //   <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
      //     <Viewer fileUrl="/assets/documents/Resume - Sean Madigan.pdf" />
      //   </Worker>
      // </div>

// embedding a pdf of my resume in this section would be really cool, check out node embedpdf module or other technology