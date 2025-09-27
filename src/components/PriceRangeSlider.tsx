import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  FC,
  CSSProperties,
} from "react";

type PriceRange = {
  min: number;
  max: number;
};

type PriceRangeSliderProps = {
  min: number;
  max: number;
  trackColor?: string;
  onChange: (range: PriceRange) => void;
  rangeColor?: string;
  valueStyle?: CSSProperties;
  width?: string;
  currencyText?: string;
};

const valueCSS: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
  paddingTop: "10px",
};

const PriceRangeSlider: FC<PriceRangeSliderProps> = ({
  min,
  max,
  trackColor = "#cecece",
  onChange,
  rangeColor = "#0C6599",
  valueStyle = valueCSS,
  width = "100%",
  currencyText = "₦",
}) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);

  const minValRef = useRef<number>(min);
  const maxValRef = useRef<number>(max);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number): number => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    if (minVal !== minValRef.current || maxVal !== maxValRef.current) {
      onChange({ min: minVal, max: maxVal });
      minValRef.current = minVal;
      maxValRef.current = maxVal;
    }
  }, [minVal, maxVal, onChange]);

  return (
    <div className="w-full flex items-center justify-center flex-col space-y-14">
      {/* Display Price Value */}
      <div
        className="w-[300px] px-4 flex items-center justify-between gap-x-5"
        style={valueStyle}
      >
        <p className="text-xl text-neutral-100 font-semibold">
          {currencyText} {minVal} -
        </p>
        <p className="text-xl text-neutral-100 font-semibold">
          {currencyText} {maxVal}
        </p>
      </div>

      {/* Style the price range slider */}
      <div className="multi-slide-input-container" style={{ width }}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="thumb thumb-left"
          style={{
            width,
            zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className="thumb thumb-right"
          style={{
            width,
            zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
          }}
        />

        <div className="slider">
          <div
            style={{ backgroundColor: trackColor }}
            className="track-slider"
          />
          <div
            ref={range}
            style={{ backgroundColor: rangeColor }}
            className="range-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
