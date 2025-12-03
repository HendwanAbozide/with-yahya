import { useState } from "react"

interface ADPListButtonProps {
    href?: string
    text?: string
}

export function ADPListButton({
    href = "https://adplist.org/mentors/yahya-alaa?session=67653-mentorship-session",
    text = "Book a free session with me on ADPList",
}: ADPListButtonProps) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <a
            target="_blank"
            rel="noreferrer"
            href={href}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative h-[60px] px-8 rounded-xl flex items-center justify-center gap-3 bg-gradient-to-b from-[#0f0f2e] to-[#05051b] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(20,20,100,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer text-white no-underline"
        >
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Face circle */}
                <circle cx="18" cy="18" r="16" fill="white" stroke="white" strokeWidth="1" />

                {/* Left eye - changes from dot to happy arc */}
                {!isHovered ? (
                    <circle cx="12" cy="14" r="2.5" fill="#05051b" />
                ) : (
                    <path
                        d="M 9 14 Q 12 11 15 14"
                        stroke="#05051b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                )}

                {/* Right eye - changes from dot to happy arc */}
                {!isHovered ? (
                    <circle cx="24" cy="14" r="2.5" fill="#05051b" />
                ) : (
                    <path
                        d="M 21 14 Q 24 11 27 14"
                        stroke="#05051b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                )}

                {/* Mouth - morphs from gentle smile to big open smile */}
                <path
                    d={isHovered ? "M 8 20 Q 18 32 28 20" : "M 10 22 Q 18 26 26 22"}
                    stroke="#05051b"
                    strokeWidth={isHovered ? 3 : 2.5}
                    strokeLinecap="round"
                    fill="none"
                    style={{
                        transition: 'd 0.3s ease-in-out, stroke-width 0.3s ease-in-out'
                    }}
                />
            </svg>
            <p className="font-bold text-base leading-6 mb-0">
                {text}
            </p>
        </a>
    )
}
