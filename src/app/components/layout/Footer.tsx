"use client"

import Image from "next/image";
import FooterLink from "../buttons/FooterLink";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
    return <footer className="flex flex-col mb-30 px-6 gap-20">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-1/5">
                <Image
                    priority
                    width={80}
                    height={55}
                    src="/logo.png"
                    alt="Welcome to Code Book!"
                />
            </div>

            <div className="flex flex-col gap-4">
                <h5 className="font-bold">
                    Product
                </h5>

                <FooterLink title="Overview" />
                <FooterLink title="Pricing" />
                <FooterLink title="Features" />
                <FooterLink title="SDK" />
                <FooterLink title="Beta program" />
                <FooterLink title="Students" />
                <FooterLink title="Professional freelancers" />
                <FooterLink title="Photographer gallery" />
                <FooterLink title="Brand portal" />
                <FooterLink title="Design teams" />
                <FooterLink title="Creative project management" />
                <FooterLink title="AI art & prompt storage" />
                <FooterLink title="Collaboration & editing" />
                <FooterLink title="Smarter storage" />
                <FooterLink title="Creative licenses" />
                <FooterLink title="Professional handoff" />
                <FooterLink title="Large file sharing" />
            </div>

            <div className="flex flex-col gap-4">
                <h5 className="font-bold">
                    Mini Apps
                </h5>

                <FooterLink title="AI Color Palette" />
                <FooterLink title="SVG Converter" />
                <FooterLink title="Picsart AI Design Tools" />
                <FooterLink title="Generative AI Engines" />
                <FooterLink title="Watermarks" />
                <FooterLink title="Image Hosting" />
                <FooterLink title="Flux" />
                <FooterLink title="GIF Maker" />
                <FooterLink title="Video Converter" />
                <FooterLink title="Logo Maker" />
                <FooterLink title="Photoroom" />
            </div>

            <div className="flex flex-col gap-4">
                <h5 className="font-bold">
                    Resources
                </h5>

                <FooterLink title="Download Chrome Extension" />
                <FooterLink title="Protecting Artist Privacy" />
                <FooterLink title="Artist Interviews" />
                <FooterLink title="Tutorials" />
                <FooterLink title="The story of Codebook" />
                <FooterLink title="Case studies" />
                <FooterLink title="Codebook FAQs" />
                <FooterLink title="All topics" />
            </div>

            <div className="flex flex-col gap-4">
                <h5 className="font-bold">
                    Template Gallery
                </h5>

                <FooterLink title="All templates" />
                <FooterLink title="Portfolio Gallery" />
                <FooterLink title="Wedding Gallery" />
                <FooterLink title="Brand Guidelines" />
                <FooterLink title="Artist Portfolio" />
                <FooterLink title="Social Marketing Moodboard" />
                <FooterLink title="Product Photography Portfolio" />
                <FooterLink title="Brand and Design Guidelines" />
                <FooterLink title="Design Guidelines" />
                <FooterLink title="Digital Asset Library" />
            </div>

            <div className="flex flex-col gap-4">
                <h5 className="font-bold">
                    Company
                </h5>

                <FooterLink title="Our Team" />
                <FooterLink title="Partner with us" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
            <span className="text-slate-600">
                © 2025 Codebook Digital, Inc. All rights reserved.
            </span>

            <FooterLink title="Terms" />
            <FooterLink title="Privacy" />
            <FooterLink title="Consent Preferences" />
            <FooterLink title="Join our Discord!" />
            <FooterLink title="Platform Status" />

            <div className="flex gap-2">
                <div className="text-neutral-400 cursor-pointer">
                    <Instagram fontSize="small" />
                </div>
                <div className="text-neutral-400 cursor-pointer">
                    <LinkedIn fontSize="small" />
                </div>
                <div className="text-neutral-400 cursor-pointer">
                    <Twitter fontSize="small" />
                </div>
            </div>
        </div>
    </footer>
}
