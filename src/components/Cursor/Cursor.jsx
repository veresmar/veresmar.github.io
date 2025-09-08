import './Cursor.css';
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    const checkPointer = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const clickable = ["a", "button"].includes(tag) || e.target.onclick;
      setIsPointer(clickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkPointer);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isPointer ? "pointer" : ""}`}
      style={{ top: y, left: x }}
    />
  );
}
