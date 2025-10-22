import Link from "next/link";

const features = [
  {
    title: "图片压缩",
    description: "智能调整尺寸与质量，保持清晰度同时减少体积。",
    href: "/compress",
  },
  {
    title: "抠图去背景",
    description: "一键分离前景与背景，迅速完成高质量抠图。",
    href: "/remove-bg",
  },
  {
    title: "图片识别",
    description: "精准识别图片内容与文字，支持多种场景解析。",
    href: "/recognize",
  },
  {
    title: "AI 生图",
    description: "基于提示生成创意视觉作品，满足个性化需求。",
    href: "/generate",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6 py-16">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">图片综合处理平台</h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            集压缩、去背景、识别、AI 生图于一体，一站式提升创作效率。
          </p>
        </div>
        <div className="mt-12 grid w-full gap-6 md:mt-16 md:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
                <span className="text-xl text-slate-300 transition group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
