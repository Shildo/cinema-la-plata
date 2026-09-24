import type { SVGProps } from "react";

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 503.9 13"
      {...props}
    >
      <path
        d="M494.43 12H9.47c-.64 0-1.23-.25-1.57-.67L1.3 3.26C.5 2.28 1.39 1 2.87 1h498.16c1.48 0 2.37 1.28 1.57 2.26l-6.6 8.07c-.34.42-.94.67-1.57.67z"
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth="2px"
        data-name="Capa 2"
      />
    </svg>
  )
}

export default SvgComponent
