module.exports = () => {
    return `
    <main class="bg-background-light min-h-[calc(100vh-200px)]">
        <!-- Page Header -->
        <section class="bg-slate-900 pt-24 pb-16 relative overflow-hidden">
            <div class="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1571260899304-425dea5cfd65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Contact Cover" class="w-full h-full object-cover opacity-30 mix-blend-overlay">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="layout-container relative z-10 flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10 text-center">
                    <span class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3 block">Hubungi Kami</span>
                    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Kontak & Lokasi</h1>
                    <p class="text-slate-300 text-lg max-w-2xl mx-auto font-light">Mari berbincang! Kami siap menjawab semua pertanyaan terkait pendaftaran maupun informasi sekolah.</p>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="py-20">
            <div class="layout-container flex justify-center">
                <div class="max-w-[1280px] w-full px-4 md:px-10">
                    
                    <div class="grid lg:grid-cols-2 gap-16 items-start">
                        
                        <!-- Contact Info & Map -->
                        <div class="space-y-10">
                            <div class="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100">
                                <h2 class="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Informasi Kontak</h2>
                                
                                <div class="space-y-6">
                                    <div class="flex items-start gap-4 text-slate-600">
                                        <div class="size-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                            <span class="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <p class="font-bold text-slate-900 mb-1">Alamat Utama</p>
                                            <p class="font-light leading-relaxed">Jl. Pendidikan No. 1, Kelurahan Cerdas, Kecamatan Pintar, Kota Jakarta, 12345.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-4 text-slate-600">
                                        <div class="size-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                            <span class="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <p class="font-bold text-slate-900 mb-1">Telepon</p>
                                            <p class="font-light">(021) 555-0123 / (021) 555-0124</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start gap-4 text-slate-600">
                                        <div class="size-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                            <span class="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p class="font-bold text-slate-900 mb-1">Email</p>
                                            <p class="font-light">info@smn1.sch.id <br> pendaftaran@smn1.sch.id</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Map Placeholder -->
                            <div class="bg-slate-200 rounded-[2rem] overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-slate-300">
                                <span class="material-symbols-outlined text-[64px] text-slate-400 mb-2">map</span>
                                <div class="absolute inset-0 bg-slate-100/50 backdrop-blur-sm flex items-center justify-center">
                                    <p class="font-bold text-slate-500 uppercase tracking-widest text-sm">Google Maps Integrasi</p>
                                </div>
                            </div>
                        </div>

                        <!-- Contact Form -->
                        <div class="bg-white rounded-[2rem] p-10 md:p-14 shadow-xl border border-slate-100">
                            <h2 class="text-3xl font-extrabold text-slate-900 mb-2">Tinggalkan Pesan</h2>
                            <p class="text-slate-500 font-light mb-8">Silakan isi formulir di bawah ini, tim kami akan membalas via email atau telepon sesegera mungkin.</p>
                            
                            <form class="space-y-6">
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="col-span-2 md:col-span-1">
                                        <label class="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                                        <input type="text" placeholder="Cth: Budi Santoso" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400">
                                    </div>
                                    <div class="col-span-2 md:col-span-1">
                                        <label class="block text-sm font-bold text-slate-700 mb-2">Nomor Telepon</label>
                                        <input type="tel" placeholder="Cth: 08123456789" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400">
                                    </div>
                                    <div class="col-span-2">
                                        <label class="block text-sm font-bold text-slate-700 mb-2">Alamat Email</label>
                                        <input type="email" placeholder="Cth: budi@email.com" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400">
                                    </div>
                                    <div class="col-span-2">
                                        <label class="block text-sm font-bold text-slate-700 mb-2">Perihal / Tujuan</label>
                                        <select class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all text-slate-700">
                                            <option>Informasi Pendaftaran Siswa Baru</option>
                                            <option>Pertanyaan Fasilitas & Program</option>
                                            <option>Tawaran Kerjasama</option>
                                            <option>Lainnya</option>
                                        </select>
                                    </div>
                                    <div class="col-span-2">
                                        <label class="block text-sm font-bold text-slate-700 mb-2">Pesan Anda</label>
                                        <textarea rows="5" placeholder="Tuliskan pesan Anda secara detail..." class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 resize-none"></textarea>
                                    </div>
                                    <div class="col-span-2">
                                        <button type="button" class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
                                            Kirim Pesan Sekarang
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
};
