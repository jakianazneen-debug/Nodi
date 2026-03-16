import { useRef, useState } from "react";
import video1 from "./assets/1.mp4";
import video2 from "./assets/2.mp4";
import video3 from "./assets/3.mp4";
import video4 from "./assets/4.mp4";
import nodbi from "./assets/nodi.jpg";
import instaImg from "./assets/insta.png";
import tiktokImg from "./assets/tiktok.png";

const featuredEdits = [
  {
    title: "Naruto Edit",
    subtitle: "Shadow sprint cut",
  },
  {
    title: "Gojo Edit",
    subtitle: "Infinite flare frames",
  },
  {
    title: "AOT Edit",
    subtitle: "Titan clash montage",
  },
  {
    title: "Demon Slayer Edit",
    subtitle: "Flame sweep scene",
  },
];

const viralEdits = [
  {
    title: "Naruto Edit",
    views: "1.2M Views",
  },
  {
    title: "Gojo Edit",
    views: "850K Views",
  },
  {
    title: "Luffy Edit",
    views: "640K Views",
  },
];

const services = [
  {
    tier: "Basic",
    title: "Anime Edit",
    price: "$15",
    features: ["30-45s cinematic cut", "HD export", "2 revisions"],
  },
  {
    tier: "Standard",
    title: "Reels Edit",
    price: "$25",
    features: ["Up to 60s edit", "Trending motion FX", "4 revisions"],
  },
  {
    tier: "Premium",
    title: "AMV Edit",
    price: "$40",
    features: ["Full AMV storyline", "4K master render", "Unlimited tweaks"],
  },
];

const testimonials = [
  {
    quote: "Amazing editing skills! Every beat felt cinematic.",
    name: "Nazneen Prrithwi",
  },
  {
    quote: "Perfect anime edit! The pacing and glow effects were insane.",
    name: "Mika T.",
  },
  {
    quote: "Best AMV collaboration we have done this year.",
    name: "Studio Kaze",
  },
];

const portfolioVideos = [
  { src: video1, title: "Edit Preview 1" },
  { src: video2, title: "Edit Preview 2" },
  { src: video3, title: "Edit Preview 3" },
  { src: video4, title: "Edit Preview 4" },
];

export function App() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const handleVideoPlay = (current: HTMLVideoElement) => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video && video !== current) video.pause();
    });
  };

  const contactEmail = "nodbi@gmail.com";
  const [contactName, setContactName] = useState("");
  const [contactSenderEmail, setContactSenderEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const createInstagramDMLink = (_serviceTitle: string) => {
    // Instagram DM link (opens direct messaging to the specified chat/thread)
    return "https://www.instagram.com/direct/t/17843682470908496/";
  };

  const createContactMailtoLink = () => {
    const subject = `New message from ${contactName || "a visitor"}`;
    const body = `Name: ${contactName}\nEmail: ${contactSenderEmail}\n\nMessage:\n${contactMessage}`;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = createContactMailtoLink();
  };

  return (
    <div className="bg-[#0A0A0A] text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-[0.3em] text-[#FFD600]">
           NodBi
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {[
              "Home",
              "About",
              "My Work",
              "Services",
              "Social",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-[#FFD600]"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#hire"
            className="glow-button rounded-full bg-[#FFD600] px-5 py-2 text-sm font-semibold text-black transition hover:scale-105"
          >
            Hire Me
          </a>
        </nav>
      </header>


      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto mt-20 grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
         <div className="space-y-7 order-2 md:order-1">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
             
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Nodbi
              <span className="block text-[#FFD600]">Creative Video Editor</span>
            </h1>
            <p className="text-lg text-white/70">
              Anime • Reels • AMVs • Viral Edits
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="glow-button rounded-full bg-[#FFD600] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#hire"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:text-[#FFD600]"
              >
                Hire Me
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Instagram", value: "130K+" },
                { label: "TikTok", value: "30K+" },
                { label: "Edits", value: "900+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-glow rounded-2xl border border-white/10 bg-[#1A1A1A]/80 px-5 py-4"
                >
                  <p className="text-xs uppercase text-white/50">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#FFD600]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
    <div className="space-y-6 order-1 md:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A1A]/70 p-4">
              <div
                className="h-72 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/736x/11/13/f5/1113f5ddc8828c057022522ea70665ac.jpg)",
                }}
              />

              
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#1A1A1A]/80 px-4 py-3 text-xs text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-title text-xs uppercase text-white/50">
              Viral
            </p>
            <h2 className="text-3xl font-semibold">My Best Edits</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredEdits.map((edit, idx) => (
            <div
              key={edit.title}
              className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6"
            >
              <h3 className="text-lg font-semibold">{edit.title}</h3>
              <p className="mt-2 text-sm text-white/60">{edit.subtitle}</p>
              <div className="mt-4">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[`featured-${idx}`] = el;
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.currentTarget.play();
                  }}
                  onPlay={(e) => handleVideoPlay(e.currentTarget)}
                  className="h-52 w-full rounded-xl bg-black"
                  src={portfolioVideos[idx]?.src}
                  muted
                  controls
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>

        









      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="overflow-hidden rounded-3xl border border-white/10">
           
              <img
                src={nodbi}
                alt="Nodbi"
                className="h-160 w-full object-cover"
              />

          </div>
          <div className="space-y-6">
            <p className="section-title text-xs uppercase text-white/50">
              About Me
            </p>
            <h2 className="text-3xl font-semibold">
              Hi, I'm Nodbi. I craft cinematic anime edits.
            </h2>
            <p className="text-white/70">
              A creative video editor who loves making cinematic anime edits and
              viral social media videos with dramatic pacing, bold color grading,
              and heartbeat-synced transitions.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "CapCut",
                "PicsArt",
                "Alight Motion",
                "After Effects",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="parallax-bg bg-[url(https://i.pinimg.com/1200x/24/6f/4b/246f4b1bc7bafbb291e7a4c18271f848.jpg)] bg-cover bg-center"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="section-title text-xs uppercase text-white/50">
            Editing Categories
          </p>
          <h2 className="text-3xl font-semibold">Editing Categories</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Anime Edits",
              "Reels Edits",
              "AMV Edits",
              "Client Work",
            ].map((category) => (
              <a
                key={category}
                href="/"
                target="_blank"
                rel="noreferrer"
                className="hover-rise rounded-2xl border border-white/10 bg-[#1A1A1A]/80 p-6 text-sm font-semibold"
              >
                🎬 {category}
                <p className="mt-2 text-xs text-white/60">
                  Explore page →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="viral" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-title text-xs uppercase text-white/50">
              Viral Edits
            </p>
            <h2 className="text-3xl font-semibold">Viral Edits</h2>
          </div>
          <button className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:text-[#FFD600]">
            Watch Reels
          </button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {viralEdits.map((edit, idx) => (
            <div
              key={edit.title}
              className="hover-rise rounded-2xl border border-white/10 bg-[#1A1A1A] p-6"
            >
              <div className="mb-6">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[`viral-${idx}`] = el;
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.currentTarget.play();
                  }}
                  onPlay={(e) => handleVideoPlay(e.currentTarget)}
                  className="h-40 w-full rounded-xl bg-black object-cover"
                  controls
                  playsInline
                  src={portfolioVideos[idx]?.src}
                />
              </div>
              <h3 className="text-lg font-semibold">{edit.title}</h3>
              <p className="text-sm text-white/60">{edit.views}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="social" className="mx-auto max-w-6xl px-6 py-20">
        <p className="section-title text-xs uppercase text-white/50">
          Social Media
        </p>
        <h2 className="text-3xl font-semibold">Social Media</h2>
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {[
            {
              name: "Instagram",
              followers: "130K Followers",
              img: instaImg,
              url: "https://www.instagram.com/nqzz.x_x?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            },
            {
              name: "TikTok",
              followers: "30K Followers",
              img: tiktokImg,
              url: "https://www.tiktok.com/@nqzz.x_x3?is_from_webapp=1&sender_device=pc",
            },
          ].map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="hover-rise group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A]"
            >
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${platform.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative p-8">
                <p className="section-title text-xs uppercase text-white/50">
                  {platform.name} Preview
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{platform.name}</h3>
                <p className="mt-3 text-sm text-white/60">{platform.followers}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="glow-button rounded-full bg-[#FFD600] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
            Follow Me
          </button>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div>
          <p className="section-title text-xs uppercase text-white/50">
            Services
          </p>
          <h2 className="text-3xl font-semibold">Editing Services</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.tier}
              className="hover-rise rounded-2xl border border-white/10 bg-[#1A1A1A] p-6"
            >
              <p className="text-xs uppercase text-white/50">{service.tier}</p>
              <h3 className="mt-2 text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-3xl font-semibold text-[#FFD600]">
                {service.price}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {service.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <a
                href={createInstagramDMLink(service.title)}
                className="glow-button mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#FFD600] px-5 py-2 text-sm font-semibold text-black transition hover:scale-105"
                target="_blank"
                rel="noreferrer noopener"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <div>
          <p className="section-title text-xs uppercase text-white/50">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold">Client Reviews</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="hover-rise rounded-2xl border border-white/10 bg-[#1A1A1A] p-6"
            >
              <p className="text-lg text-[#FFD600]">★★★★★</p>
              <p className="mt-4 text-sm text-white/70">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold text-white">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="hire" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-[#1A1A1A] px-10 py-16 text-center">
          <p className="section-title text-xs uppercase text-white/50">
            Hire Me
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Let's Create Something Amazing
          </h2>
          <p className="mt-4 text-white/70">
            Ready to craft a cinematic anime edit that stops the scroll?
          </p>
          <button className="glow-button mt-8 rounded-full bg-[#FFD600] px-8 py-3 text-sm font-semibold text-black transition hover:scale-105">
            Hire Me
          </button>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="section-title text-xs uppercase text-white/50">
              Contact
            </p>
            <h2 className="text-3xl font-semibold">Let's Talk</h2>
            <form className="mt-8 space-y-4" onSubmit={handleContactSubmit}>
              <input
                className="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Email"
                type="email"
                value={contactSenderEmail}
                onChange={(e) => setContactSenderEmail(e.target.value)}
              />
              <textarea
                className="h-32 w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Message"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              />
              <button
                type="submit"
                className="glow-button rounded-full bg-[#FFD600] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-[#1A1A1A] p-8">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>Instagram — <a href="https://www.instagram.com/nqzz.x_x/" target="_blank" rel="noopener noreferrer" className="text-[#FFD600] hover:underline">nqzz.x_x</a></p>
              <p>Email — nodbi@gmail.com</p>
              <p>Discord — <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer" className="text-[#FFD600] hover:underline">fiverr.com/prrithwi</a></p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-white/60">
              Available for collaborations, long-term contracts, and cinematic
              short-form edits.
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        © 2024 NodBi Creator Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
