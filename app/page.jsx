"use client";
                  <div className="mt-8">
                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/40">${current.ticker}</p>
                    <h2 className="mt-2 text-4xl font-black">{current.name}</h2>
                    <p className="mt-3 text-lg text-white/70">{current.vibe}</p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-black/25 p-4">
                      <p className="text-xs text-white/40">Risk score</p>
                      <p className="mt-1 text-2xl font-black">{current.risk}/100</p>
                    </div>
                    <div className="rounded-2xl bg-black/25 p-4">
                      <p className="text-xs text-white/40">Vibe</p>
                      <p className="mt-1 font-bold">{current.tag}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button onClick={() => swipe("pass")} className="flex items-center justify-center gap-2 rounded-3xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-lg font-black text-red-200 transition hover:bg-red-500/20">
                  <X /> Pass
                </button>
                <button onClick={() => swipe("buy")} className="flex items-center justify-center gap-2 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4 text-lg font-black text-emerald-200 transition hover:bg-emerald-500/20">
                  <Heart /> Buy
                </button>
              </div>
            </div>
          )}

          {finished && (
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/10 p-7 text-center shadow-2xl backdrop-blur">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-yellow-400 to-fuchsia-500">
                <Trophy size={38} />
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-fuchsia-300">Your result</p>
              <h2 className="mt-3 text-4xl font-black md:text-6xl">{result.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{result.line}</p>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-black/25 p-4">
                  <p className="text-xs text-white/40">Bought</p>
                  <p className="text-3xl font-black text-emerald-300">{likes.length}</p>
                </div>
                <div className="rounded-2xl bg-black/25 p-4">
                  <p className="text-xs text-white/40">Passed</p>
                  <p className="text-3xl font-black text-red-300">{passes.length}</p>
                </div>
                <div className="rounded-2xl bg-black/25 p-4">
                  <p className="text-xs text-white/40">Type</p>
                  <p className="font-black text-fuchsia-200">{result.type}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button onClick={shareResult} className="flex items-center justify-center gap-2 rounded-3xl bg-white px-6 py-4 font-black text-black transition hover:scale-[1.02]">
                  <Share2 size={18} /> Share result
                </button>
                <button onClick={restart} className="flex items-center justify-center gap-2 rounded-3xl border border-white/15 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/15">
                  <RotateCcw size={18} /> Play again
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <footer className="relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 text-sm text-white/50 md:flex-row">
          <p>Not financial advice. This is a meme game.</p>
          <p className="flex items-center gap-2"><Zap size={14} /> Built for screenshots, chaos, and bad decisions.</p>
        </footer>
      </section>
    </main>
  );
}
