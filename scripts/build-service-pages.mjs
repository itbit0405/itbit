// 서비스 상세 페이지(정적 HTML) 생성기
// 사용법: npm run gen:services  →  services/<slug>/index.html 생성
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { services } from './service-pages.data.mjs';
import { illustrations } from './service-illustrations.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.itbit.co.kr';
const bySlug = Object.fromEntries(services.map(s => [s.slug, s]));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const icon = {
  check: '<svg viewBox="0 0 24 24" class="w-5 h-5 shrink-0 mt-0.5 text-[#2E7BB8]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
};

function page(s) {
  const url = `${SITE}/services/${s.slug}/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: s.title,
        serviceType: s.title,
        description: s.description,
        url,
        areaServed: 'KR',
        provider: {
          '@type': 'Organization',
          '@id': `${SITE}/#organization`,
          name: '잇빗',
          alternateName: 'ITBIT',
          url: `${SITE}/`,
          telephone: '+82-505-6552-7778',
          email: 'itbit@itbit.co.kr',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: '서비스', item: `${SITE}/#services` },
          { '@type': 'ListItem', position: 3, name: s.navTitle, item: url },
        ],
      },
    ],
  };

  const otherNav = services
    .map(o => `<a href="/services/${o.slug}/" class="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${o.slug === s.slug ? 'bg-[#0B3D6A] text-white' : 'bg-white text-slate-600 hover:text-[#2E7BB8] border border-slate-200'}"${o.slug === s.slug ? ' aria-current="page"' : ''}>${esc(o.navTitle)}</a>`)
    .join('\n            ');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(s.metaTitle)}</title>
    <meta name="description" content="${esc(s.description)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${url}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ITBIT 잇빗">
    <meta property="og:locale" content="ko_KR">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${esc(s.metaTitle)}">
    <meta property="og:description" content="${esc(s.description)}">
    <meta property="og:image" content="${SITE}/logo.png">
    <link rel="icon" type="image/png" href="/logo.png">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@100;300;400;600;700;900&display=swap" rel="stylesheet">
    <style>body { font-family: 'Pretendard', sans-serif; } html { scroll-behavior: smooth; }</style>
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
</head>
<body class="bg-slate-50 text-slate-900 font-light antialiased break-keep">

<header class="sticky top-0 z-50 bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" class="flex items-center gap-3">
            <img src="/logo.png" alt="ITBIT" class="h-10 w-auto rounded-lg">
            <span class="text-xl md:text-2xl font-black tracking-tighter uppercase text-[#0B3D6A]">ITBIT</span>
        </a>
        <nav class="flex gap-6 lg:gap-8 font-semibold text-sm items-center text-[#0B3D6A]">
            <a href="/#vision" class="hidden md:inline hover:text-[#2E7BB8]">가치</a>
            <a href="/#services" class="hidden md:inline hover:text-[#2E7BB8]">분야</a>
            <a href="/#tech" class="hidden md:inline hover:text-[#2E7BB8]">기술</a>
            <a href="/#process" class="hidden md:inline hover:text-[#2E7BB8]">프로세스</a>
            <a href="/#contact" class="px-5 py-2 bg-[#2E7BB8] text-white rounded-full text-xs font-bold shadow-md hover:bg-[#0B3D6A] transition">문의하기</a>
        </nav>
    </div>
</header>

<main>
    <section class="bg-[#0B3D6A] text-white px-6 pt-14 pb-20 md:pt-20 md:pb-28">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <nav aria-label="breadcrumb" class="text-sm text-slate-300 mb-8">
                    <a href="/" class="hover:text-white">홈</a> <span class="mx-2">/</span>
                    <a href="/#services" class="hover:text-white">서비스</a> <span class="mx-2">/</span>
                    <span class="text-white">${esc(s.navTitle)}</span>
                </nav>
                <p class="text-[#7FB6E3] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">${esc(s.eyebrow)}</p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">${esc(s.title)}</h1>
                <p class="text-lg md:text-xl text-slate-200 leading-relaxed mb-10">${esc(s.lead)}</p>
                <div class="flex flex-wrap gap-4">
                    <a href="/#contact" class="inline-flex items-center gap-2 px-7 py-4 bg-[#2E7BB8] rounded-full font-bold hover:bg-white hover:text-[#0B3D6A] transition">무료 상담 신청 ${icon.arrow}</a>
                    <a href="#scope" class="inline-flex items-center gap-2 px-7 py-4 border border-white/30 rounded-full font-bold hover:bg-white/10 transition">제공 범위 보기</a>
                </div>
            </div>
            <div class="max-w-xl w-full mx-auto lg:ml-auto">
                ${illustrations[s.slug]}
            </div>
        </div>
    </section>

    <div class="bg-slate-100 border-b border-slate-200 px-6 py-4">
        <div class="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
            ${otherNav}
        </div>
    </div>

    <section class="px-6 py-20 md:py-28">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-sm mb-4">Why ITBIT</h2>
            <p class="text-3xl md:text-4xl font-black text-[#0B3D6A] mb-10 tracking-tight">잇빗에 맡기면 다른 점</p>
            <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
                ${s.intro.map(p => `<p>${esc(p)}</p>`).join('\n                ')}
            </div>
        </div>
    </section>

    <section class="px-6 py-20 md:py-28 bg-white">
        <div class="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
            <div class="md:col-span-2">
                <h2 class="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-sm mb-4">Use Cases</h2>
                <p class="text-3xl md:text-4xl font-black text-[#0B3D6A] tracking-tight">이런 프로젝트에<br>맡겨 주세요</p>
            </div>
            <ul class="md:col-span-3 space-y-4">
                ${s.useCases.map(u => `<li class="flex gap-4 p-6 rounded-2xl bg-slate-50 text-lg text-slate-700">${icon.check}<span>${esc(u)}</span></li>`).join('\n                ')}
            </ul>
        </div>
    </section>

    <section id="scope" class="px-6 py-20 md:py-28 bg-slate-100 scroll-mt-20">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-sm mb-4">Scope</h2>
                <p class="text-3xl md:text-5xl font-black text-[#0B3D6A] tracking-tight">제공 범위</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${s.scope.map(([t, d], i) => `<div class="p-8 bg-white rounded-[32px] shadow-sm">
                    <span class="text-sm font-black text-[#2E7BB8]">${String(i + 1).padStart(2, '0')}</span>
                    <h3 class="text-xl font-bold text-[#0B3D6A] mt-3 mb-3">${esc(t)}</h3>
                    <p class="text-slate-500 leading-relaxed">${esc(d)}</p>
                </div>`).join('\n                ')}
            </div>
        </div>
    </section>

    <section class="px-6 py-20 md:py-28 bg-white">
        <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-sm mb-4">Tech Stack</h2>
            <p class="text-3xl md:text-4xl font-black text-[#0B3D6A] tracking-tight mb-12">사용 기술</p>
            <ul class="flex flex-wrap justify-center gap-3">
                ${s.tech.map(t => `<li class="px-5 py-3 rounded-full bg-slate-50 border border-slate-200 font-semibold text-slate-700">${esc(t)}</li>`).join('\n                ')}
            </ul>
        </div>
    </section>

    <section class="px-6 py-20 md:py-28 bg-[#0B3D6A] text-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-[#7FB6E3] font-bold tracking-[0.3em] uppercase text-sm mb-4">Process</h2>
                <p class="text-3xl md:text-5xl font-black tracking-tight">진행 절차</p>
            </div>
            <ol class="grid md:grid-cols-3 gap-6">
                ${s.steps.map(([t, d], i) => `<li class="p-8 rounded-[32px] bg-white/5 border border-white/10">
                    <span class="inline-flex w-12 h-12 rounded-full bg-[#2E7BB8] items-center justify-center font-black text-lg mb-6">${i + 1}</span>
                    <h3 class="text-xl font-bold mb-3">${esc(t)}</h3>
                    <p class="text-slate-300 leading-relaxed">${esc(d)}</p>
                </li>`).join('\n                ')}
            </ol>
        </div>
    </section>

    <section class="px-6 py-20 md:py-28">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-sm mb-4">Related</h2>
            <p class="text-3xl md:text-4xl font-black text-[#0B3D6A] tracking-tight mb-12">함께 맡기면 좋은 서비스</p>
            <div class="grid md:grid-cols-3 gap-6">
                ${s.related.map(r => bySlug[r]).map(o => `<a href="/services/${o.slug}/" class="group p-8 bg-white rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                    <h3 class="text-xl font-bold text-[#0B3D6A] mb-3">${esc(o.title)}</h3>
                    <p class="text-slate-500 leading-relaxed mb-6">${esc(o.lead.split('. ')[0])}.</p>
                    <span class="inline-flex items-center gap-2 text-[#2E7BB8] font-bold">자세히 보기 ${icon.arrow}</span>
                </a>`).join('\n                ')}
            </div>
        </div>
    </section>

    <section class="px-6 pb-24">
        <div class="max-w-7xl mx-auto rounded-[48px] bg-[#2E7BB8] text-white p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
                <p class="text-3xl md:text-4xl font-black tracking-tight mb-4">${esc(s.navTitle)}, 잇빗과 상의해 보세요</p>
                <p class="text-lg text-blue-50">아이디어만 있어도 괜찮습니다. 전문 엔지니어가 직접 검토해 드립니다.</p>
            </div>
            <div class="flex flex-col gap-3 shrink-0">
                <a href="/#contact" class="px-8 py-4 bg-white text-[#0B3D6A] rounded-full font-bold text-center hover:bg-[#0B3D6A] hover:text-white transition">상담 신청하기</a>
                <a href="tel:050-6552-7778" class="text-center font-bold text-blue-50 hover:text-white">050-6552-7778</a>
            </div>
        </div>
    </section>
</main>

<footer class="bg-slate-900 text-slate-400 py-12 px-6 text-sm">
    <div class="max-w-7xl mx-auto">
        <div class="border-b border-white/5 pb-6 mb-6 space-y-6">
            <a href="/" class="flex items-center gap-3">
                <img src="/logo.png" alt="ITBIT" class="w-10 h-10 object-contain">
                <span class="text-2xl font-black text-white tracking-tighter uppercase">ITBIT</span>
            </a>
            <nav class="flex flex-wrap gap-x-6 gap-y-2">
                ${services.map(o => `<a href="/services/${o.slug}/" class="hover:text-white">${esc(o.navTitle)}</a>`).join('\n                ')}
            </nav>
            <address class="not-italic space-y-3 leading-relaxed font-light">
                <p class="flex items-start gap-4"><span class="font-bold text-slate-600 uppercase text-[10px] w-16 pt-1">Address</span> <span>서울특별시 금천구 가산디지털1로 120<br>G밸리 창업큐브 807호</span></p>
                <p class="flex items-center gap-4"><span class="font-bold text-slate-600 uppercase text-[10px] w-16">Tel</span> 050-6552-7778</p>
                <p class="flex items-center gap-4"><span class="font-bold text-slate-600 uppercase text-[10px] w-16">Email</span> <a href="mailto:itbit@itbit.co.kr" class="hover:text-white">itbit@itbit.co.kr</a></p>
            </address>
        </div>
        <p class="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-600">© 2026 ITBIT Co., Ltd. All rights reserved.</p>
    </div>
</footer>

</body>
</html>
`;
}

for (const s of services) {
  const out = join(ROOT, 'services', s.slug, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(s));
  console.log('generated', `services/${s.slug}/index.html`);
}
