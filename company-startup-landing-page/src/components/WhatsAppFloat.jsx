const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/919550863666"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-2xl shadow-emerald-500/30 transition-transform duration-300 hover:-translate-y-1 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-emerald-600 shadow-md shadow-emerald-500/20">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.88 11.88 0 0012 .04C5.38.04-.13 5.47-.13 12.09c0 2.12.55 4.17 1.6 5.98L0 24l5.07-1.33a11.94 11.94 0 006.93 2.05h.01c6.62 0 12.03-5.41 12.03-12.03 0-3.22-1.26-6.24-3.48-8.2zM12 21.91a9.84 9.84 0 01-5.22-1.43l-.37-.22-3.01.79.82-2.93-.24-.38A9.78 9.78 0 012.17 12.1c0-5.4 4.38-9.78 9.78-9.78 2.62 0 5.08 1.02 6.93 2.88a9.72 9.72 0 012.85 6.92c0 5.4-4.38 9.78-9.78 9.78zm5.25-7.54c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.14-.67.14-.2.29-.77.94-.95 1.13-.17.2-.35.22-.65.08-.29-.15-1.23-.45-2.35-1.44-.87-.78-1.46-1.74-1.63-2.03-.17-.28-.02-.43.13-.57.13-.13.29-.35.43-.53.14-.18.19-.3.29-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.58c-.2 0-.53.07-.81.36-.28.3-1.08 1.05-1.08 2.56 0 1.5 1.11 2.95 1.26 3.16.15.2 2.18 3.38 5.29 4.74.74.32 1.32.51 1.77.65.74.23 1.42.2 1.96.12.6-.09 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.35z" />
                </svg>
            </span>
            <div className="hidden flex-col text-left sm:flex">
                <span className="text-sm font-semibold">WhatsApp</span>
                <span className="text-[0.75rem] text-white/90">+91 95508 63666</span>
            </div>
        </a>
    )
}

export default WhatsAppFloat
