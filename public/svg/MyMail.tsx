import { SVGProps } from "react"

export default function MyMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 28.7l213.334 192.001 213.333-192v312.633H.001L0 28.7zM394.776 0L213.334 163.286 31.89 0h362.886z"
        transform="translate(42.687 85.34)"
        fill="currentColor"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  )
}
