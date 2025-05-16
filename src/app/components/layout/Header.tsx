"use client"

import CommonButton from "../buttons/CommonButton";
import Image from "next/image";
import VerticalDivider from "../common/VerticalDivider";
import HeaderLink from "../buttons/HeaderLink";
import { ColorTheme } from "@/app/config/theme";
import HeaderSubLink from "../buttons/HeaderSubLink";
import { useState } from "react";

export default function Header() {
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

    const onMenuClick = (menu: string | null) => {
        if (menu === expandedMenu) {
            setExpandedMenu(null)
        } else {
            setExpandedMenu(menu)
        }
    }

    return <header className="hidden md:flex relative max-h-24 p-5 justify-between">
        <div className="flex items-center gap-6 relative"
            onBlur={() => onMenuClick(null)}
        >
            <Image
                priority
                width={80}
                height={55}
                src="/logo.png"
                alt="Welcome to Code Book!"
            />

            <VerticalDivider />

            <HeaderLink
                title="Community"
                onClick={() => onMenuClick("Community")}
                isExpanded={expandedMenu === "Community"}
            >
                <HeaderSubLink title="#CodebookCommunity" />
                <HeaderSubLink title="Template Gallery" />
                <HeaderSubLink title="Portfolio Showcase" />
                <HeaderSubLink title="Free Giveaway" />
            </HeaderLink>

            <HeaderLink
                title="Enterprise SDK"
                onClick={() => console.log("Enterprise SDK Link")}
            />

            <HeaderLink
                title="Pricing"
                onClick={() => console.log("Pricing Link")}
            />

            <HeaderLink
                title="Product"
                onClick={() => onMenuClick("Product")}
                isExpanded={expandedMenu === "Product"}
            >
                <HeaderSubLink
                    title="Overview"
                    subtitle="World's first collaborative creative space"
                />
                <HeaderSubLink
                    title="Features"
                />
                <h5 className="text-slate-600 font-bold">CODEBOOK FOR</h5>
                <HeaderSubLink
                    title="Professional freelancers"
                    subtitle="Share your client work beautifully"
                    highlight="Pro"
                />

                <HeaderSubLink
                    title="Design teams"
                    subtitle="Align your team to deliver faster"
                    highlight="Team"
                />

                <HeaderSubLink
                    title="Codebook Search GPT"
                    highlight="GPT for Team"
                />
            </HeaderLink>

            <HeaderLink
                title="Use cases"
                onClick={() => onMenuClick("Use cases")}
                isExpanded={expandedMenu === "Use cases"}
            >
                <h5 className="text-slate-600 font-bold">ALL CREATIVES</h5>
                <HeaderSubLink title="Creative project management" />
                <HeaderSubLink title="AI art & prompt storage" />
                <HeaderSubLink title="Collaboration & editing" />
                <HeaderSubLink title="Smarter storage" />
                <HeaderSubLink title="Creative licenses" />
                <h5 className="text-slate-600 font-bold">FREELANCERS</h5>
                <HeaderSubLink title="Professional handoff" />
                <HeaderSubLink title="Large file sharing" />
            </HeaderLink>

            <HeaderLink
                title="Resources"
                onClick={() => onMenuClick("Resources")}
                isExpanded={expandedMenu === "Resources"}
            >
                <HeaderSubLink title="Blog" />
                <HeaderSubLink title="Tutorial" />
                <HeaderSubLink title="The story of Codebook" />
                <HeaderSubLink title="Case studies" />
                <HeaderSubLink title="Artist privacy & ownership" />
                <HeaderSubLink title="Partnership" />
            </HeaderLink>
        </div>

        <div className="flex gap-2 items-center">
            <CommonButton
                width={110}
                theme={ColorTheme.SECONDARY}
                onClick={() => console.log("Log in")}
            >
                Log in
            </CommonButton>

            <CommonButton
                width={110}
                onClick={() => console.log("Create free")}
            >
                Create free
            </CommonButton>
        </div>
    </header>
}
