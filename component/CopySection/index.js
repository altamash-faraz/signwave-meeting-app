import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";
import { useState, useEffect } from "react";

import styles from "@/component/CopySection/index.module.css";

const CopySection = (props) => {
  const { roomId } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.copyContainer}>
      <div className={styles.header}>Meeting ID:</div>
      <div className={styles.content}>
        <span className={styles.roomId}>{roomId}</span>
        <CopyToClipboard text={roomId} onCopy={handleCopy}>
          <button className={styles.copyButton}>
            <Copy size={16} />
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;