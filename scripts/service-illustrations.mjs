// 서비스 상세 페이지용 일러스트 (인라인 SVG, 브랜드 컬러 #0B3D6A / #2E7BB8)
const D = '#0B3D6A';
const B = '#2E7BB8';
const L = '#DCEBF7';
const LL = '#F1F7FC';

const wrap = (label, inner) => `<svg viewBox="0 0 480 360" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="480" height="360" rx="40" fill="${LL}"/>
  ${inner}
</svg>`;

export const illustrations = {
  hardware: wrap('다층 PCB 회로 기판 일러스트', `
  <rect x="60" y="50" width="360" height="260" rx="22" fill="${D}"/>
  <rect x="74" y="64" width="332" height="232" rx="14" fill="#0F4C82"/>
  <g stroke="${B}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
    <path d="M110 110 H170 V150 H210"/>
    <path d="M110 250 H160 V210 H210"/>
    <path d="M290 130 H340 V100 H380"/>
    <path d="M290 230 H350 V260 H380"/>
    <path d="M250 110 V80"/>
    <path d="M250 250 V280"/>
    <path d="M120 180 H210"/>
    <path d="M290 180 H370"/>
  </g>
  <rect x="200" y="120" width="100" height="120" rx="10" fill="${D}" stroke="${L}" stroke-width="3"/>
  <g fill="${L}">
    ${[0,1,2,3,4,5].map(i => `<rect x="${186}" y="${132 + i * 18}" width="14" height="6" rx="2"/><rect x="${300}" y="${132 + i * 18}" width="14" height="6" rx="2"/>`).join('')}
  </g>
  <text x="250" y="186" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="${L}">MCU</text>
  <rect x="96" y="96" width="28" height="28" rx="6" fill="${B}"/>
  <rect x="96" y="236" width="28" height="28" rx="6" fill="${B}"/>
  <rect x="370" y="86" width="22" height="28" rx="4" fill="#F5B841"/>
  <rect x="370" y="246" width="22" height="28" rx="4" fill="#F5B841"/>
  <g fill="#9CC8EA">
    <circle cx="110" cy="180" r="7"/><circle cx="380" cy="180" r="7"/><circle cx="250" cy="74" r="6"/><circle cx="250" cy="286" r="6"/>
  </g>
  <g fill="none" stroke="#F5B841" stroke-width="2" opacity="0.8">
    <path d="M330 60 q10 -14 20 0 t20 0 t20 0"/>
  </g>`),

  firmware: wrap('MCU 칩과 펌웨어 코드 일러스트', `
  <rect x="40" y="60" width="230" height="240" rx="18" fill="${D}"/>
  <circle cx="64" cy="82" r="5" fill="#F26D6D"/><circle cx="80" cy="82" r="5" fill="#F5B841"/><circle cx="96" cy="82" r="5" fill="#5CC98A"/>
  <g font-family="monospace" font-size="12">
    <text x="60" y="118" fill="#9CC8EA">void</text><text x="96" y="118" fill="#FFFFFF">SystemInit(void) {</text>
    <text x="76" y="140" fill="#F5B841">HAL_Init</text><text x="140" y="140" fill="#FFFFFF">();</text>
    <text x="76" y="162" fill="#F5B841">GPIO_Config</text><text x="164" y="162" fill="#FFFFFF">();</text>
    <text x="76" y="184" fill="#F5B841">BLE_Start</text><text x="148" y="184" fill="#FFFFFF">();</text>
    <text x="76" y="206" fill="#9CC8EA">while</text><text x="116" y="206" fill="#FFFFFF">(1) {</text>
    <text x="92" y="228" fill="#F5B841">Task_Run</text><text x="156" y="228" fill="#FFFFFF">();</text>
    <text x="76" y="250" fill="#FFFFFF">}</text>
    <text x="60" y="272" fill="#FFFFFF">}</text>
  </g>
  <path d="M276 180 H310" stroke="${B}" stroke-width="4" stroke-dasharray="6 6"/>
  <rect x="320" y="120" width="120" height="120" rx="14" fill="${B}"/>
  <rect x="340" y="140" width="80" height="80" rx="8" fill="${D}"/>
  <g fill="${B}">
    ${[0,1,2,3].map(i => `<rect x="${342 + i * 22}" y="104" width="8" height="16" rx="2"/><rect x="${342 + i * 22}" y="240" width="8" height="16" rx="2"/><rect x="304" y="${142 + i * 22}" width="16" height="8" rx="2"/><rect x="440" y="${142 + i * 22}" width="16" height="8" rx="2"/>`).join('')}
  </g>
  <text x="380" y="186" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="${L}">MCU</text>
  <path d="M300 300 h20 v-18 h20 v18 h20 v-18 h20 v18 h20 v-18 h20 v18 h20" fill="none" stroke="${D}" stroke-width="3"/>`),

  'mobile-app': wrap('스마트폰 앱과 기기 블루투스 연동 일러스트', `
  <rect x="70" y="40" width="150" height="280" rx="26" fill="${D}"/>
  <rect x="82" y="64" width="126" height="236" rx="12" fill="#FFFFFF"/>
  <rect x="122" y="50" width="46" height="6" rx="3" fill="${B}"/>
  <rect x="96" y="80" width="98" height="18" rx="6" fill="${L}"/>
  <circle cx="145" cy="152" r="38" fill="none" stroke="${L}" stroke-width="10"/>
  <path d="M145 114 a38 38 0 0 1 36 50" fill="none" stroke="${B}" stroke-width="10" stroke-linecap="round"/>
  <text x="145" y="158" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="800" fill="${D}">78%</text>
  <rect x="96" y="206" width="98" height="14" rx="5" fill="${L}"/>
  <rect x="96" y="228" width="70" height="14" rx="5" fill="${L}"/>
  <rect x="96" y="260" width="98" height="26" rx="13" fill="${B}"/>
  <text x="145" y="278" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">기기 연결됨</text>
  <g fill="none" stroke="${B}" stroke-width="5" stroke-linecap="round">
    <path d="M250 150 q18 30 0 60" opacity="0.5"/>
    <path d="M268 136 q28 44 0 88" opacity="0.75"/>
    <path d="M286 122 q38 58 0 116"/>
  </g>
  <rect x="320" y="130" width="110" height="110" rx="30" fill="#FFFFFF" stroke="${D}" stroke-width="5"/>
  <circle cx="375" cy="185" r="26" fill="${L}"/>
  <path d="M367 172 l18 13 -9 7 v-27 l9 7 -18 13" fill="none" stroke="${D}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="404" cy="152" r="5" fill="#5CC98A"/>`),

  'embedded-linux': wrap('임베디드 리눅스 보드와 터미널 일러스트', `
  <rect x="40" y="70" width="250" height="200" rx="16" fill="${D}"/>
  <circle cx="62" cy="92" r="5" fill="#F26D6D"/><circle cx="78" cy="92" r="5" fill="#F5B841"/><circle cx="94" cy="92" r="5" fill="#5CC98A"/>
  <g font-family="monospace" font-size="12">
    <text x="58" y="128" fill="#5CC98A">root@itbit</text><text x="136" y="128" fill="#FFFFFF">:~# uname -r</text>
    <text x="58" y="150" fill="#9CC8EA">6.1.0-custom</text>
    <text x="58" y="174" fill="#5CC98A">root@itbit</text><text x="136" y="174" fill="#FFFFFF">:~# insmod drv.ko</text>
    <text x="58" y="196" fill="#9CC8EA">[ OK ] sensor driver loaded</text>
    <text x="58" y="220" fill="#5CC98A">root@itbit</text><text x="136" y="220" fill="#FFFFFF">:~# _</text>
  </g>
  <rect x="270" y="150" width="170" height="150" rx="14" fill="#1E8E5A"/>
  <rect x="282" y="162" width="146" height="126" rx="8" fill="#23A066"/>
  <rect x="330" y="196" width="56" height="56" rx="6" fill="${D}"/>
  <text x="358" y="229" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="${L}">SoC</text>
  <g fill="#F5B841">${[0,1,2,3,4,5,6,7,8,9].map(i => `<rect x="${292 + i * 13}" y="170" width="7" height="12" rx="1.5"/>`).join('')}</g>
  <rect x="296" y="260" width="26" height="20" rx="3" fill="#C7D2DC"/>
  <rect x="396" y="200" width="26" height="40" rx="3" fill="#C7D2DC"/>
  <rect x="296" y="202" width="22" height="22" rx="3" fill="${D}"/>`),

  'pc-software': wrap('PC 프로그램으로 장비를 제어하는 일러스트', `
  <rect x="40" y="50" width="280" height="190" rx="16" fill="${D}"/>
  <rect x="52" y="62" width="256" height="166" rx="8" fill="#FFFFFF"/>
  <rect x="52" y="62" width="256" height="24" rx="8" fill="${L}"/>
  <circle cx="68" cy="74" r="4" fill="#F26D6D"/><circle cx="82" cy="74" r="4" fill="#F5B841"/><circle cx="96" cy="74" r="4" fill="#5CC98A"/>
  <rect x="64" y="98" width="70" height="118" rx="6" fill="${LL}"/>
  <rect x="72" y="108" width="54" height="10" rx="3" fill="${B}"/>
  <rect x="72" y="126" width="44" height="8" rx="3" fill="#C7D2DC"/>
  <rect x="72" y="142" width="50" height="8" rx="3" fill="#C7D2DC"/>
  <rect x="72" y="158" width="38" height="8" rx="3" fill="#C7D2DC"/>
  <rect x="72" y="190" width="54" height="18" rx="9" fill="${D}"/>
  <polyline points="148,190 170,170 192,180 214,140 236,150 258,112 290,124" fill="none" stroke="${B}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="146" y1="206" x2="296" y2="206" stroke="#C7D2DC" stroke-width="2"/>
  <rect x="160" y="240" width="40" height="30" fill="${D}"/>
  <rect x="130" y="268" width="100" height="12" rx="6" fill="${D}"/>
  <path d="M320 150 C 350 150, 340 230, 372 230" fill="none" stroke="${B}" stroke-width="5" stroke-linecap="round"/>
  <rect x="360" y="190" width="90" height="110" rx="14" fill="#FFFFFF" stroke="${D}" stroke-width="5"/>
  <rect x="376" y="208" width="58" height="30" rx="5" fill="${D}"/>
  <text x="405" y="228" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#5CC98A">24.6</text>
  <circle cx="388" cy="264" r="9" fill="${B}"/><circle cx="420" cy="264" r="9" fill="#F5B841"/>`),

};
