import * as React from "react";

const paths = {
  megaphone:
    "M2 6.77l12.33-3.43.67.53v8.6l-.67.53-6.089-1.595a2.16 2.16 0 1 1-4.178-1.095L2 9.77l-.42-.53V7.3L2 6.77zm3.006 3.787a1.13 1.13 0 0 0-.04.242 1.17 1.17 0 0 0 2.288.347l-2.248-.589zM2.58 8.82L14 11.83V4.5L2.58 7.72v1.1z",
  mute:
    "M1.5 5h2.79l3.86-3.83.85.35v13l-.85.33L4.29 11H1.5l-.5-.5v-5l.5-.5zm3.35 5.17L8 13.31V2.73L4.85 5.85 4.5 6H2v4h2.5l.35.17zm9.381-4.108l.707.707L13.207 8.5l1.731 1.732-.707.707L12.5 9.207l-1.732 1.732-.707-.707L11.793 8.5 10.06 6.77l.707-.707 1.733 1.73 1.731-1.731z",
  person:
    "M8 2a1 1 0 110 2 1 1 0 010-2zm0-1a2 2 0 100 4 2 2 0 000-4zm1.23 4.49H6.77A1.77 1.77 0 005 7.26V9.9A1.06 1.06 0 006 11v2.33a1.2 1.2 0 001.2 1.2h1.6a1.2 1.2 0 001.2-1.24V11a1.06 1.06 0 001-1.1V7.26a1.77 1.77 0 00-1.77-1.77zM6 10V7.26a.76.76 0 01.77-.77h2.46a.76.76 0 01.77.77V10H9v3.31a.2.2 0 01-.2.2H7.2a.2.2 0 01-.2-.2V10H6z",
  arrowLeft:
    "M7 3.093l-5 5V8.8l5 5 .707-.707-4.146-4.147H14v-1H3.56L7.708 3.8 7 3.093z",
  plus: "M14 7v1H8v6H7V8H1V7h6V1h1v6h6z",
  close:
    "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z",
  cog:
    "M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z",
  triangle: "M8 4l4 6.905H4L8 4z",
  dot: "M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
  feedback:
    "M7.549 10.078c.46.182.88.424 1.258.725.378.3.701.65.97 1.046a4.829 4.829 0 0 1 .848 2.714V15H9.75v-.438a3.894 3.894 0 0 0-1.155-2.782 4.054 4.054 0 0 0-1.251-.84 3.898 3.898 0 0 0-1.532-.315A3.894 3.894 0 0 0 3.03 11.78a4.06 4.06 0 0 0-.84 1.251c-.206.474-.31.985-.315 1.531V15H1v-.438a4.724 4.724 0 0 1 .848-2.713 4.918 4.918 0 0 1 2.229-1.77 2.994 2.994 0 0 1-.555-.493 3.156 3.156 0 0 1-.417-.602 2.942 2.942 0 0 1-.26-.683 3.345 3.345 0 0 1-.095-.739c0-.423.08-.82.24-1.189a3.095 3.095 0 0 1 1.626-1.627 3.067 3.067 0 0 1 2.386-.007 3.095 3.095 0 0 1 1.627 1.627 3.067 3.067 0 0 1 .157 1.928c-.06.237-.148.465-.266.684a3.506 3.506 0 0 1-.417.608c-.16.187-.345.35-.554.492zM5.812 9.75c.301 0 .584-.057.848-.17a2.194 2.194 0 0 0 1.162-1.163c.119-.269.178-.554.178-.854a2.138 2.138 0 0 0-.643-1.538 2.383 2.383 0 0 0-.697-.472 2.048 2.048 0 0 0-.848-.178c-.3 0-.583.057-.847.17a2.218 2.218 0 0 0-1.17 1.17c-.113.264-.17.547-.17.848 0 .3.057.583.17.847.115.264.27.497.466.697a2.168 2.168 0 0 0 1.552.643zM15 1v7h-1.75l-2.625 2.625V8H9.75v-.875h1.75v1.388l1.388-1.388h1.237v-5.25h-8.75v1.572a7.255 7.255 0 0 0-.438.069 2.62 2.62 0 0 0-.437.123V1H15z",
  search:
    "M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z",
  refresh:
    "M5.563 2.516A6.001 6.001 0 0 0 8 14 6 6 0 0 0 9.832 2.285l-.302.953A5.002 5.002 0 0 1 8 13a5 5 0 0 1-2.88-9.088l.443-1.396z",
  arrowRight:
    "M9 13.887l5-5V8.18l-5-5-.707.707 4.146 4.147H2v1h10.44L8.292 13.18l.707.707z",
};

export function Codicon({
  name,
  ...props
}: React.SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox={name === "cog" || name === "search" ? "0 0 24 24" : "0 0 16 16"}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
