import { cn } from "@/lib/utils"

interface PlatformBadgeProps {
    type: string
    className?: string
}

export function PlatformBadge({ type, className }: PlatformBadgeProps) {
    const normalizedType = type.toLowerCase()

    if (normalizedType === "topmate") {
        return (
            <div className={cn("flex items-center gap-1.5 bg-[#E44332]/10 px-2.5 py-1 rounded-md border border-[#E44332]/20", className)}>
                <svg width="14" height="14" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <circle r="22.5" transform="matrix(1 0 0 -1 23.6152 23)" fill="#E44332" />
                    <path d="M33.0038 29.6411C31.5707 31.6672 29.5206 33.1752 27.1598 33.9401C24.7989 34.705 22.254 34.6857 19.905 33.8851C17.5561 33.0844 15.5291 31.5454 14.1269 29.4978C12.7247 27.4503 12.0225 25.0041 12.1251 22.5246C12.2277 20.045 13.1296 17.6652 14.6962 15.7405C16.2627 13.8158 18.4099 12.4495 20.817 11.8456C23.224 11.2418 25.7619 11.4328 28.0515 12.3901C30.341 13.3474 32.2595 15.0197 33.5204 17.1572L23.6152 23L33.0038 29.6411Z" fill="white" />
                </svg>
                <span className="text-[10px] font-bold tracking-wide text-[#E44332] uppercase">Topmate</span>
            </div>
        )
    }

    if (normalizedType === "adplist") {
        return (
            <div className={cn("flex items-center gap-1.5 bg-black/5 px-2.5 py-1 rounded-md border border-black/10", className)}>
                <div className="w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">A</span>
                </div>
                <span className="text-[10px] font-bold tracking-wide text-black/70 uppercase">ADPList</span>
            </div>
        )
    }

    // Fallback
    return (
        <span className={cn("text-[10px] uppercase tracking-wider font-bold text-muted-foreground/50 bg-secondary/50 px-2 py-1 rounded-md", className)}>
            {type}
        </span>
    )
}
