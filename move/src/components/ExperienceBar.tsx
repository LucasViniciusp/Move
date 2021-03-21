import { useState } from "react"

interface ExperienceBarProps {
    color: string;
}

export function ExperienceBar(props: ExperienceBarProps) {
    const current = 67

    return (
        <header className="experience-bar">
            <span>0xp</span>
            <div>
                <div style={{ width: current + '%'}} />

                <span className="current-experience"
                    style={{ left: current + '%' }}
                >
                    {current/100 * 600}xp
                </span>
            </div>
            <span>600xp</span>
        </header>
    )
}