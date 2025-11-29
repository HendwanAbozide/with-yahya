"use client"

export function BackgroundGradient() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Top Left Blob - Light Blue */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/60 blur-[120px] animate-blob mix-blend-multiply filter opacity-90" />

            {/* Top Right Blob - Very Light Blue */}
            <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-100/60 blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply filter opacity-90" />

            {/* Bottom Left Blob - Sky Blue */}
            <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-sky-200/60 blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply filter opacity-90" />

            {/* Bottom Right Blob - Pale Blue (White-ish) */}
            <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/60 blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply filter opacity-90" />
        </div>
    )
}
