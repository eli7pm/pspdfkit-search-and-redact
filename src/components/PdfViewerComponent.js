import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const PSPDFKitRef = useRef(null)
  const {searchKeyWord} = props

  useEffect(() => {
    const container = containerRef.current; // This `useRef` instance will render the PDF.

    let PSPDFKit, instance;

    (async function () {
      PSPDFKit = await import("pspdfkit")

      PSPDFKit.unload(container) // Ensure that there's only one PSPDFKit instance.

      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: props.document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`
      });
      instanceRef.current = instance
      PSPDFKitRef.current = PSPDFKit

    })();

    return () => PSPDFKit && PSPDFKit.unload(container)
  }, []);

  useEffect(() => {
    (async function(){
      const instance = instanceRef.current
      searchKeyWord.length && (await instance?.createRedactionsBySearch(searchKeyWord))
    })();
  }, [searchKeyWord]);

  // This div element will render the document to the DOM.
  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
}
