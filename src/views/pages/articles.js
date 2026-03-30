module.exports = () => {
    return `
    <main class="bg-background-light min-h-[calc(100vh-200px)]">
        <!-- Page Header -->
        <section class="bg-slate-900 pt-24 pb-16 relative overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1531341018617-1b07248035ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Blog Cover" class="w-full h-full object-cover opacity-30 mix-blend-overlay">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="layout-container relative z-10 flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 text-center">
                    <span class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">Informasi</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Artikel & Berita</h1>
                    <p class="text-slate-300 text-lg max-w-2xl mx-auto font-light">Kabar terbaru, prestasi, dan pengumuman dari keluarga besar SMN 1.</p>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="py-20">
            <div class="layout-container flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 flex flex-col items-center">
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                        
                        <!-- Article 1 -->
                        <div class="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                            <div class="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="News" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-8 flex-1 flex flex-col">
                                <div class="flex items-center gap-4 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    <span class="text-primary truncate">Prestasi Siswa</span>
                                    <span>•</span>
                                    <span>12 Okt 2026</span>
                                </div>
                                <h3 class="text-2xl font-bold text-slate-900 mb-3 leading-tight"><a href="#" class="hover:text-primary transition-colors">Juara 1 Olimpiade Sains Nasional Tingkat Kota</a></h3>
                                <p class="text-slate-600 font-light leading-relaxed mb-6 line-clamp-3">Selamat kepada tim olimpiade SMN 1 yang berhasil meraih mendali emas dan perak pada ajang OSN bulan ini.</p>
                                <a href="#" class="mt-auto inline-flex items-center gap-1 text-primary font-bold hover:text-blue-800 transition-colors">Baca Selengkapnya <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
                            </div>
                        </div>

                        <!-- Article 2 -->
                        <div class="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                            <div class="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="News" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-8 flex-1 flex flex-col">
                                <div class="flex items-center gap-4 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    <span class="text-rose-500 truncate">Pengumuman</span>
                                    <span>•</span>
                                    <span>10 Okt 2026</span>
                                </div>
                                <h3 class="text-2xl font-bold text-slate-900 mb-3 leading-tight"><a href="#" class="hover:text-primary transition-colors">Jadwal Ujian Tengah Semester (UTS) Ganjil</a></h3>
                                <p class="text-slate-600 font-light leading-relaxed mb-6 line-clamp-3">Berikut adalah jadwal dan pembagian ruang untuk Ujian Tengah Semester ganjil tahun ajaran ini. Mohon dipersiapkan dengan baik.</p>
                                <a href="#" class="mt-auto inline-flex items-center gap-1 text-primary font-bold hover:text-blue-800 transition-colors">Baca Selengkapnya <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
                            </div>
                        </div>

                        <!-- Article 3 -->
                        <div class="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                            <div class="h-56 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="News" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-8 flex-1 flex flex-col">
                                <div class="flex items-center gap-4 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    <span class="text-emerald-500 truncate">Kegiatan</span>
                                    <span>•</span>
                                    <span>5 Okt 2026</span>
                                </div>
                                <h3 class="text-2xl font-bold text-slate-900 mb-3 leading-tight"><a href="#" class="hover:text-primary transition-colors">Keseruan Pentas Seni Budaya (PENSI) 2026</a></h3>
                                <p class="text-slate-600 font-light leading-relaxed mb-6 line-clamp-3">Malam puncak perayaan PENSI berlangsung pecah! Ratusan siswa menampilkan bakat musik, tari, dan teater memukau penonton.</p>
                                <a href="#" class="mt-auto inline-flex items-center gap-1 text-primary font-bold hover:text-blue-800 transition-colors">Baca Selengkapnya <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
                            </div>
                        </div>

                    </div>
                    
                    <button class="mt-16 px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-slate-50 transition-colors hover:text-primary">Muat Lebih Banyak Artikel</button>
                </div>
            </div>
        </section>
    </main>
    `;
};
