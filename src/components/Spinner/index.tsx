import { useRef, useEffect } from "react";
import { Spinner as SpinnerJS } from "spin.js";
import Span from "./styles";

const Spinner = ({ color }: { color?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const spinConfig = {
      width: 1,
      radius: 5,
      length: 5,
      color: color ?? "blue",
    };

    const spinner = new SpinnerJS(spinConfig);
    if (ref.current) {
      spinner.spin(ref.current);
    }
  }, [color]);

  return <Span data-testid="spinner" ref={ref} />;
};

export default Spinner;
