import { useEffect, RefObject } from "react";

// Autorise que le ref puisse être null (ce qui est le cas dans React au montage)
export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
