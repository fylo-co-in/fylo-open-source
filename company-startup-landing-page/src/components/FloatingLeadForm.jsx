import { useEffect, useRef, useState } from 'react'

const FloatingLeadForm = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [place, setPlace] = useState('')
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            if (isClosed) return
            const currentScrollY = window.scrollY
            const scrollPosition = currentScrollY + window.innerHeight
            const pageHeight = document.documentElement.scrollHeight

            if (currentScrollY < lastScrollY.current && isVisible) {
                setIsVisible(false)
            }

            if (scrollPosition >= pageHeight - 120) {
                setIsVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isClosed, isVisible])

    const whatsappUrl = `https://wa.me/919550863666?text=${encodeURIComponent(
        `Hi, my name is ${name || '[Your name]'} and I am from ${place || '[Place]'}. Please contact me on ${phone || '[phone number]'}`
    )}`

    const handleSubmit = (event) => {
        event.preventDefault()
        window.open(whatsappUrl, '_blank')
    }

    if (isClosed) {
        return null
    }

    return (
        <div className={`pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form
                onSubmit={handleSubmit}
                className="pointer-events-auto w-full max-w-md sm:max-w-lg rounded-[2rem] border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/95"
            >
                <div className="flex items-center justify-between gap-3 pb-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.32em] text-pink-600 dark:text-pink-400">
                            Quick contact
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-slate-50">
                            Need help? Send us a WhatsApp message.
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsClosed(true)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                        aria-label="Close contact form"
                    >
                        ✕
                    </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">
                        Name
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Your name"
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">
                        Phone
                        <input
                            type="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="+91 95508 63666"
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                        />
                    </label>
                </div>

                <label className="mt-4 flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">
                    Place
                    <input
                        type="text"
                        value={place}
                        onChange={(event) => setPlace(event.target.value)}
                        placeholder="Your city or area"
                        className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    />
                </label>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800 sm:w-auto"
                    >
                        Submit
                    </button>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
                    >
                        WhatsApp
                    </a>
                </div>
            </form>
        </div>
    )
}

export default FloatingLeadForm
