module.exports = () => {
    return `
    <main>
        <!-- Hero Section -->
        <section class="relative bg-slate-900 pt-20 pb-32 md:pb-40 overflow-hidden min-h-[90vh] flex items-center">
    <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920" 
             alt="School Building" 
             class="w-full h-full object-cover opacity-30">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
    </div>

    <div class="relative z-10 w-full">
        <div class="max-w-[1280px] px-6 md:px-10 mx-auto">
            <div class="max-w-3xl">
                <span class="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 text-xs md:text-sm font-bold tracking-wider uppercase mb-6 border border-blue-500/30 backdrop-blur-sm">
                    Unggul & Berkarakter
                </span>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                    Membangun Masa Depan <br class="hidden md:block">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Generasi Emas</span>
                </h1>
                <p class="text-base md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
                    Sekolah Modern Nusantara (SMN 1) berdedikasi untuk menciptakan lingkungan belajar yang inovatif, inspiratif, dan berpusat pada pengembangan karakter siswa.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" class="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-500/30">
                        Daftar Sekarang
                    </a>
                    <a href="/profile" class="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all text-center backdrop-blur-sm">
                        Kenali Kami Lebih Jauh
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="relative z-20 -mt-12 md:-mt-16 px-4">
    <div class="max-w-[1280px] mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
            <div class="p-8 text-center">
                <h3 class="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">A</h3>
                <p class="text-slate-500 font-semibold text-xs uppercase tracking-widest">Akreditasi</p>
            </div>
            <div class="p-8 text-center">
                <h3 class="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">60+</h3>
                <p class="text-slate-500 font-semibold text-xs uppercase tracking-widest">Guru Ahli</p>
            </div>
            <div class="p-8 text-center">
                <h3 class="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">1.2K</h3>
                <p class="text-slate-500 font-semibold text-xs uppercase tracking-widest">Siswa Aktif</p>
            </div>
            <div class="p-8 text-center">
                <h3 class="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">15+</h3>
                <p class="text-slate-500 font-semibold text-xs uppercase tracking-widest">Tahun Berdiri</p>
            </div>
        </div>
    </div>
</section>



        <!-- Stats Section -->
        <section class="py-12 bg-white border-b border-slate-100 relative z-20 -mt-10 mx-4 md:mx-10 rounded-2xl shadow-xl max-w-[1280px] xl:mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
                <div class="text-center">
                    <h3 class="text-4xl font-extrabold text-primary mb-2">A</h3>
                    <p class="text-slate-500 font-medium text-sm uppercase tracking-wide">Akreditasi</p>
                </div>
                <div class="text-center">
                    <h3 class="text-4xl font-extrabold text-primary mb-2">60+</h3>
                    <p class="text-slate-500 font-medium text-sm uppercase tracking-wide">Guru Ahli</p>
                </div>
                <div class="text-center">
                    <h3 class="text-4xl font-extrabold text-primary mb-2">1.2K</h3>
                    <p class="text-slate-500 font-medium text-sm uppercase tracking-wide">Siswa Aktif</p>
                </div>
                <div class="text-center">
                    <h3 class="text-4xl font-extrabold text-primary mb-2">15+</h3>
                    <p class="text-slate-500 font-medium text-sm uppercase tracking-wide">Tahun Pengalaman</p>
                </div>
            </div>
        </section>

        <!-- Short Info Section -->
        <section class="py-24 bg-background-light">
            <div class="layout-container flex flex-col items-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 grid md:grid-cols-2 gap-16 items-center">
                    <div class="relative group">
                        <div class="absolute -inset-4 bg-blue-100 rounded-[2.5rem] transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
                         <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Students Learning" class="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full">
                       
                    </div>
                    <div>
                        <span class="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Tentang Kami</span>
                        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Pendidikan Berkualitas untuk Semua</h2>
                        <p class="text-slate-600 text-lg leading-relaxed mb-6 font-light">
                            Di SMN 1, kami tidak hanya fokus pada prestasi akademik, tetapi juga pada pembentukan karakter, kreativitas, dan keterampilan abad ke-21 yang dibutuhkan oleh para siswa di masa depan.
                        </p>
                        <p class="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                            Dengan fasilitas modern dan tenaga pendidik profesional, kami memastikan setiap anak mendapatkan kesempatan terbaik untuk menggali potensi dirinya.
                        </p>
                        <a href="/profile" class="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors group">
                            Baca Selengkapnya
                            <span class="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Programs Highlight -->
        <section class="py-24 bg-white">
            <div class="layout-container flex flex-col items-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10">
                    <div class="text-center max-w-2xl mx-auto mb-16">
                        <span class="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Program Terpadu</span>
                        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Mendukung Setiap Minat Bakat</h2>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Card 1 -->
                        <div class="bg-slate-50/50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div class="size-14 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                                <span class="material-symbols-outlined text-[32px]">science</span>
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-3">Sains & Teknologi</h3>
                            <p class="text-slate-600 leading-relaxed font-light mb-6">Laboratorium modern untuk eksplorasi dan inovasi di bidang biologi, kimia, fisika, dan komputer.</p>
                            <a href="/programs" class="text-sm font-bold text-primary hover:text-blue-800">Lihat Program →</a>
                        </div>
                        <!-- Card 2 -->
                        <div class="bg-slate-50/50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div class="size-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                <span class="material-symbols-outlined text-[32px]">palette</span>
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-3">Seni & Budaya</h3>
                            <p class="text-slate-600 leading-relaxed font-light mb-6">Fasilitas dan program khusus untuk mengembangkan bakat seni tari, musik, lukis, dan budaya lokal.</p>
                            <a href="/programs" class="text-sm font-bold text-indigo-600 hover:text-indigo-800">Lihat Program →</a>
                        </div>
                        <!-- Card 3 -->
                        <div class="bg-slate-50/50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div class="size-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <span class="material-symbols-outlined text-[32px]">sports_soccer</span>
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-3">Olahraga</h3>
                            <p class="text-slate-600 leading-relaxed font-light mb-6">Fasilitas olahraga lengkap utuk mencetak siswa yang sehat fisik dan kuat, hingga atlet berprestasi.</p>
                            <a href="/programs" class="text-sm font-bold text-emerald-600 hover:text-emerald-800">Lihat Program →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    `;
};
