export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Muhammad Lutfianto Nugroho',
            child: 'Putra pertama',
            father: 'Amat Robai',
            mother: 'Zumrotun',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Fatchiyatu Tooyibah',
            child: 'Putri ke dua',
            father: 'Muchanan',
            mother: 'Suwarni',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'November',
            date: '25',
            day: 'Rabu Manis',
            hours: {
                start: '08.30',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'November',
            date: '25',
            day: 'Rabu Manis',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Nglimut Gonoharjo 05/01 Limbangan, Kendal'
    },

    link: {
        calendar: 'https://calendar.app.google/kcZ5ZLoEAVQRKNRQ6',
        map: 'https://maps.app.goo.gl/8ZmSxvpekAogJ7UZ7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Muhammad Lutfianto Nugroho',
            icon: './src/assets/images/bni.png',
            rekening: '778190879'
        },
        {
            id: 2,
            name: 'Shoopepay/Dana Muhammad Lutfianto Nugroho',
            icon: './src/assets/images/shopeedana.png',
            rekening: '088239292636'
        },
        {
            id: 3,
            name: 'Shoopepay/Dana Muhammad Lutfianto Nugroho',
            icon: './src/assets/images/spay.png',
            rekening: '088239292636'
        },
    ],

    audio: './src/assets/audio/lagu.mp3',

    api: 'https://script.google.com/macros/s/AKfycby1e2HJth-SXdNMpGGyXIjFKMCcMxfw74kvyk6dZnFTC-7ZS2AYH6mFA2Xvs245fDOK/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
