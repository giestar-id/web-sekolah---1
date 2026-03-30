const layout = require('./views/layouts/layout.js');
const homeView = require('./views/pages/home.js');
const profileView = require('./views/pages/profile.js');
const principalView = require('./views/pages/principal.js');
const programsView = require('./views/pages/programs.js');
const facilitiesView = require('./views/pages/facilities.js');
const articlesView = require('./views/pages/articles.js');
const contactView = require('./views/pages/contact.js');

module.exports = {
    '/': (query) => {
        return layout(homeView(), 'Sekolah Modern Nusantara - Beranda');
    },
    '/profile': (query) => {
        return layout(profileView(), 'Sekolah Modern Nusantara - Profil Sekolah');
    },
    '/principal': (query) => {
        return layout(principalView(), 'Sekolah Modern Nusantara - Kepala Sekolah');
    },
    '/programs': (query) => {
        return layout(programsView(), 'Sekolah Modern Nusantara - Program Sekolah');
    },
    '/facilities': (query) => {
        return layout(facilitiesView(), 'Sekolah Modern Nusantara - Fasilitas');
    },
    '/articles': (query) => {
        return layout(articlesView(), 'Sekolah Modern Nusantara - Artikel Sekolah');
    },
    '/contact': (query) => {
        return layout(contactView(), 'Sekolah Modern Nusantara - Kontak');
    },
};
