module.exports = () => {
    return `
    <main class="bg-background-light min-h-[calc(100vh-200px)]">
        <!-- Page Header -->
        <section class="bg-slate-900 pt-24 pb-16 relative overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Programs Cover" class="w-full h-full object-cover opacity-30 mix-blend-overlay">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="layout-container relative z-10 flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 text-center">
                    <span class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">Akademik</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Program Sekolah</h1>
                    <p class="text-slate-300 text-lg max-w-2xl mx-auto font-light">Eksplorasi ragam pilihan akademik dan ekstrakurikuler SMN 1.</p>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="py-20">
            <div class="layout-container flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 space-y-24">
                    
                    <!-- Jurusan / Peminatan -->
                    <div>
                        <div class="flex items-center gap-3 mb-10">
                            <h2 class="text-3xl font-extrabold text-slate-900">Program Studi</h2>
                            <div class="h-1 flex-1 bg-slate-100 rounded-full max-w-xs"></div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <!-- IPA -->
                            <div class="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div class="h-48 relative overflow-hidden">
                                    <div class="absolute inset-0 bg-blue-900/40 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="MIPA" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                </div>
                                <div class="p-8">
                                    <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-md mb-4">Sains</span>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">MIPA</h3>
                                    <p class="text-slate-600 font-light leading-relaxed mb-6">Program Matematika dan Ilmu Pengetahuan Alam dengan fokus pada pemahaman konsep sains dasar dan praktik laboratorium mendalam.</p>
                                </div>
                            </div>

                            <!-- IPS -->
                            <div class="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div class="h-48 relative overflow-hidden">
                                    <div class="absolute inset-0 bg-orange-900/40 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop" 
     alt="IPS" 
     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                </div>
                                <div class="p-8">
                                    <span class="inline-block px-3 py-1 bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-wider rounded-md mb-4">Sosial</span>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">IPS</h3>
                                    <p class="text-slate-600 font-light leading-relaxed mb-6">Program Ilmu Pengetahuan Sosial melatih kemampuan analisis fenomenologi masyarakat, sosial ekonomi, dan dinamika sejarah global.</p>
                                </div>
                            </div>
                            
                            <!-- Bahasa -->
                            <div class="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div class="h-48 relative overflow-hidden">
                                    <div class="absolute inset-0 bg-emerald-900/40 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000" 
     alt="Bahasa" 
     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                </div>
                                <div class="p-8">
                                    <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider rounded-md mb-4">Linguistik</span>
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3">Bahasa & Budaya</h3>
                                    <p class="text-slate-600 font-light leading-relaxed mb-6">Menyelami sastra, komunikasi, serta keragaman linguistik internasional seperti Inggris, Mandarin, dan Jepang.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Ekstrakurikuler -->
                    <div>
                         <div class="flex items-center gap-3 mb-10">
                            <h2 class="text-3xl font-extrabold text-slate-900">Ekstrakurikuler</h2>
                            <div class="h-1 flex-1 bg-slate-100 rounded-full max-w-xs"></div>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <!-- Ekstra Item -->
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer">
                                <span class="material-symbols-outlined text-4xl text-primary mb-3">sports_basketball</span>
                                <h4 class="font-bold text-slate-800">Basket</h4>
                            </div>
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer">
                                <span class="material-symbols-outlined text-4xl text-rose-500 mb-3">music_note</span>
                                <h4 class="font-bold text-slate-800">Paduan Suara</h4>
                            </div>
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer">
                                <span class="material-symbols-outlined text-4xl text-emerald-500 mb-3">forest</span>
                                <h4 class="font-bold text-slate-800">Pramuka</h4>
                            </div>
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer">
                                <span class="material-symbols-outlined text-4xl text-amber-500 mb-3">code</span>
                                <h4 class="font-bold text-slate-800">Robotik / Koding</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
    `;
};
