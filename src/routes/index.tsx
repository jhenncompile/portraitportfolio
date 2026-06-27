import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portraitAsset from "@/assets/portrait.png.asset.json";
import {
  Play, Pause, SkipBack, SkipForward, Volume2,
  Mail, Send,
  Heart, Users, Megaphone,
  ArrowUpRight, Languages,
  Lightbulb, Search, PenTool, Layers, Rocket,
  BarChart3,
  FileText, BookOpen, Globe,
} from "lucide-react";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  SiFigma, SiCanva, SiSketch,
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
  SiPython, SiNodedotjs, SiGit, SiGithub,
  SiNotion, SiSlack, SiMiro, SiFramer,
  SiInstagram, SiTiktok, SiYoutube, SiX, SiMedium, SiOrcid, SiLinktree,
  SiPhp, SiJira, SiPostgresql,
  SiStackoverflow, SiTelegram,
} from "react-icons/si";
import { FaLinkedin, FaCss3Alt } from "react-icons/fa";
import { DiPhotoshop, DiIllustrator, DiMsqlServer } from "react-icons/di";
import type { IconType } from "react-icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portafolio — Community builder · UI/UX · Programmer" },
      { name: "description", content: "Portafolio personal bilingüe: diseño UI/UX, community building, contenido tech y desarrollo." },
      { property: "og:title", content: "Portafolio — Community builder · UI/UX · Programmer" },
      { property: "og:description", content: "Portafolio personal bilingüe: diseño UI/UX, community building, contenido tech y desarrollo." },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/* i18n                                                                */
/* ------------------------------------------------------------------ */
type Lang = "es" | "en";

const dict = {
  es: {
    nowPlaying: "Reproduciendo ahora",
    playlist: "Playlist · Portafolio 2026",
    tagline: "Curiosa por la tecnología, el diseño y las personas.",
    role: "Community builder · UI/UX Designer · Programmer",
    scrollHint: "Elige una pista para navegar",
    tracks: [
      { n: "01", title: "About me", sub: "Quién soy" },
      { n: "02", title: "My work", sub: "Proyectos" },
      { n: "03", title: "Skills", sub: "Herramientas" },
      { n: "04", title: "Research", sub: "Investigación" },
      { n: "05", title: "Destacado", sub: "Liderazgo & voluntariado" },
      { n: "06", title: "We can create", sub: "Contacto" },
    ],
    about: {
      kicker: "// sobre mí",
      title: "Hola, soy una constructora\nde comunidades digitales.",
      body: "Diseño experiencias claras y humanas. Me muevo entre el código, el diseño y las personas — uniendo logística, criterio visual y una mirada crítica de UI/UX. Creo en la tecnología como herramienta para empoderar, especialmente a mujeres en tech.",
      tags: ["Community builder", "Tech content enthusiast", "UI/UX Designer", "Programmer"],
    },
    work: {
      kicker: "// mi trabajo",
      title: "Proyectos seleccionados",
      items: [
        { tag: "salud", title: "Allinkay", desc: "Sistema web moderno para la gestión de citas médicas, optimizando la programación y atención a pacientes." },
        { tag: "finanzas", title: "AgroFinanzas", desc: "Diseño y prototipado interactivo de una aplicación financiera móvil adaptada al sector agronómico." },
      ],
    },
    process: {
      kicker: "// del pensamiento a la solución",
      title: "Mi proceso, paso a paso",
      hint: "Desliza →  ·  o usa las flechas",
      steps: [
        { tag: "01 · pensamiento", title: "Pensamiento", desc: "Escucho el problema real. Cuestiono supuestos, defino la pregunta correcta y delimito el alcance." },
        { tag: "02 · investigación", title: "Investigación", desc: "Entrevistas, benchmark y datos. Mapeo usuarias, contextos y restricciones técnicas." },
        { tag: "03 · diseño", title: "Diseño", desc: "Wireframes, flujos y sistema visual. Iteración rápida sobre la pieza más débil." },
        { tag: "04 · prototipo", title: "Prototipo", desc: "Pruebas con personas reales. Métricas claras y feedback honesto antes del handoff." },
        { tag: "05 · solución", title: "Solución", desc: "Entrega documentada, criterios de éxito y plan de iteración. El diseño vive después del lanzamiento." },
      ],
    },
    skills: {
      kicker: "// caja de herramientas",
      title: "Skills & stack",
      groups: [
        { icon: "figma", name: "Figma", items: ["Design Systems", "Prototyping", "Auto-layout", "Variables"] },
        { icon: "vscode", name: "VS Code", items: ["Git", "Refactor", "Extensiones", "Workflows"] },
        { icon: "python", name: "Python", items: ["Scripting", "Data wrangling", "Automatización"] },
        { icon: "uxui", name: "UI/UX", items: ["Ojo crítico", "Heurísticas", "Accesibilidad", "Research"] },
      ],
    },
    featured: {
      kicker: "// destacado",
      title: "Liderazgo & voluntariado",
      body: "Lidero iniciativas para empoderar a mujeres en tecnología y procesos creativos. Me interesan los proyectos sociales y la logística — donde el diseño se vuelve organización y la organización se vuelve impacto.",
      items: [
        { title: "Women in Tech · Mentora", desc: "Acompañamiento 1:1 a mujeres en transición a tech." },
        { title: "Logística social", desc: "Coordinación de eventos comunitarios y workshops gratuitos." },
        { title: "Charlas & talleres", desc: "Contenido educativo sobre diseño, comunidad y herramientas." },
      ],
    },
    research: {
      kicker: "// investigación",
      title: "Research & papers",
      body: "Proyectos de investigación donde cruzo diseño, comunidad y tecnología. Cada uno parte de una pregunta y termina en evidencia.",
      readMore: "Leer paper",
      items: [
        { year: "2025", venue: "Proyecto de investigación", role: "Investigadora principal", title: "Nivel de deserción de las mujeres en carreras de tecnología", abstract: "Estudio empírico sobre los factores socioacadémicos e institucionales que influyen en la deserción estudiantil femenina en carreras del área de tecnología.", tags: ["STEM", "Género", "Deserción"], href: "#" },
        { year: "2024", venue: "Análisis de datos", role: "Analista de datos", title: "Uso de redes sociales en la UAGRM: análisis de datos", abstract: "Análisis cuantitativo de patrones de uso, plataformas preferidas y propósitos académicos del consumo de redes sociales en la comunidad estudiantil de la UAGRM.", tags: ["Data Analytics", "Redes Sociales", "UAGRM"], href: "#" },
      ],
    },
    contact: {
      kicker: "// contacto",
      title: "We can build,\nwe can create.",
      body: "¿Tienes un proyecto de impacto social, logística o algo que quieras crear juntas? Escríbeme.",
      placeholderName: "Tu nombre",
      placeholderEmail: "Tu email",
      placeholderMsg: "Cuéntame tu idea…",
      send: "Enviar mensaje",
      sent: "¡Mensaje enviado! Te respondo pronto.",
    },
    footer: "Hecho con cariño, café y pixeles.",
    langLabel: "Idioma",
  },
  en: {
    nowPlaying: "Now playing",
    playlist: "Playlist · Portfolio 2026",
    tagline: "Curious about technology, design and people.",
    role: "Community builder · UI/UX Designer · Programmer",
    scrollHint: "Pick a track to navigate",
    tracks: [
      { n: "01", title: "About me", sub: "Who I am" },
      { n: "02", title: "My work", sub: "Projects" },
      { n: "03", title: "Skills", sub: "Toolbox" },
      { n: "04", title: "Research", sub: "Papers & studies" },
      { n: "05", title: "Featured", sub: "Leadership & volunteering" },
      { n: "06", title: "We can create", sub: "Get in touch" },
    ],
    about: {
      kicker: "// about me",
      title: "Hi, I'm a builder of\ndigital communities.",
      body: "I craft clear, human experiences. I move between code, design and people — blending logistics, visual judgment and a critical UI/UX eye. I believe in tech as a tool for empowerment, especially for women.",
      tags: ["Community builder", "Tech content enthusiast", "UI/UX Designer", "Programmer"],
    },
    work: {
      kicker: "// my work",
      title: "Selected projects",
      items: [
        { tag: "health", title: "Allinkay", desc: "Modern web system for medical appointment management, optimizing scheduling and patient care." },
        { tag: "finance", title: "AgroFinanzas", desc: "Interactive UI/UX design and prototyping of a mobile financial application tailored for the agronomy sector." },
      ],
    },
    process: {
      kicker: "// from thought to solution",
      title: "My process, step by step",
      hint: "Swipe →  ·  or use the arrows",
      steps: [
        { tag: "01 · thought", title: "Thought", desc: "I listen to the real problem. Question assumptions, frame the right question and scope the work." },
        { tag: "02 · research", title: "Research", desc: "Interviews, benchmarks and data. I map users, contexts and technical constraints." },
        { tag: "03 · design", title: "Design", desc: "Wireframes, flows and a visual system. Fast iteration on the weakest piece first." },
        { tag: "04 · prototype", title: "Prototype", desc: "Tested with real people. Clear metrics and honest feedback before handoff." },
        { tag: "05 · solution", title: "Solution", desc: "Documented delivery, success criteria and an iteration plan. Design lives after launch." },
      ],
    },
    skills: {
      kicker: "// toolbox",
      title: "Skills & stack",
      groups: [
        { icon: "figma", name: "Figma", items: ["Design Systems", "Prototyping", "Auto-layout", "Variables"] },
        { icon: "vscode", name: "VS Code", items: ["Git", "Refactor", "Extensions", "Workflows"] },
        { icon: "python", name: "Python", items: ["Scripting", "Data wrangling", "Automation"] },
        { icon: "uxui", name: "UI/UX", items: ["Critical eye", "Heuristics", "Accessibility", "Research"] },
      ],
    },
    featured: {
      kicker: "// featured",
      title: "Leadership & volunteering",
      body: "I lead initiatives that empower women in tech and creative work. I love socially-driven projects and logistics — where design becomes organization, and organization becomes impact.",
      items: [
        { title: "Women in Tech · Mentor", desc: "1:1 support for women transitioning into tech." },
        { title: "Social logistics", desc: "Coordinating community events and free workshops." },
        { title: "Talks & workshops", desc: "Educational content on design, community and tools." },
      ],
    },
    research: {
      kicker: "// research",
      title: "Research & papers",
      body: "Research projects where design, community and technology meet. Each one starts with a question and ends in evidence.",
      readMore: "Read paper",
      items: [
        { year: "2025", venue: "Research project", role: "Lead researcher", title: "Dropout rate of women in technology careers", abstract: "An empirical study on the socio-academic and institutional factors influencing female student dropout rates in technology-related fields.", tags: ["STEM", "Gender", "Retention"], href: "#" },
        { year: "2024", venue: "Data analysis", role: "Data analyst", title: "Social media usage at UAGRM: a data analysis", abstract: "A quantitative analysis of usage patterns, preferred platforms, and academic purposes of social media consumption within the UAGRM student community.", tags: ["Data Analytics", "Social Media", "UAGRM"], href: "#" },
      ],
    },
    contact: {
      kicker: "// contact",
      title: "We can build,\nwe can create.",
      body: "Got a social-impact project, logistics challenge, or something you want to build together? Write to me.",
      placeholderName: "Your name",
      placeholderEmail: "Your email",
      placeholderMsg: "Tell me your idea…",
      send: "Send message",
      sent: "Message sent! I'll reply soon.",
    },
    footer: "Made with care, coffee and pixels.",
    langLabel: "Language",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Pixel folder icon                                                   */
/* ------------------------------------------------------------------ */
function PixelFolder({ color, label, size = 64 }: { color: string; label?: string; size?: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 16 12" width={size} height={(size / 16) * 12} shapeRendering="crispEdges" aria-hidden>
        {/* tab */}
        <rect x="1" y="1" width="5" height="1" fill={color} />
        <rect x="1" y="2" width="6" height="1" fill={color} />
        {/* body */}
        <rect x="1" y="3" width="14" height="8" fill={color} />
        {/* highlight */}
        <rect x="1" y="3" width="14" height="1" fill="white" fillOpacity="0.15" />
        {/* shadow */}
        <rect x="1" y="10" width="14" height="1" fill="black" fillOpacity="0.2" />
      </svg>
      {label && <span className="font-typewriter text-xs text-foreground/70">{label}</span>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Music player nav                                                    */
/* ------------------------------------------------------------------ */
const SECTION_IDS = ["about", "work", "skills", "research", "featured", "contact"] as const;
type SectionId = typeof SECTION_IDS[number];

function Equalizer({ playing }: { playing: boolean }) {
  return (
    <div className="flex h-4 items-end gap-[2px]">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="eq-bar block w-[3px] bg-[var(--folder-1)]"
          style={{
            height: "100%",
            animationDelay: `${i * 0.12}s`,
            animationPlayState: playing ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}

function PlayerNav({
  lang, setLang, current, setCurrent, playing, setPlaying,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  current: number;
  setCurrent: (i: number) => void;
  playing: boolean;
  setPlaying: (p: boolean) => void;
}) {
  const t = dict[lang];
  const go = (i: number) => {
    const idx = (i + SECTION_IDS.length) % SECTION_IDS.length;
    setCurrent(idx);
    const el = document.getElementById(SECTION_IDS[idx]);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setPlaying(true);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-6">
      <div className="glass-strong shadow-soft mx-auto flex max-w-5xl flex-col gap-3 rounded-2xl px-4 py-3 sm:flex-row sm:items-center sm:gap-5 sm:px-5">
        {/* now playing */}
        <div className="flex items-center gap-3 sm:min-w-0 sm:flex-1">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--folder-1)] text-[10px] text-primary-foreground shadow-pixel">
            <span className="font-typewriter tracking-widest">{t.tracks[current].n}</span>
          </div>
          <div className="min-w-0">
            <p className="font-mono-thin text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {t.nowPlaying}
            </p>
            <p className="font-typewriter truncate text-sm text-foreground sm:text-base">
              {t.tracks[current].title} <span className="text-muted-foreground">— {t.tracks[current].sub}</span>
            </p>
          </div>
          <div className="ml-auto sm:ml-3"><Equalizer playing={playing} /></div>
        </div>

        {/* controls */}
        <div className="flex items-center gap-1">
          <button onClick={() => go(current - 1)} aria-label="Previous"
            className="rounded-md p-2 text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground">
            <SkipBack className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause" : "Play"}
            className="rounded-md bg-foreground p-2 text-background transition hover:bg-foreground/85">
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button onClick={() => go(current + 1)} aria-label="Next"
            className="rounded-md p-2 text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground">
            <SkipForward className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <div className="mx-2 hidden h-5 w-px bg-foreground/10 sm:block" />
          <Volume2 className="hidden h-4 w-4 text-foreground/50 sm:block" strokeWidth={1.5} />

          {/* language */}
          <div className="ml-2 flex items-center rounded-md border border-foreground/10 bg-background/40 p-[2px] text-[11px]">
            <Languages className="ml-1 mr-1 h-3.5 w-3.5 text-foreground/50" strokeWidth={1.5} />
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={
                  "rounded px-2 py-1 font-typewriter uppercase tracking-wider transition " +
                  (lang === l
                    ? "bg-[var(--folder-1)] text-primary-foreground"
                    : "text-foreground/60 hover:text-foreground")
                }
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Main page                                                           */
/* ------------------------------------------------------------------ */
function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const t = dict[lang];

  // observer to sync current track with section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = SECTION_IDS.indexOf(e.target.id as SectionId);
            if (idx !== -1) setCurrent(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* soft decorative gradient orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full opacity-[0.18] blur-3xl"
          style={{ background: "radial-gradient(circle, var(--folder-1), transparent 60%)" }} />
        <div className="absolute top-1/2 -left-32 h-[26rem] w-[26rem] rounded-full opacity-[0.18] blur-3xl"
          style={{ background: "radial-gradient(circle, var(--folder-3), transparent 60%)" }} />
      </div>

      <PlayerNav
        lang={lang} setLang={setLang}
        current={current} setCurrent={setCurrent}
        playing={playing} setPlaying={setPlaying}
      />

      <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <Hero lang={lang} />
        <AboutSection lang={lang} />
        <WorkSection lang={lang} />
        <SkillsSection lang={lang} />
        <ResearchSection lang={lang} />
        <FeaturedSection lang={lang} />
        <ContactSection lang={lang} />
        <footer className="mt-20 border-t border-foreground/10 pt-6 text-center">
          <p className="font-typewriter text-xs text-muted-foreground">{t.footer}</p>
        </footer>
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-thin text-[11px] uppercase tracking-[0.28em] text-[var(--folder-1)]">
      {children}
    </p>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = dict[lang];
  return (
    <section className="mb-12">
      <p className="font-typewriter mb-3 text-sm text-muted-foreground">{t.playlist}</p>
      <h1 className="font-typewriter text-3xl leading-[1.15] text-foreground sm:text-5xl md:text-6xl">
        <span className="blink-caret">{t.tagline}</span>
      </h1>
      <p className="mt-5 max-w-xl font-mono-thin text-sm text-foreground/70 sm:text-base">
        {t.role}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-foreground/15" />
        <span className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          ↑ {t.scrollHint}
        </span>
      </div>
    </section>
  );
}

function AboutSection({ lang }: { lang: Lang }) {
  const t = dict[lang].about;
  return (
    <section id="about" className="scroll-mt-32 py-16">
      <Kicker>{t.kicker}</Kicker>
      <h2 className="mt-3 whitespace-pre-line text-3xl text-foreground sm:text-4xl">{t.title}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr] items-start">
        <div className="glass shadow-soft flex flex-col justify-between rounded-2xl p-6 sm:p-8">
          <div>
            <p className="font-mono-thin text-[15px] leading-relaxed text-foreground/80">{t.body}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span key={tag}
                  className="font-typewriter rounded-full border border-foreground/15 bg-background/50 px-3 py-1 text-xs text-foreground/75">
                  # {tag}
                </span>
              ))}
            </div>
            <a
              href="/CV-JhennySolis.pdf"
              download="CV-JhennySolis.pdf"
              className="font-typewriter shadow-pixel inline-flex items-center gap-2 rounded-md bg-[var(--folder-1)] px-4 py-2.5 text-xs text-primary-foreground transition hover:translate-y-[-1px]"
            >
              <FileText className="h-3.5 w-3.5" strokeWidth={1.5} />
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
        </div>
        <PixelPortrait />
      </div>
    </section>
  );
}

function PixelPortrait() {
  return (
    <div className="glass shadow-soft relative overflow-hidden rounded-2xl p-3">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src="/portrait.jpg"
          alt="Portrait illustration"
          className="block h-full w-full object-cover"
          style={{ aspectRatio: "3 / 4" }}
          loading="lazy"
        />
        <div className="scanlines pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--folder-1)]/30 to-transparent" />
        <div className="absolute left-3 top-3 rounded-md bg-background/70 px-2 py-1 backdrop-blur">
          <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-foreground/70">
            ~/portrait.jpg
          </p>
        </div>
      </div>
    </div>
  );
}

function WorkSection({ lang }: { lang: Lang }) {
  const t = dict[lang].work;
  const folderColors = ["var(--folder-1)", "var(--folder-2)", "var(--folder-3)"];
  return (
    <section id="work" className="scroll-mt-32 py-16">
      <Kicker>{t.kicker}</Kicker>
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{t.title}</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((it, i) => (
          <article key={it.title}
            className="glass shadow-soft group relative flex flex-col gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-pixel">
            <PixelFolder color={folderColors[i]} size={48} />
            <div>
              <p className="font-typewriter text-[11px] uppercase tracking-widest text-muted-foreground">/{it.tag}</p>
              <h3 className="mt-1 text-lg text-foreground">{it.title}</h3>
              <p className="mt-2 font-mono-thin text-sm text-foreground/70">{it.desc}</p>
            </div>
            <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-foreground/40 transition group-hover:text-[var(--folder-1)]"
              strokeWidth={1.5} />
          </article>
        ))}
      </div>
      <ProcessCarousel lang={lang} />
    </section>
  );
}

function SkillsSection({ lang }: { lang: Lang }) {
  return _SkillsSection({ lang });
}

function ProcessCarousel({ lang }: { lang: Lang }) {
  const t = dict[lang].process;
  const icons = [Lightbulb, Search, PenTool, Layers, Rocket];
  const folderVars = ["--folder-1", "--folder-2", "--folder-3", "--folder-2", "--folder-1"];
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSel = () => setSelected(api.selectedScrollSnap());
    onSel();
    api.on("select", onSel);
    api.on("reInit", onSel);
    return () => {
      api.off("select", onSel);
      api.off("reInit", onSel);
    };
  }, [api]);

  return (
    <div className="mt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Kicker>{t.kicker}</Kicker>
          <h3 className="font-typewriter mt-2 text-2xl text-foreground sm:text-3xl">{t.title}</h3>
        </div>
        <p className="font-typewriter text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {t.hint}
        </p>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={setApi}
        className="mt-6"
      >
        <CarouselContent className="-ml-3">
          {t.steps.map((step, i) => {
            const Icon = icons[i];
            const color = `var(${folderVars[i]})`;
            return (
              <CarouselItem key={step.title} className="pl-3 sm:basis-2/3 lg:basis-1/2">
                <article className="glass relative h-full pixel-corners p-6">
                  {/* top accent bar */}
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: color }} />
                  {/* giant step number watermark */}
                  <span
                    aria-hidden
                    className="font-typewriter pointer-events-none absolute -right-2 -top-3 select-none text-[110px] leading-none opacity-[0.06]"
                    style={{ color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center pixel-corners shadow-pixel"
                      style={{ background: color, color: "var(--primary-foreground)" }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <p className="font-typewriter text-[11px] uppercase tracking-widest text-muted-foreground">
                      {step.tag}
                    </p>
                  </div>

                  <h4 className="font-typewriter mt-5 text-2xl text-foreground">{step.title}</h4>
                  <p className="mt-3 font-mono-thin text-sm leading-relaxed text-foreground/75">
                    {step.desc}
                  </p>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="mt-6 flex items-center justify-between">
          {/* dots */}
          <div className="flex items-center gap-1.5">
            {t.steps.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Step ${i + 1}`}
                className={
                  "h-2 transition-all " +
                  (selected === i
                    ? "w-5 bg-[var(--folder-1)]"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40")
                }
              />
            ))}
          </div>
          {/* arrows */}
          <div className="relative flex items-center gap-2">
            <CarouselPrevious className="static h-9 w-9 translate-y-0 pixel-corners border border-foreground/15 bg-background/60 text-foreground hover:bg-[var(--folder-1)] hover:text-primary-foreground hover:shadow-pixel hover:translate-y-[-1px] transition-all" />
            <CarouselNext className="static h-9 w-9 translate-y-0 pixel-corners border border-foreground/15 bg-background/60 text-foreground hover:bg-[var(--folder-1)] hover:text-primary-foreground hover:shadow-pixel hover:translate-y-[-1px] transition-all" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

function _SkillsSection({ lang }: { lang: Lang }) {
  const t = dict[lang].skills;
  const PowerBiIconWrap: IconType = ((props: { className?: string }) => (
    <BarChart3 className={props.className} strokeWidth={1.5} />
  )) as IconType;
  const groups: { id: string; label: { es: string; en: string }; items: { Icon: IconType; name: string }[] }[] = [
    {
      id: "design",
      label: { es: "Diseño", en: "Design" },
      items: [
        { Icon: SiFigma, name: "Figma" },
        { Icon: DiPhotoshop, name: "Photoshop" },
        { Icon: DiIllustrator, name: "Illustrator" },
        { Icon: SiCanva, name: "Canva" },
        { Icon: SiMiro, name: "Miro" },
      ],
    },
    {
      id: "code",
      label: { es: "Código", en: "Code" },
      items: [
        { Icon: SiReact, name: "React" },
        { Icon: SiJavascript, name: "JavaScript" },
        { Icon: SiPython, name: "Python" },
        { Icon: SiPhp, name: "PHP" },
        { Icon: SiHtml5, name: "HTML5" },
        { Icon: FaCss3Alt, name: "CSS3" },
        { Icon: SiTailwindcss, name: "Tailwind" },
        { Icon: SiNodedotjs, name: "Node.js" },
      ],
    },
    {
      id: "tools",
      label: { es: "Herramientas", en: "Tools" },
      items: [
        { Icon: SiGit, name: "Git" },
        { Icon: SiGithub, name: "GitHub" },
        { Icon: SiJira, name: "Jira" },
        { Icon: SiNotion, name: "Notion" },
        { Icon: SiSlack, name: "Slack" },
      ],
    },
    {
      id: "data",
      label: { es: "Datos", en: "Data" },
      items: [
        { Icon: DiMsqlServer, name: "SQL Server" },
        { Icon: SiPostgresql, name: "PostgreSQL" },
        { Icon: PowerBiIconWrap, name: "Power BI" },
      ],
    },
  ];
  const [active, setActive] = useState<string>("all");
  const filtered =
    active === "all" ? groups.flatMap((g) => g.items) : (groups.find((g) => g.id === active)?.items ?? []);
  const filters = [{ id: "all", label: { es: "Todo", en: "All" } }, ...groups];
  return (
    <section id="skills" className="scroll-mt-32 py-16">
      <Kicker>{t.kicker}</Kicker>
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{t.title}</h2>
      <p className="mt-3 max-w-xl font-mono-thin text-sm text-foreground/65">
        {lang === "es"
          ? "Mi caja de herramientas favorita — filtra por categoría."
          : "My favourite toolbox — filter by category."}
      </p>

      {/* category tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={
              "font-typewriter rounded-full px-3.5 py-1.5 text-xs uppercase tracking-widest transition " +
              (active === f.id
                ? "bg-[var(--folder-1)] text-primary-foreground shadow-pixel"
                : "border border-foreground/15 bg-background/40 text-foreground/70 hover:text-foreground")
            }
          >
            {f.label[lang]}
          </button>
        ))}
      </div>

      {/* icon wall */}
      <div className="mt-7 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
        {filtered.map(({ Icon, name }) => (
          <div
            key={name}
            className="group relative flex aspect-square items-center justify-center pixel-corners border border-foreground/15 bg-background/40 shadow-pixel transition duration-300 hover:scale-110 hover:-translate-y-1 hover:border-[var(--folder-1)] hover:bg-[var(--folder-1)]/10 hover:z-20"
          >
            {/* scanline retro effect inside each shortcut on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pixel-corners overflow-hidden">
              <div className="scanlines absolute inset-0 opacity-20 mix-blend-overlay" />
            </div>
            <Icon className="h-6 w-6 text-foreground/80 transition duration-300 group-hover:text-[var(--folder-1)]" />

            {/* Tooltip on hover */}
            <span className="font-typewriter pointer-events-none absolute -bottom-8 scale-0 rounded bg-foreground px-2 py-1 text-[9px] uppercase tracking-wider text-background transition duration-200 group-hover:scale-100 z-10 whitespace-nowrap shadow-pixel">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedSection({ lang }: { lang: Lang }) {
  return _FeaturedSection({ lang });
}

function ResearchSection({ lang }: { lang: Lang }) {
  const t = dict[lang].research;
  return (
    <section id="research" className="scroll-mt-32 py-16">
      <Kicker>{t.kicker}</Kicker>
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{t.title}</h2>
      <p className="mt-4 max-w-2xl font-mono-thin text-sm text-foreground/75 sm:text-base">{t.body}</p>

      <ol className="mt-8 space-y-4">
        {t.items.map((it, i) => (
          <li key={it.title}>
            <div
              className="glass shadow-soft group relative block overflow-hidden rounded-2xl p-5 sm:p-6"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{ background: `var(--folder-${(i % 3) + 1})` }}
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono-thin text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {it.venue}
                  </span>
                  <span className="h-3 w-px bg-foreground/15" />
                  <div className="flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-[var(--folder-1)]" strokeWidth={1.5} />
                    <span className="font-mono-thin text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                      {it.role}
                    </span>
                  </div>
                </div>
                <h3 className="mt-2 text-base leading-snug text-foreground sm:text-lg">
                  {it.title}
                </h3>
                <p className="mt-2 font-mono-thin text-sm leading-relaxed text-foreground/70">
                  {it.abstract}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {it.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-typewriter rounded-full border border-foreground/15 bg-background/50 px-2.5 py-0.5 text-[10px] text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function _FeaturedSection({ lang }: { lang: Lang }) {
  const t = dict[lang].featured;
  const icons = [Users, Megaphone, Heart];
  return (
    <section id="featured" className="scroll-mt-32 py-16">
      <Kicker>{t.kicker}</Kicker>
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{t.title}</h2>
      <p className="mt-4 max-w-2xl font-mono-thin text-sm text-foreground/75 sm:text-base">{t.body}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.items.map((it, i) => {
          const Icon = icons[i];
          return (
            <div key={it.title}
              className="glass shadow-soft relative overflow-hidden rounded-2xl p-5">
              <div className="absolute inset-x-0 top-0 h-1"
                style={{ background: `var(--folder-${i + 1})` }} />
              <Icon className="h-6 w-6 text-[var(--folder-1)]" strokeWidth={1.25} />
              <h3 className="mt-3 text-base text-foreground">{it.title}</h3>
              <p className="mt-1 font-mono-thin text-sm text-foreground/70">{it.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection({ lang }: { lang: Lang }) {
  const t = dict[lang].contact;
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  type Social = {
    Icon: IconType;
    label: string;
    href: string;
  };
  const GlobeIconWrap: IconType = ((props) => (
    <Globe {...(props as React.SVGProps<SVGSVGElement>)} strokeWidth={1.5} />
  )) as IconType;
  const socials: Social[] = [
    { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jhennysolis/" },
    { Icon: SiGithub, label: "GitHub", href: "https://github.com/jhenncompile" },
    { Icon: SiStackoverflow, label: "StackOverflow", href: "https://stackoverflow.com/users/32866252/jhenny-solis" },
    { Icon: SiX, label: "X / Twitter", href: "https://x.com/jhennsol_" },
    { Icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/jhennsol/" },
    { Icon: SiYoutube, label: "YouTube", href: "https://www.youtube.com/@jhennsol" },
    { Icon: SiMedium, label: "Medium", href: "https://medium.com/@jhennsol" },
    { Icon: SiTelegram, label: "Telegram", href: "https://t.me/Jhennsol" },
    { Icon: GlobeIconWrap, label: "Web", href: "https://jhenncompile.onrender.com/" },
  ];

  return (
    <section id="contact" className="scroll-mt-32 py-16">
      <Kicker>{t.kicker}</Kicker>
      <h2 className="mt-3 whitespace-pre-line text-3xl text-foreground sm:text-5xl">{t.title}</h2>
      <p className="mt-4 max-w-2xl font-mono-thin text-sm text-foreground/75 sm:text-base">{t.body}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_1fr]">
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            formRef.current?.reset();
            setTimeout(() => setSent(false), 4000);
          }}
          className="glass shadow-soft flex flex-col gap-3 rounded-2xl p-5"
        >
          <input required name="name" placeholder={t.placeholderName}
            className="font-typewriter rounded-md border border-foreground/10 bg-background/50 px-3 py-2.5 text-sm placeholder:text-foreground/40 focus:border-[var(--folder-1)] focus:outline-none" />
          <input required type="email" name="email" placeholder={t.placeholderEmail}
            className="font-typewriter rounded-md border border-foreground/10 bg-background/50 px-3 py-2.5 text-sm placeholder:text-foreground/40 focus:border-[var(--folder-1)] focus:outline-none" />
          <textarea required name="message" rows={5} placeholder={t.placeholderMsg}
            className="font-typewriter resize-none rounded-md border border-foreground/10 bg-background/50 px-3 py-2.5 text-sm placeholder:text-foreground/40 focus:border-[var(--folder-1)] focus:outline-none" />
          <button type="submit"
            className="font-typewriter shadow-pixel mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--folder-1)] px-4 py-2.5 text-sm text-primary-foreground transition hover:translate-y-[-1px]">
            <Send className="h-4 w-4" strokeWidth={1.5} /> {t.send}
          </button>
          {sent && (
            <p className="font-typewriter text-xs text-[var(--folder-1)]">{t.sent}</p>
          )}
        </form>

        <div className="glass shadow-soft flex flex-col justify-between rounded-2xl p-6 relative overflow-hidden">
          {/* Top terminal bar style */}
          <div className="flex items-center justify-between border-b border-foreground/15 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--folder-1)]/75" />
              <span className="h-2 w-2 rounded-full bg-[var(--folder-2)]/75" />
              <span className="h-2 w-2 rounded-full bg-[var(--folder-3)]/75" />
              <span className="font-typewriter ml-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                links.exe
              </span>
            </div>
            <span className="font-mono-thin text-[10px] text-foreground/45">v1.0.0</span>
          </div>

          {/* Icons Grid */}
          <div className="my-auto grid grid-cols-3 gap-x-4 gap-y-6 justify-items-center items-center py-4">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className="group relative flex h-14 w-14 items-center justify-center pixel-corners border border-foreground/15 bg-background/40 shadow-pixel transition duration-300 hover:scale-110 hover:-translate-y-1 hover:border-[var(--folder-1)] hover:bg-[var(--folder-1)]/10"
              >
                {/* scanline retro effect inside each shortcut on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pixel-corners overflow-hidden">
                  <div className="scanlines absolute inset-0 opacity-20 mix-blend-overlay" />
                </div>
                <Icon className="h-6 w-6 text-foreground/80 transition duration-300 group-hover:text-[var(--folder-1)]" />

                {/* Tooltip on hover */}
                <span className="font-typewriter pointer-events-none absolute -bottom-8 scale-0 rounded bg-foreground px-2 py-1 text-[9px] uppercase tracking-wider text-background transition duration-200 group-hover:scale-100 z-10 whitespace-nowrap shadow-pixel">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="border-t border-foreground/10 pt-4 flex justify-between items-center text-[10px] font-mono-thin text-foreground/50">
            <span>[Status: Ready]</span>
            <span>Jhenny Solis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
