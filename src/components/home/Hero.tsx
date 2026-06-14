'use client'

import { useEffect, useRef, useState } from "react";
import { cn } from "@/src/lib/utils";

export default function Hero() {

    const [stage, setStage] = useState(1);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!trackRef.current) return;

            const { top, height } = trackRef.current.getBoundingClientRect();
            const maxScroll = height - window.innerHeight;
            const currentScroll = Math.max(0, -top);

            let progress = (currentScroll / maxScroll) * 100;

            progress = Math.max(0, Math.min(100, progress));
            if (progress < 33) {
                setStage(1);
            } else if (progress < 66) {
                setStage(2);
            } else {
                setStage(3);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stageBgColor : Record<number, string> = {
    1: 'bg-beige-light',
    2: 'bg-beige-base',
    3: 'bg-beige-dark',
    };

    return (
        <div ref={trackRef} className="relative h-[300vh] w-full">
            <div className="sticky inset-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <div
                    className={cn(
                        "absolute inset-0 flex transition-colors duration-250",
                        stage && `${stageBgColor[stage]}`
            )}
                >
                    <p className="text-black">{`STAGE ${stage}`}</p>
                </div>
            </div>
            <div className="absolute top-[100vh] z-10 h-[200vh]">
                <div className="h-full w-20 ml-20 bg-red-500">hello</div>
            </div>
        </div>
    )
}