module.exports = () => {
    return `
    <main class="bg-background-light min-h-[calc(100vh-200px)]">
        <!-- Page Header -->
        <section class="bg-slate-900 pt-24 pb-16 relative overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Facilities Cover" class="w-full h-full object-cover opacity-30 mix-blend-overlay">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="layout-container relative z-10 flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 text-center">
                    <span class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">Prasarana</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Fasilitas Sekolah</h1>
                    <p class="text-slate-300 text-lg max-w-2xl mx-auto font-light">Mendukung setiap langkah belajar dengan infrastruktur terbaik yang modern.</p>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="py-20">
            <div class="layout-container flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10">
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <!-- Facility 1 -->
                        <div class="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Ruang Kelas" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-2xl font-bold text-white mb-2">Smart Classroom</h3>
                                <p class="text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Ruangan full AC dengan proyektor interaktif, 1 kelas berisi maksimal 30 siswa untuk fokus belajar tinggi.</p>
                            </div>
                        </div>

                        <!-- Facility 2 -->
                        <div class="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Perpustakaan" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-2xl font-bold text-white mb-2">Perpustakaan Digital</h3>
                                <p class="text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Koleksi 5.000+ buku fisik dan akses jurnal internasional via komputer perpustakaan yang nyaman.</p>
                            </div>
                        </div>

                        <!-- Facility 3 -->
                        <div class="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Lab Komputer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-2xl font-bold text-white mb-2">Laboratorium Komputer</h3>
                                <p class="text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">PC high-end i7 terbaru dengan fasilitas internet fiber 1Gbps untuk prakerin coding dan desain grafis.</p>
                            </div>
                        </div>

                       <div class="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer">
    <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000" alt="Lab Sains" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
    <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 class="text-2xl font-bold text-white mb-2">Laboratorium Sains</h3>
        <p class="text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Dilengkapi dengan alat-alat kimia fisika biologi berstandar industri.</p>
    </div>
</div>

<div class="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer">
    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000" alt="Lapangan Olahraga" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
    <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 class="text-2xl font-bold text-white mb-2">Lapangan Olahraga Indoor</h3>
        <p class="text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Fasilitas olahraga multisport yang terlindung dari cuaca, cocok untuk basket dan futsal.</p>
    </div>
</div>



                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
};
