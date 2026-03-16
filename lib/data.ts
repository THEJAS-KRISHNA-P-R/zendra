/* ─────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS (exact from Framer DOM)
───────────────────────────────────────────────────────────────────────── */
export const TOKENS = {
  white: 'rgb(255, 255, 255)',
  dark: 'rgb(22, 22, 20)',
  blue: 'rgba(24, 120, 222, 1)',
  cream: 'rgb(251, 248, 233)',
  pink: 'rgb(252, 206, 240)',
  yellow: 'rgb(244, 255, 119)',
  lightBlue: 'rgb(101, 157, 245)',
  orange: 'rgb(237, 93, 58)',
  green: 'rgb(55, 182, 105)',
  gold: 'rgb(255, 211, 24)',
  gray: 'rgb(59, 59, 59)',
}

/* ─────────────────────────────────────────────────────────────────────────
   SERVICES  (exact order + colors from DOM)
───────────────────────────────────────────────────────────────────────── */
export const SERVICES = [
  {
    title: 'SEO Digital Strategy',
    desc: 'We craft customized marketing roadmaps that align with your goals — blending research, creativity.',
    bg: 'rgb(252, 206, 240)',
    textColor: 'rgb(22, 22, 20)',
    img: '/T1nJDQ6FGv3QidAJIjDXJJis2oU.svg',
    href: '/services/seo-digital-strategy',
  },
  {
    title: 'Branding & Creative Design',
    desc: "Brand identity that stands out. From logo to visual storytelling, we bring your brand's personality to life.",
    bg: 'rgb(244, 255, 119)',
    textColor: 'rgb(22, 22, 20)',
    img: '/TbwVAL3nmCoUvAkSi50PfLe4.svg',
    href: '/services/branding-creative-design',
  },
  {
    title: 'Social Media Marketing',
    desc: 'Engage your audience and grow your community with strategic social media campaigns.',
    bg: 'rgb(101, 157, 245)',
    textColor: 'rgb(255, 255, 255)',
    img: '/Qi6rFCH6DfkbgZT3dhKF6Nc70YE.svg',
    href: '/services/social-media-marketing',
  },
  {
    title: 'Paid Advertising (PPC)',
    desc: 'Maximize ROI through targeted ad campaigns on Google, Meta, and beyond designed to boost visible growth.',
    bg: 'rgb(237, 93, 58)',
    textColor: 'rgb(255, 255, 255)',
    img: '/D76fksoewqj1qpkY87NtVx2Y0RU.svg',
    href: '/services/paid-advertising',
  },
]

/* ─────────────────────────────────────────────────────────────────────────
   PORTFOLIO  (exact order, colors, sizes from DOM)
   size: 'small' = 1 col  |  'large' = 2 col
───────────────────────────────────────────────────────────────────────── */
export const PORTFOLIO = [
  // Row 1
  { name: 'Astra Glow', cat: 'SEO', year: '2023', size: 'small', bg: 'rgb(252, 206, 240)', light: true, img: 'https://framerusercontent.com/images/MXDrMwFk0UtHXWi3bKIbDvTL6I.png', href: '/work/astra-glow' },
  { name: 'Nova Cosmetics', cat: 'PPC', year: '2023', size: 'large', bg: 'rgb(101, 157, 245)', light: false, img: 'https://framerusercontent.com/images/zmm6mWXMQvZkW9TrqCNNmyWPMg.png', href: '/work/nova-cosmetics' },
  // Row 2
  { name: 'Celeste Beauty', cat: 'SSL', year: '2021', size: 'large', bg: 'rgb(237, 93, 58)', light: false, img: 'https://framerusercontent.com/images/jCnBbZyJbjRZhOQnLMfnVTQJvDs.jpg', href: '/work/celeste-beauty' },
  { name: 'Elysia Cosmetics', cat: 'UI', year: '2022', size: 'small', bg: 'rgb(244, 255, 119)', light: true, img: 'https://framerusercontent.com/images/JICyB7guoDFBkVoxrLlsfEykY.png', href: '/work/elysia-cosmetics' },
  // Row 3
  { name: 'Serenva Beauty', cat: 'UX', year: '2023', size: 'small', bg: 'rgb(255, 211, 24)', light: true, img: 'https://framerusercontent.com/images/hiKjVqKwqBhYHJ0Zyu8APvaqF38.png', href: '/work/serenva-beauty' },
  { name: 'Lunara Bloom', cat: 'EMAIL', year: '2024', size: 'large', bg: 'rgb(55, 182, 105)', light: false, img: 'https://framerusercontent.com/images/C8QGj3mn8xuHvAdDnf5HkLKns.png', href: '/work/lunara-bloom' },
]

/* ─────────────────────────────────────────────────────────────────────────
   TEAM  (exact order + card colors from DOM)
───────────────────────────────────────────────────────────────────────── */
export const TEAM = [
  { name: 'Ethan Cole', role: 'Founder & CEO', bg: 'rgb(252, 206, 240)', light: true, img: 'https://framerusercontent.com/images/3dTJtWynb0GRAuO1pnS8QEwN3Y.png' },
  { name: 'Ava Mitchell', role: 'Creative Director', bg: 'rgb(101, 157, 245)', light: false, img: 'https://framerusercontent.com/images/oHq8eNbsj5cXSeWbqDLCUMzxoyk.png' },
  { name: 'Liam Parker', role: 'Marketing Strategist', bg: 'rgb(244, 255, 119)', light: true, img: 'https://framerusercontent.com/images/tgd5wQDlNQzUI8MoFTzoL0uck8.png' },
  { name: 'Sophia Reed', role: 'Social Media Manager', bg: 'rgb(244, 255, 119)', light: true, img: 'https://framerusercontent.com/images/U7j9bKDgunNVGTOAwX6JE9gG7c.png' },
  { name: 'Noah Bennett', role: 'SEO & Content Lead', bg: 'rgb(237, 93, 58)', light: false, img: 'https://framerusercontent.com/images/qDU0zj2YSIxDaA6YW19aKKGWv1Q.png' },
  { name: 'Emma Davis', role: 'Paid Ads Specialist', bg: 'rgb(237, 93, 58)', light: false, img: 'https://framerusercontent.com/images/kfb7R4KHkXA4aN7vhCbUoVhms.png' },
  { name: 'Mason Clark', role: 'Brand Designer', bg: 'rgb(244, 255, 119)', light: true, img: 'https://framerusercontent.com/images/sbefdbnEA3tSmAW1onjwvQuX1jw.png' },
  { name: 'Olivia Grant', role: 'Client Success Manager', bg: 'rgb(101, 157, 245)', light: false, img: 'https://framerusercontent.com/images/Ejkv7HZKERWyR4m37vMxGr3xwA.png' },
]

/* ─────────────────────────────────────────────────────────────────────────
   TESTIMONIALS  (all white cards from DOM — no dark featured card)
───────────────────────────────────────────────────────────────────────── */
export const TESTIMONIALS = [
  {
    quote: '"Our brand visibility tripled in just three months!"',
    body: "Working with this agency transformed the way we approach marketing. Their team didn't just promote our products movement.",
    name: 'Mia Johnson',
    title: 'Co-founder, BrandBoost',
    img: 'https://framerusercontent.com/images/07rL7lnrogVh2WkRDFATyBE7hzA.png',
  },
  {
    quote: '"They understood our goals."',
    body: 'From strategy to execution, the engagement and a successful product launch.',
    name: 'Ryan Mitchell',
    title: 'CEO, Vistaro',
    img: 'https://framerusercontent.com/images/cR43V4CTirzb30HZzsSYkjkxqE.png',
  },
  {
    quote: '"Our social media came alive."',
    body: 'The team crafted content that actually connects — we saw massive brand.',
    name: 'Ethan Miles',
    title: 'Founder, Adverly',
    img: 'https://framerusercontent.com/images/sKMsrGcl4pfkimrAoRxCEGMmC0.png',
  },
  {
    quote: '"Finally, an agency that cares about long-term results."',
    body: "We've worked with several agencies in the past, but none matched the precision and transparency of this team.",
    name: 'James Carter',
    title: 'Head of Growth, Streamora',
    img: 'https://framerusercontent.com/images/07rL7lnrogVh2WkRDFATyBE7hzA.png',
  },
]

/* ─────────────────────────────────────────────────────────────────────────
   BLOG
───────────────────────────────────────────────────────────────────────── */
export const BLOG_POSTS = [
  {
    title: 'The Future of Digital Marketing',
    year: '2023',
    img: 'https://framerusercontent.com/images/vSYQk6wWvuKGsWpjFWEfRzpTLkU.png',
    href: '/blog/the-future-of-digital-marketing',
  },
  {
    title: 'Mastering Client Relationships',
    year: '2023',
    img: 'https://framerusercontent.com/images/LRW8nlBv0oB8zT9NgDDDqOx9d7Q.png',
    href: '/blog/mastering-client-relationships',
  },
]

/* ─────────────────────────────────────────────────────────────────────────
   FAQS
───────────────────────────────────────────────────────────────────────── */
export const FAQS = [
  {
    q: 'How soon can I expect to see results?',
    a: 'Most clients start seeing initial improvements within a few weeks, though the exact timeline depends on your goals and the strategy we implement.',
  },
  {
    q: 'How do you start working with a new client?',
    a: 'We begin with a discovery call to understand your business, goals, and challenges. From there we build a tailored strategy and kick off within days.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer SEO, branding, social media marketing, and paid advertising — all designed to work together for maximum impact.',
  },
  {
    q: 'What makes your agency different?',
    a: 'We combine data-driven strategy with creative execution, maintaining full transparency and treating every brand as if it were our own.',
  },
  {
    q: 'How do you measure success?',
    a: 'We track KPIs aligned to your goals — traffic, conversions, ROAS, engagement — and share clear reports so you always know what\'s working.',
  },
]
