const FloatingVideo = () => {
    return (
        <div className="fixed bottom-6 left-6 z-30 hidden lg:block">
            <div className="w-[320px] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/95 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1">
                <div className="relative overflow-hidden bg-black">
                    <div className="aspect-video w-full">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/os2tVcauFTQ?autoplay=1&mute=1&loop=1&playlist=os2tVcauFTQ&controls=1&showinfo=0&rel=0&modestbranding=1"
                            title="Kavya Sree Digital Solutions video preview"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="border-t border-white/10 bg-slate-950/95 p-4 text-sm text-slate-200">
                    <p className="font-semibold text-white">Watch quick preview</p>
                    <p className="mt-1 text-xs text-slate-400">Muted looped video</p>
                </div>
            </div>
        </div>
    )
}

export default FloatingVideo
