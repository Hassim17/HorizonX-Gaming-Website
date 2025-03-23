import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";

import { ScrollTrigger } from "gsap/all";
import { MouseEvent, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const frameRef = useRef<HTMLImageElement>(null);

	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=800 center",
				scrub: 0.9,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.from(".mask-clip-path-about", {
			clipPath: "polygon(10% 0, 85% 16%, 100% 71%, 10% 82%)",
			borderRadius: 0,
		});

		clipAnimation.to(".mask-clip-path-about", {
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
			width: "100vw",
			height: "100vh",
			borderRadius: 0,
			ease: "power1.inOut",
		});
	});

	const handleMouseLeave = () => {
		const element = frameRef.current;

		gsap.to(element, {
			duration: 0.3,
			rotateX: 0,
			rotateY: 0,
			ease: "power1.inOut ",
		});
	};

	const handleMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		const element = frameRef.current;

		if (!element) return;

		const rect = element.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const centerX = rect.width / 1.5;
		const centerY = rect.height / 1.5;

		const rotateX = ((y - centerY) / centerY) * -10;
		const rotateY = ((x - centerX) / centerX) * 10;

		gsap.to(element, {
			duration: 0.3,
			rotateX,
			rotateY,
			transformPerspective: 500,
			ease: "power1.inOut ",
		});
	};

	return (
		<div id="about" className="min-h-screen w-screen">
			<div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
				<h2 className="font-general text-sm uppercase md:text-[10px]">
					Welcome to Zentry
				</h2>
				<AnimatedTitle
					title="Disc<b>o</b>ver the world's largest shared <b>a</b>dventure"
					containerClass="mt-5 !text-black text-center"
				/>

				<div className="about-subtext">
					<p>
						The Game of Games begins-your life, now an epic MMORPG
					</p>
					<p>
						Zentry unites every player from countless games and
						platforms
					</p>
				</div>
			</div>

			<div className="h-dvh w-screen" id="clip">
				<div className="about-image mask-clip-path-about">
					<img
						ref={frameRef}
						src="/img/about.webp"
						alt="Background"
						className="absolute left-0 top-0 size-full object-cover"
						onMouseLeave={handleMouseLeave}
						onMouseUp={handleMouseLeave}
						onMouseEnter={handleMouseLeave}
						onMouseMove={handleMouseMove}
					/>
				</div>
				<img
					src="/img/stones.webp"
					alt="Background"
					className="absolute left-0 top-0 size-full object-cover z-[9999]"
				/>
			</div>
		</div>
	);
};

export default About;
