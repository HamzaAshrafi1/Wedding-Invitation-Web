interface IslamicPatternProps {
    className?: string;
    opacity?: number;
}

export default function IslamicPattern({
    className = "",
    opacity = 0.08,
}: IslamicPatternProps) {
    return (
        <div
      aria-hidden= "true"
    className = {`pointer-events-none absolute inset-0 overflow-hidden ${className}`
}
style = {{ opacity }}
    >
    <svg
        className="h-full w-full"
viewBox = "0 0 400 400"
preserveAspectRatio = "xMidYMid slice"
    >
    <defs>
    <pattern
            id="islamic-geometry"
width = "80"
height = "80"
patternUnits = "userSpaceOnUse"
    >
    <path
              d="M40 0 L80 40 L40 80 L0 40 Z"
fill = "none"
stroke = "currentColor"
strokeWidth = "0.6"
    />

    <path
              d="M20 20 L60 20 L60 60 L20 60 Z"
fill = "none"
stroke = "currentColor"
strokeWidth = "0.45"
transform = "rotate(45 40 40)"
    />

    <circle
              cx="40"
cy = "40"
r = "5"
fill = "none"
stroke = "currentColor"
strokeWidth = "0.5"
    />

    <circle
              cx="40"
cy = "40"
r = "2"
fill = "currentColor"
    />
    </pattern>
    </defs>

    < rect
width = "100%"
height = "100%"
fill = "url(#islamic-geometry)"
className = "text-[#d8c08d]"
    />
    </svg>
    </div>
  );
}