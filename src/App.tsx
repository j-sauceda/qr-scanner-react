import { useState } from "react";
import QRCodeScanner from "./components/QRCodeScanner";

import "./App.css";

function App() {
  const [isScanningPaused, setIsScanningPaused] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleScan = (data: string) => {
    setScannedData(data);
    console.log(data);
  };

  function isValidUrl(url: string): boolean {
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})\/([\w.-]*)*\/?$/;
    return urlRegex.test(url);
  }

  return (
    <div className="container">
      <div className="header">Simple QR Scanner</div>
      <div className="content">
        {scannedData ? (
          <div style={{ margin: "10%", overflowWrap: "break-word" }}>
            <p>
              <b>Result</b>:
            </p>
            {isValidUrl(JSON.parse(scannedData)?.rawValue) ? (
              <a
                href={JSON.parse(scannedData)?.rawValue}
                target="_blank"
                rel="noreferrer"
              >
                {JSON.parse(scannedData)?.rawValue}
              </a>
            ) : (
              JSON.parse(scannedData)?.rawValue
            )}
          </div>
        ) : (
          <QRCodeScanner
            isPaused={isScanningPaused}
            onScan={handleScan}
            setIsPaused={setIsScanningPaused}
          />
        )}
        {isScanningPaused && (
          <button
            onClick={() => {
              setScannedData(null);
              setIsScanningPaused(false);
            }}
          >
            Keep Scanning
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
