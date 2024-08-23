import { useState } from "react";
import isURL from "validator/lib/isURL";
import QRCodeScanner from "./components/QRCodeScanner";

import "./App.css";

function App() {
  const [isScanningPaused, setIsScanningPaused] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleScan = (data: string) => {
    setScannedData(data);
  };

  return (
    <div className="container">
      <div className="header" id="header">
        Simple QR Scanner
      </div>
      <div className="content">
        {scannedData ? (
          <div style={{ margin: "10%", overflowWrap: "break-word" }}>
            <p>
              <b>Result</b>:
            </p>
            {isURL(JSON.parse(scannedData)?.rawValue) ? (
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
      <div className="footer">
        <span>
          Built by <a href="https://www.jsauceda.info">Jorge Sauceda</a> 2024
        </span>
      </div>
    </div>
  );
}

export default App;
