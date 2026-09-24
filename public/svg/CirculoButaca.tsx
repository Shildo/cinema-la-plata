import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  label: string;
};

export default function CirculoButaca({ label, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.65 36.65"
      {...props}
    >
      <path
        d="M0 18.32c0 10.1 8.22 18.32 18.32 18.32s18.32-8.22 18.32-18.32C36.65 8.22 28.43 0 18.32 0 8.22 0 0 8.22 0 18.32zm33.24 0c0 8.22-6.69 14.91-14.91 14.91S3.41 26.55 3.41 18.32 10.1 3.41 18.32 3.41c8.22 0 14.91 6.69 14.91 14.91z"
        fill="currentColor"
      />

      <text
        x="18.325"
        y="18.325"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize="18"
      >
        {label}
      </text>
    </svg>
  );
}