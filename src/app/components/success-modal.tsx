// SuccessModal.tsx
import React from "react";
import { Button } from "@/src/ui";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  show,
  onClose,
  message = "Submission successful!",
}) => {
  const router = useRouter()
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      className="px-4 lg:px-0"
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        //   width: "500px",
        }}
        className="lg:w-[500px] w-full"
      >
        <div className="flex justify-center">
          <SuccessIcon />
        </div>
        <h2 className="text-xl font-semibold text-[#202121] mt-5">{message}</h2>
        <div className="flex justify-between mt-5">
          <Button
            onClick={() => {
              onClose();
              router.refresh()
            }}
            color="primary"
            variant="outlined"
            label="Close"
          />
          
          <Button
            onClick={() => {
            onClose();
            router.refresh()
            }}
            color="primary"
            variant="primary"
            label="Register Again"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

const SuccessIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="160"
      viewBox="0 0 240 160"
    >
      <g fill="none" fill-rule="evenodd">
        <g fill="#FBEC5B" transform="translate(22)">
          <circle cx="62" cy="62" r="62" opacity=".04" />
          <circle cx="172" cy="64" r="24" opacity=".06" />
          <circle cx="90" cy="148" r="12" opacity=".08" />
        </g>
        <path
          fill="#FBEC5B"
          d="M162.074 31.772l-.71.709C150.299 22.839 135.832 17 120 17c-34.794 0-63 28.206-63 63s28.206 63 63 63 63-28.206 63-63c0-4.356-.442-8.609-1.284-12.716l.845-.845A64.248 64.248 0 0 1 184 80c0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 16.107 0 30.824 5.95 42.074 15.772z"
        />
        <path
          fill="#212732"
          fill-rule="nonzero"
          d="M120.05 99.117L95.397 74.24 87 82.652 120.05 116 191 44.412 182.663 36z"
          opacity=".1"
        />
        <path
          fill="#06CC75"
          fill-rule="nonzero"
          d="M120.05 95.117L95.397 70.24 87 78.652 120.05 112 191 40.412 182.663 32z"
        />
      </g>
    </svg>
  );
};
