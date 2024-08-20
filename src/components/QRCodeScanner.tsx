import { FC } from "react";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

import "./Scanner.css";

interface QRCodeScannerProps {
  isPaused: boolean;
  onScan: (data: string) => void;
  setIsPaused: (isPaused: boolean) => void;
}

const QRCodeScanner: FC<QRCodeScannerProps> = ({
  isPaused,
  onScan,
  setIsPaused,
}) => {
  const handleScan = (data: IDetectedBarcode[]) => {
    if (!!data) {
      let result = "";
      data.forEach((datum) => {
        result = result + JSON.stringify(datum);
      });
      onScan(result);
    }
    setIsPaused(true);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  return (
    <Scanner
      allowMultiple={false}
      classNames={{ container: "scanner" }}
      components={{ audio: false, finder: false, zoom: true }}
      constraints={{ aspectRatio: 1.0, facingMode: "environment" }}
      onError={handleError}
      onScan={(res) => handleScan(res)}
      paused={isPaused}
      scanDelay={500}
    />
  );
};

export default QRCodeScanner;
