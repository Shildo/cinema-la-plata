import { useRef, useState } from "react";
import styles from "./Characteristics.module.css";

export default function Characteristics({ text }: { text: string }) {
  return (
    <div
      className={styles.characteristics}
      aria-label="Características del complejo"
    >
      <p className={styles.characteristicsText} tabIndex={0}>
        {text}
      </p>
    </div>
  );
}