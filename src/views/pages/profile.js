module.exports = () => {
    return `
    <main class="bg-background-light min-h-[calc(100vh-200px)]">
        <!-- Page Header -->
        <section class="bg-slate-900 pt-24 pb-16 relative overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Profile Cover" class="w-full h-full object-cover opacity-30 mix-blend-overlay">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="layout-container relative z-10 flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 text-center">
                    <span class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">Tentang Kami</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Profil Sekolah</h1>
                    <p class="text-slate-300 text-lg max-w-2xl mx-auto font-light">Mengenal lebih dekat sejarah, visi, misi, dan identitas Sekolah Modern Nusantara.</p>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="py-20">
            <div class="layout-container flex justify-center">
                <div class="max-w-[1000px] w-full px-4 md:px-10 space-y-24">
                    
                    <!-- Visi Misi -->
                    <div class="grid md:grid-cols-2 gap-12 items-start">
                        <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <div class="size-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                                <span class="material-symbols-outlined text-[28px]">visibility</span>
                            </div>
                            <h2 class="text-2xl font-bold text-slate-900 mb-4">Visi Kami</h2>
                            <p class="text-slate-600 leading-relaxed font-light text-lg">
                                "Menjadi sekolah unggulan yang menghasilkan lulusan berkarakter mulia, cerdas, kreatif, berwawasan global, dan peduli lingkungan berlandaskan nilai-nilai kebangsaan."
                            </p>
                        </div>
                        <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                            <div class="size-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <span class="material-symbols-outlined text-[28px]">rocket_launch</span>
                            </div>
                            <h2 class="text-2xl font-bold text-slate-900 mb-4">Misi Kami</h2>
                            <ul class="text-slate-600 leading-relaxed font-light space-y-3 list-disc list-inside">
                                <li>Menyelenggarakan pembelajaran aktif, inovatif, kreatif, efektif, dan menyenangkan.</li>
                                <li>Menumbuhkembangkan karakter berbudi pekerti luhur.</li>
                                <li>Membina kemandirian peserta didik melalui kegiatan wirausaha dan pengembangan diri.</li>
                                <li>Membangun wawasan global melalui penguasaan bahasa asing dan teknologi.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Sejarah -->
                    <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                        <div class="grid md:grid-cols-2">
                            <div class="h-64 md:h-auto">
                                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="History" class="w-full h-full object-cover">
                            </div>
                            <div class="p-10 md:p-14 flex flex-col justify-center">
                                <h2 class="text-3xl font-extrabold text-slate-900 mb-6">Sejarah Singkat</h2>
                                <p class="text-slate-600 leading-relaxed font-light mb-4">
                                    Berdiri sejak tahun 2010, Sekolah Modern Nusantara (SMN 1) bermula dari sebuah inisiatif para pendidik peduli masa depan untuk menghadirkan layanan pendidikan yang tidak hanya berfokus pada buku teks, namun pada pembentukan karakter.
                                </p>
                                <p class="text-slate-600 leading-relaxed font-light">
                                    Berawal dari hanya 50 murid pertama di bangunan sederhana, kini SMN 1 telah berkembang pesat dengan fasilitas modern seluas 2 hektar, meluluskan ribuan alumni yang sukses di berbagai bidang.
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
