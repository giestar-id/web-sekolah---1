module.exports = () => {
    return `
    <main class="bg-background-light min-h-[calc(100vh-200px)]">
        <section class="py-20 md:py-32">
            <div class="layout-container flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10">
                    <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                        <!-- Photo -->
                        <div class="w-full md:w-2/5 relative h-[400px] md:h-auto">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kepala Sekolah" class="w-full h-full object-cover object-top">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden"></div>
                        </div>
                        
                        <!-- Content -->
                        <div class="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-white relative">
                            <span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Profil</span>
                            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Bpk. Dr. H. Rahman Arif, M.Pd.</h1>
                            <p class="text-slate-500 font-medium text-lg mb-8">Kepala Sekolah Modern Nusantara (SMN 1)</p>
                            
                            <div class="relative mb-8">
                                <span class="absolute -top-6 -left-4 text-7xl text-slate-100 font-serif leading-none material-symbols-outlined" style="font-size: 80px; opacity: 0.5;">format_quote</span>
                                <p class="text-slate-600 text-xl font-light italic leading-relaxed relative z-10 pl-6 border-l-4 border-primary">
                                    "Pendidikan bukan sekadar mengisi pikiran siswa dengan fakta, melainkan menyalakan api keingintahuan mereka agar tak pernah padam."
                                </p>
                            </div>

                            <div class="space-y-4 text-slate-600 font-light leading-relaxed">
                                <p>
                                    Selamat datang di website resmi Sekolah Modern Nusantara. Puji syukur kami panjatkan atas segala rahmat yang diberikan sehingga platform ini dapat menjadi jembatan informasi yang efektif antara pihak sekolah, orang tua, dan masyarakat luas.
                                </p>
                                <p>
                                    Sebagai pimpinan, saya sangat bangga dengan pencapaian dan budaya positif yang terus dikembangkan di SMN 1. Kami berkomitmen untuk terus berinovasi dalam metode pembelajaran, mengadopsi teknologi terbaru, sembari memegang teguh nilai-nilai karakter bangsa.
                                </p>
                                <p>
                                    Terima kasih atas dedikasi seluruh staf pengajar, semangat anak-anak cerdik cendekia, serta kolaborasi orang tua wali murid. Mari kita bergandengan tangan untuk terus mengukir prestasi bagi kemajuan pendidikan Indonesia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
};
