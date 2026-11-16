import s from "../styles/CraftStrip.module.css";

const disciplines = [
  ["Product & UX", "Craft"],
  ["Creative", "Engineering"],
  ["Immersive Web", "Experiences"],
  ["Full-Stack", "Craftsmanship"],
];

function Laurel({ mirrored = false }: { mirrored?: boolean }) {
  const leaves = [
    [29, 10, 37],
    [23, 18, 19],
    [19, 27, 2],
    [17, 37, -15],
    [18, 47, -30],
    [22, 57, -44],
    [28, 66, -57],
  ];
  return (
    <svg
      className={mirrored ? s.mirrored : s.laurel}
      viewBox="0 0 44 86"
      aria-hidden="true"
    >
      <path
        d="M35 77C11 63 8 30 29 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {leaves.map(([x, y, rotation], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${rotation})`}>
          <ellipse
            cx="-3"
            cy="-1"
            rx="2.1"
            ry="5.2"
            transform="rotate(-43)"
            fill="currentColor"
          />
          <ellipse
            cx="4.4"
            cy="4.4"
            rx="2"
            ry="4.7"
            transform="rotate(33 4.4 4.4)"
            fill="currentColor"
            opacity=".82"
          />
        </g>
      ))}
      <path
        d="m30 72 7 5-1 4-5-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export default function CraftStrip() {
  return (
    <section className={s.strip} id="craft" aria-label="Areas of expertise">
      <ul className={s.inner}>
        {disciplines.map(([line1, line2]) => (
          <li className={s.item} key={line1}>
            <Laurel />
            <span>
              {line1}
              <br />
              {line2}
            </span>
            <Laurel mirrored />
          </li>
        ))}
      </ul>
    </section>
  );
}
