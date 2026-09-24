import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  number: number | string;
};

export default function AsientoButaca({ number, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.32 26.1"
      {...props}
    >
      <rect
        x={1}
        y={1}
        width={17.32}
        height={24.1}
        rx={5.03}
        ry={5.03}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />

      <text
        x="9.66"
        y="13.05"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize="10"
      >
        {number}
      </text>
    </svg>
  );
}