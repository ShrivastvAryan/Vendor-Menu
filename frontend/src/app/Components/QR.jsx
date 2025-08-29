'use client';
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ _id }) => {
  const [isLarge, setIsLarge] = useState(false);
  const qrRef = useRef(null);

  const pageUrl = `https://digimenu-smoky.vercel.app//Menu/${_id}`;


  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas"); 
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `qr-code-${_id}.png`;
    link.click();
  };

  return (
    <div
      onClick={() => setIsLarge(!isLarge)}
      className={`
        fixed bottom-6 right-6 z-50 
        cursor-pointer transition-all duration-600 ease-in-out
        flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl
        ${isLarge ? "w-auto h-auto p-4" : "w-12 h-12"}
      `}
    >
   
      <div ref={qrRef}>
        <QRCodeCanvas
          value={pageUrl}
          size={isLarge ? 250 : 50}
          marginSize={2}
          className="bg-[#FFDE21] rounded-lg"
        />
      </div>

     
      {isLarge && (
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            handleDownload();
          }}
          className="mt-4 px-4 py-2 flex items-center justify-center bg-[#FFDE21] text-black font-semibold rounded-lg shadow hover:brightness-110"
        >
          Download
        </button>
      )}
    </div>
  );
};

export default QRCodeGenerator;
