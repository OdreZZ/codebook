"use client"

import Image from "next/image";
import CommonButton, { CommonButtonSize } from "./components/buttons/CommonButton";
import AppRating from "./components/common/AppRating";
import { Divider } from "@mui/material";
import AppButton from "./components/buttons/AppButton";
import BrandButton from "./components/buttons/BrandButton";
import { useEffect, useState } from "react";
import ReviewCard from "./components/cards/ReviewCard";
import { ALL_TESTIMONIALS } from "@/data/testimonials";

const TARGET_AUDIENCE = [
    "clients", "agency", "portfolio", "marketing team", "design team", "company",
]

const ALL_LOGOS = [
    "logo1.svg",
    "logo2.svg",
    "logo3.svg",
    "logo4.svg",
]

export default function Home() {
    const [currentAudience, setCurrentAudience] = useState(0)
    const [currentTestimonialX, setCurrentTestimonialX] = useState(0.0)

    const audienceRender = TARGET_AUDIENCE.map((audience, idx) => (
        <span key={`audience-${audience}`}
            className={`animate-fade-in
                ${currentAudience !== idx ? "hidden" : ""}`
            }>
            {audience}
        </span>
    ))

    const testimonialsRender = ALL_TESTIMONIALS.map(testimonial => (
        <ReviewCard
            key={`testimonial-${testimonial.reviewerName}`}
            reviewText={testimonial.reviewText}
            reviewerImg={testimonial.reviewerImg}
            reviewerName={testimonial.reviewerName}
            reviewerJob={testimonial.reviewerJob}
        />
    ))

    const logosRender = ALL_LOGOS.map(logo => (
        <div className="flex" key={`company-${logo}`}>
            <Image src={`/logos/${logo}`} alt={`Logo of ${logo}`}
                className="h-10 grayscale min-w-3xs" width={140} height={30}
            />
        </div>
    ))

    useEffect(() => {
        setInterval(() => {
            setCurrentAudience(prev => prev + 1 >= TARGET_AUDIENCE.length ? 0 : prev + 1)
        }, 2000)
        setInterval(() => {
            setCurrentTestimonialX(prev => prev >= 100 ? 0 : prev + 0.05)
        }, 5)
    }, [])

    return (
        <main className="flex flex-col justify-center gap-22 py-20">
            <section className="max-w-6xl px-4 md:px-24 flex flex-col items-center md:items-start gap-8">
                <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="hidden md:flex">All-In-One Creative Media Library.</span>
                    See everything.<br/>
                    Find anything.
                </h1>
                <h2 className="text-slate-600 text-2xl">
                    The next era of media storage. A DAM so good, we don&apos;t hide behind demos—see for yourself.
                </h2>
                <div>
                    <CommonButton size={CommonButtonSize.LARGE}
                        onClick={() => console.log("Create Codebook")}
                    >
                        Create Codebook free
                    </CommonButton>
                </div>
                <div className="flex flex-col md:flex-row items-center text-xs gap-2">
                    <div>
                        Also,
                    </div>
                    <AppRating storeName="Chrome Extension" />
                    <Divider orientation="vertical" flexItem />
                    <AppRating storeName="App Store" />
                </div>
                <div className="flex justify-center relative">
                    <Image
                        src="/images/snapshot.jpg"
                        alt="Image of our product."
                        width={791}
                        height={479}
                    />
                </div>
            </section>

            <section className="md:px-24 flex flex-col gap-6">
                <h1 className="text-4xl text-center font-bold">
                    Connected to all the tools you need
                </h1>
                <h2 className="text-lg text-center">
                    Create. Store. With all the apps you need to run a creative team.
                </h2>
                <div className="flex gap-4 justify-center flex-wrap md:flex-nowrap">
                    <AppButton title="Dall-E 3" image="/logos/dalle.png" />
                    <AppButton title="Stable Diffusion" image="/logos/stablediffusion.png" />
                    <AppButton title="AI Background" image="/logos/aibackground.webp" />
                    <AppButton title="AI Palettes" image="/logos/aipalettes.webp" />
                    <AppButton title="Vector Converter" image="/logos/vectorconverter.webp" />
                    <AppButton title="Image Effects" image="/logos/imageeffects.webp" />
                    <AppButton title="Midjourney" image="/logos/midjourney.png" />
                    <AppButton title="Figma" image="/logos/figma.png" />
                </div>
            </section>

            <section className="flex flex-col self-center gap-20 px-2">
                <h1 className="text-4xl text-center font-bold">
                    Align your team and stay up to date with your latest brand assets
                </h1>

                <div className="flex flex-wrap justify-center gap-10">
                    <BrandButton
                        title="Brand Portal"
                        image="/images/brandportal.webp"
                    />
                    <BrandButton
                        title="Brand Style Guide"
                        image="/images/brandstyle.webp"
                    />
                    <BrandButton
                        title="Design Guidelines Template"
                        image="/images/designguidelines.webp"
                    />
                    <BrandButton
                        title="Digital Asset Library"
                        image="/images/digitalasset.webp"
                    />
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center px-2 justify-center gap-16 mt-20">
                <div>
                    <Image
                        width={300}
                        height={300}
                        alt="For all your needs"
                        src="/images/featuresimg.png"
                    />
                </div>

                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-4xl font-bold text-center">
                        Neat, tidy, and organized <br />
                        for your {audienceRender}
                    </h1>

                    <ul className="flex flex-col gap-4 text-xl">
                        <li className="flex gap-2">
                            <Image src="/icons/point.webp" width={21} height={18} alt="" />
                            <span>Find files 10x faster</span>
                        </li>
                        <li className="flex gap-2">
                            <Image src="/icons/point.webp" width={21} height={18} alt="" />
                            <span>Collaborate with anyone</span>
                        </li>
                        <li className="flex gap-2">
                            <Image src="/icons/point.webp" width={21} height={18} alt="" />
                            <span>Centralize essentials</span>
                        </li>
                        <li className="flex gap-2">
                            <Image src="/icons/point.webp" width={21} height={18} alt="" />
                            <span>Broadcast new assets</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="flex py-3 px-6 overflow-hidden select-none bg-neutral-100">
                <div className="flex py-10 gap-4"
                    style={{
                        transform: `translate(-${currentTestimonialX}%)`
                    }}
                >
                    {testimonialsRender}
                </div>
                <div className="flex bg-neutral-100 py-10 gap-4"
                    style={{
                        transform: `translate(-${currentTestimonialX}%)`
                    }}
                >
                    {testimonialsRender}
                </div>
            </section>

            <section className="flex flex-col gap-20 items-center mb-40 px-2">
                <div className="flex flex-col md:flex-row justify-center opacity-50 gap-4">
                    {logosRender}
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl md:text-5xl text-center font-bold">
                        One Codebook. Unlimited Collaborators.
                    </h1>
                    <div className="text-lg text-center">
                        Unlock your team&apos;s full potential. One hub for all your projects, files, and inspiration.
                    </div>
                    <div className="flex justify-center mt-5">
                        <CommonButton onClick={() => console.log("Book demo")}>
                            Book a demo
                        </CommonButton>
                    </div>
                </div>
            </section>
        </main>
    );
}
