module.exports = () => {
    return `
    <header class="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-slate-200">
        <div class="layout-container flex justify-center">
            <div class="flex flex-col max-w-[1280px] w-full px-4 md:px-10 py-3 md:py-4">
                <div class="flex items-center justify-between whitespace-nowrap">
                    <!-- Logo -->
                    <a href="/" class="flex items-center gap-3 text-slate-900 cursor-pointer no-underline">
                        <div class="size-8 text-primary flex items-center justify-center rounded-lg bg-blue-50">
                            <span class="material-symbols-outlined text-[24px]">school</span>
                        </div>
                        <div class="flex flex-col">
                            <h2 class="text-base font-bold leading-tight tracking-tight uppercase">SMN 1</h2>
                            <p class="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Sekolah Modern</p>
                        </div>
                    </a>
                    <!-- Nav Links (Desktop) -->
                    <div class="hidden md:flex items-center gap-8">
                        <a class="text-slate-600 text-sm font-semibold leading-normal hover:text-primary transition-colors cursor-pointer" href="/">Beranda</a>
                        <div class="relative group cursor-pointer inline-block">
                            <a class="text-slate-600 text-sm font-semibold leading-normal hover:text-primary transition-colors flex items-center gap-1" href="/profile">Profil <span class="material-symbols-outlined text-[16px]">expand_more</span></a>
                            <div class="absolute left-0 top-full pt-2 hidden group-hover:block w-48 z-50">
                                <div class="bg-white rounded-xl shadow-lg border border-slate-100 p-2 flex flex-col gap-1">
                                    <a class="px-3 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors" href="/profile">Profil Sekolah</a>
                                    <a class="px-3 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors" href="/principal">Kepala Sekolah</a>
                                </div>
                            </div>
                        </div>
                        <a class="text-slate-600 text-sm font-semibold leading-normal hover:text-primary transition-colors cursor-pointer" href="/programs">Program</a>
                        <a class="text-slate-600 text-sm font-semibold leading-normal hover:text-primary transition-colors cursor-pointer" href="/facilities">Fasilitas</a>
                        <a class="text-slate-600 text-sm font-semibold leading-normal hover:text-primary transition-colors cursor-pointer" href="/articles">Artikel</a>
                        <a class="text-slate-600 text-sm font-semibold leading-normal hover:text-primary transition-colors cursor-pointer" href="/contact">Kontak</a>
                    </div>
                 
                    <!-- Mobile Menu Button -->
                     <button class="md:hidden flex items-center justify-center rounded-lg h-10 w-10 hover:bg-slate-100 text-slate-600 transition-colors" onclick="document.querySelector('.mobile-menu').classList.toggle('hidden')">
                        <span class="material-symbols-outlined text-[20px]">menu</span>
                    </button>
                </div>
                <!-- Mobile Menu -->
                 <div class="mobile-menu hidden md:hidden flex flex-col pt-4 pb-2 border-t border-slate-200 mt-2 gap-2">
                        <a class="py-2 px-3 rounded-lg text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary" href="/">Beranda</a>
                        <a class="py-2 px-3 rounded-lg text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary" href="/profile">Profil Sekolah</a>
                        <a class="py-2 px-3 rounded-lg text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary" href="/principal">Kepala Sekolah</a>
                        <a class="py-2 px-3 rounded-lg text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary" href="/programs">Program</a>
                        <a class="py-2 px-3 rounded-lg text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary" href="/facilities">Fasilitas</a>
                        <a class="py-2 px-3 rounded-lg text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary" href="/articles">Artikel</a>
                        <a class="py-2 px-3 rounded-lg text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary" href="/contact">Kontak</a>
                 </div>
            </div>
        </div>
    </header>
    `;
};
