import { useEffect, useState } from 'react'
import logo from './assets/logo.webp'
import about from './assets/about.png'
import FloatingVideo from './components/FloatingVideo'
import FloatingLeadForm from './components/FloatingLeadForm'
import WhatsAppFloat from './components/WhatsAppFloat'

const services = [
  {
    title: 'Website Development',
    description: 'Responsive, SEO-friendly websites tailored to your brand identity using modern frameworks.',
  },
  {
    title: 'Ecommerce Development',
    description: 'Robust online stores with secure payment gateways and inventory management systems.',
  },
  {
    title: 'Mobile App',
    description: 'Native Android and iOS applications that deliver seamless user experiences.',
  },
  {
    title: 'Digital Marketing',
    description: '360-degree marketing strategies to boost your online presence and audience engagement.',
  },
  {
    title: 'AI Videos',
    description: 'Cutting-edge AI-generated video content for modern advertising and audience connection.',
  },
  {
    title: 'Company Branding',
    description: 'Complete corporate identity solutions including brochures, cards, and brand voice.',
  },
  {
    title: 'Facebook & Instagram Ads',
    description: 'Targeted social media campaigns designed to reach your ideal audience and generate leads.',
  },
  {
    title: 'Google Ads',
    description: 'PPC campaigns that maximize ROI and drive instant leads for your business.',
  },
  {
    title: 'Youtube Ads',
    description: 'Video advertising strategies that capture attention on the world\'s biggest video platform.',
  },
  {
    title: 'SEO Optimization',
    description: 'Organic ranking strategies to help your website reach the top of search results.',
  },
  {
    title: 'Graphic Designing',
    description: 'Creative visual content for social media, print, and digital platforms.',
  },
  {
    title: 'Creative Logo Design',
    description: 'Unique logo designs that represent your brand\'s values and personality.',
  },
]

const plans = [
  {
    label: 'Minimum plan',
    name: 'Campaign Package',
    price: '₹ 10,000',
    points: ['Facebook Ads', 'Instagram Ads', 'Bulk Whatsapp', 'Daily Reporting', 'Google Ads Setup'],
  },
  {
    label: 'Popular gold plan',
    name: 'All Campaigns',
    price: '₹ 30,000',
    points: ['Leads Support', 'Bulk Whatsapp', 'Daily Reporting', 'Youtube Channel', 'Google ALL Services', '5 Pages Website'],
  },
  {
    label: 'Diamond plan',
    name: 'Complete Branding',
    price: '₹ 50,000',
    points: ['Digital Marketing', 'Website Designing', 'Youtube Channel Mgmt', 'All Social Media', '30-40 Leads Guaranteed'],
  },
]

const courses = [
  {
    title: 'Recording Videos',
    duration: 'Self-paced',
    price: '₹ 2,000',
    points: ['Full Course Videos', 'Lifetime Access', 'Telugu Language', 'AI Tools Included'],
  },
  {
    title: '15 Days Course',
    duration: '15 Days',
    price: '₹ 10,000',
    points: ['Live Online Classes', 'Govt. Certificate'],
  },
  {
    title: '45 Days Course',
    duration: '45 Days',
    price: '₹ 20,000',
    points: ['Live Projects', 'Govt. Certificate'],
  },
  {
    title: '3 Months Course',
    duration: '3 Months',
    price: '₹ 30,000',
    points: ['100% Job Guarantee', 'Internship Included'],
  },
]

const features = [
  'Quality leads for real estate, college admissions, and other businesses',
  'Premier digital agency with 13+ years of experience',
  'Professional websites, branding, and high-conversion campaigns',
  'Training programs with AI tools and career-focused learning',
]

function App() {
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const isLight = theme === 'light'
  const toggleIcon = isLight ? '🌙' : '☀️'
  const toggleLabel = isLight ? 'Dark mode' : 'Light mode'

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex min-h-screen container flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className={`flex flex-col gap-4 rounded-[1.75rem] border px-4 py-3 lg:flex-row lg:items-center lg:justify-between ${isLight
          ? 'bg-white/95 border-slate-200 shadow-sm shadow-slate-200/30'
          : 'bg-slate-950/95 border-slate-800 shadow-lg shadow-slate-950/30'
          } backdrop-blur-xl`}>
          <a
            href="#top"
            aria-label="Kavya Sree Digital Solutions home"
            className="inline-flex h-12 items-center rounded-3xl border border-slate-200/90 bg-white px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-950"
          >
            <img src={logo} alt="Kavya Sree Digital Solutions logo" className="h-10 w-auto rounded-2xl object-contain" />
          </a>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <a href="#services" className="transition border-b-2 border-transparent px-2 py-1 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-300">Services</a>
              <a href="#plans" className="transition border-b-2 border-transparent px-2 py-1 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-300">Plans</a>
              <a href="#training" className="transition border-b-2 border-transparent px-2 py-1 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-300">Training</a>
              <a href="#contact" className="transition border-b-2 border-transparent px-2 py-1 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-300">Contact</a>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((s) => !s)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
              className={`hidden md:inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-pink-500 ${isLight
                ? 'border-slate-200 bg-slate-950 text-white shadow-md shadow-slate-950/20 hover:bg-slate-800'
                : 'border-slate-700 bg-white text-slate-950 shadow-md shadow-slate-950/20 hover:bg-slate-100'
                }`}
            >
              <span>{toggleIcon}</span>
              {toggleLabel}
            </button>
          </div>

          {/* Mobile nav panel */}
          <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} mt-2`}>
            <nav className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <a onClick={() => setMenuOpen(false)} href="#services" className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200">Services</a>
              <a onClick={() => setMenuOpen(false)} href="#plans" className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200">Plans</a>
              <a onClick={() => setMenuOpen(false)} href="#training" className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200">Training</a>
              <a onClick={() => setMenuOpen(false)} href="#contact" className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200">Contact</a>
              <button
                type="button"
                onClick={() => { setTheme((current) => (current === 'light' ? 'dark' : 'light')); setMenuOpen(false); }}
                className="mt-2 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-slate-700"
              >
                <span>{toggleIcon}</span>
                {toggleLabel}
              </button>
            </nav>
          </div>
        </header>

        <FloatingVideo />
        <WhatsAppFloat />
        <FloatingLeadForm />

        <main className="flex-1 space-y-16 sm:space-y-20 lg:space-y-28 pt-6">
          <section
            id="top"
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-pink-50 p-6 sm:p-8 shadow-[0_40px_120px_rgba(39,67,194,0.08)] dark:border-slate-700 dark:bg-slate-950/95 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 lg:p-14"
          >
            <div className="pointer-events-none absolute left-[-6rem] top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl dark:bg-pink-500/20" />
            <div className="pointer-events-none absolute right-[-5rem] top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 to-transparent dark:from-slate-950/80" />

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8 animate-fade-up">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-600 dark:text-pink-400">Digital growth partner</p>
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 dark:text-slate-50 sm:text-5xl">Websites, ads, and training designed to grow your leads.</h1>
                  <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">Build a polished online presence with campaigns that perform. We guide business owners with expert websites, high-converting ads, and practical digital training.</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-sky-600 px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5">Start your project</a>
                  <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:border-pink-500 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">View services</a>
                </div>

                <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { label: '1100+ projects', value: 'Trusted' },
                    { label: '13+ years', value: 'Experience' },
                    { label: '100% mobile', value: 'Ready' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      <p>{item.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-950/95 p-3 shadow-xl shadow-slate-950/20 dark:border-slate-700 dark:bg-slate-950">
                <div className="overflow-hidden rounded-[1.75rem] bg-black">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/os2tVcauFTQ"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="mt-6 rounded-[1.75rem] bg-slate-950/95 p-6 text-white shadow-lg shadow-slate-950/20">
                  <p className="text-sm uppercase tracking-[0.28em] text-pink-300">Video preview</p>
                  <p className="mt-4 text-lg leading-7 text-slate-200">Watch the preview and see how our marketing, websites, and training services help businesses grow.</p>
                  <a href="https://youtu.be/os2tVcauFTQ" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-500">Watch on YouTube</a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="rounded-[2rem] bg-white/95 px-4 py-8 sm:px-6 sm:py-10 shadow-sm shadow-slate-200/30 dark:bg-slate-950/95 dark:shadow-slate-950/20 lg:px-8 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-600 dark:text-pink-400">Who We Are</p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  Kavya Sree Digital Solutions Pvt Ltd is a premier digital agency delivering excellence in web design and marketing since 2013.
                </h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                  We don't just build websites; we build digital ecosystems that drive growth. Our team of experts combines technical precision with creative flair to deliver projects that stand out in a crowded digital landscape.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                    <p className="text-3xl font-bold">1100+</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Projects Delivered</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                    <p className="text-3xl font-bold">13+</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <img src={about} alt="Kavya Sree Digital Solutions team" className="h-full w-full object-cover" />
              </div>
            </div>
          </section>

          <section id="services" className="space-y-10 rounded-[2rem] bg-slate-50/95 px-4 py-8 sm:px-6 sm:py-10 shadow-sm shadow-slate-200/40 dark:bg-slate-900/90 dark:shadow-slate-950/20 lg:px-8 lg:py-10">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:items-end">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-600 dark:text-pink-400">Our Services</p>
                <h2 className="max-w-3xl text-3xl font-black tracking-[-0.03em] text-slate-950 dark:text-slate-50 sm:text-4xl">Professional services built for faster growth and stronger digital performance.</h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">We craft premium websites, high-impact digital campaigns, modern branding, and training programs that help businesses convert more customers.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Modern website design',
                    'Lead-driven marketing',
                    'Brand identity systems',
                    'Career-focused training',
                  ].map((item) => (
                    <div key={item} className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-white to-sky-100 p-1 shadow-[0_30px_70px_rgba(39,67,194,0.08)] dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
                <div className="rounded-[1.75rem] bg-white p-6 dark:bg-slate-950">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Service overview</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { label: 'Web', detail: 'Responsive designs' },
                      { label: 'Ads', detail: 'ROI-first campaigns' },
                      { label: 'Branding', detail: 'Identity systems' },
                      { label: 'Training', detail: 'AI-ready skills' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
                        <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="mt-3 text-base font-semibold text-slate-950 dark:text-slate-100">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.5rem] bg-slate-950/95 p-6 text-white shadow-xl shadow-slate-950/20 dark:bg-slate-900">
                    <p className="text-sm uppercase tracking-[0.28em] text-pink-300">Trusted by growing brands</p>
                    <p className="mt-3 text-lg leading-7 text-slate-200">Award-winning support and fast turnaround with complete digital strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(39,67,194,0.14)] dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="absolute inset-x-6 top-0 h-24 rounded-b-[2rem] bg-gradient-to-br from-pink-500/15 via-transparent to-sky-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-600 text-sm font-bold text-white shadow-lg shadow-pink-600/20">{index + 1}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-slate-500 dark:bg-slate-800 dark:text-slate-300">Service</span>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-slate-950 dark:text-slate-50">{service.title}</h3>
                      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-800">Premium</span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-800">Fast delivery</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="plans" className="space-y-10 rounded-[2rem] bg-white/95 px-4 py-8 sm:px-6 sm:py-10 shadow-sm shadow-slate-200/40 dark:bg-slate-950/95 dark:shadow-slate-950/20 lg:px-8 lg:py-10">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div key={plan.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900">
                  <span className="text-sm font-semibold uppercase tracking-[0.28em] text-pink-600 dark:text-pink-300">{plan.label}</span>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">{plan.name}</h3>
                  <p className="mt-4 text-2xl font-semibold text-slate-950 dark:text-slate-50">{plan.price}</p>
                  <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
                    {plan.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-pink-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Get started</a>
                </div>
              ))}
            </div>
          </section>

          <section id="training" className="space-y-8 rounded-[2rem] bg-slate-50/95 px-4 py-8 sm:px-6 sm:py-10 shadow-sm shadow-slate-200/40 dark:bg-slate-900/90 dark:shadow-slate-950/20 lg:px-8 lg:py-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600 dark:text-pink-400">Training</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 sm:text-3xl">Digital marketing training programs with AI tools and career-ready skills.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {courses.map((course) => (
                <div key={course.title} className="group rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(39,67,194,0.15)] dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-600 dark:text-pink-300">{course.duration}</p>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-slate-100">{course.title}</h3>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-pink-600 text-lg font-bold text-white shadow-lg shadow-pink-600/20">{course.title === '3 Months Course' ? '★' : '+'}</div>
                  </div>

                  <p className="mt-6 text-3xl sm:text-4xl font-semibold text-slate-950 dark:text-slate-50">{course.price}</p>

                  <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
                    {course.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 rounded-3xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-pink-600" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">Enroll now</a>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="rounded-[2rem] border border-pink-200/80 bg-gradient-to-r from-pink-50 to-sky-50 p-6 sm:p-8 shadow-[0_32px_90px_rgba(210,0,104,0.12)] dark:border-pink-400/20 dark:from-slate-900 dark:to-slate-950 dark:bg-slate-950/80"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600 dark:text-pink-300">Contact</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 sm:text-3xl">Ready to scale with quality leads and a polished digital presence?</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">Message us now for a custom website, campaign, or training program designed to convert.</p>
              </div>
              <div className="space-y-4 text-slate-950 dark:text-slate-100">
                <a href="tel:+919550863666" className="block rounded-full bg-slate-950 px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold text-white text-center shadow-xl shadow-slate-950/30 transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">+91 95508 63666</a>
                <a href="mailto:support@kavyasreedigitalsolutions.com" className="block rounded-full border border-slate-950 px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold text-slate-950 text-center transition hover:bg-slate-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-950">support@kavyasreedigitalsolutions.com</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-6 text-sm text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2 lg:flex-row lg:justify-between lg:items-center">
          <div>© 2026 Kavya Sree Digital Solutions.</div>
          <div className="text-center lg:text-right">Professional design and responsive web development.</div>
        </footer>
      </div>
    </div>
  )
}

export default App
