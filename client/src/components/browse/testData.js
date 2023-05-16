import cpu1 from '../../img/products_page/cpu1.png'
import cpu2 from '../../img/products_page/cpu2.jpg'

import motherboard1 from '../../img/products_page/motherboard1.png'
import motherboard2 from '../../img/products_page/motherboard2.png'

import ram1 from '../../img/products_page/ram1.png'
import ram2 from '../../img/products_page/ram2.png'

import ssd1 from '../../img/products_page/ssd1.jpg'
import hdd1 from '../../img/products_page/hdd1.jpg'

import case1 from '../../img/products_page/case1.png'
import case2 from '../../img/products_page/case2.png'

import cooler1 from '../../img/products_page/cooler1.png'
import cooler2 from '../../img/products_page/cooler2.png'

import gpu1 from '../../img/products_page/gpu1.png'
import gpu2 from '../../img/products_page/gpu2.png'

import psu1 from '../../img/products_page/psu1.png'
import psu2 from '../../img/products_page/psu2.png'

// Presets
import cpu_student from '../../img/presets/student/student_cpu.jpg'
import cooler_student from '../../img/presets/student/student_cooler.jpg'
import ram_student from '../../img/presets/student/student_ram.jpg'
import ssd_student from '../../img/presets/student/student_ssd.jpg'
import hdd_student from '../../img/presets/student/student_hdd.jpg'
import gpu_student from '../../img/presets/student/student_gpu.jpg'
import psu_student from '../../img/presets/student/student_psu.jpg'
import case_student from '../../img/presets/student/student_case.jpg'
import motherboard_student from '../../img/presets/student/student_motherboard.jpg'

// Gamer Preset
// cpu_gamer is cpu1
import cooler_gamer from '../../img/presets/gamer/gamer_cooler.jpg'
import ram_gamer from '../../img/presets/gamer/gamer_ram.jpg'
import ssd_gamer from '../../img/presets/gamer/gamer_ssd.jpg'
import hdd_gamer from '../../img/presets/gamer/gamer_hdd.jpg'
import gpu_gamer from '../../img/presets/gamer/gamer_gpu.jpg'
import psu_gamer from '../../img/presets/gamer/gamer_psu.jpg'
import case_gamer from '../../img/presets/gamer/gamer_case.jpg'
import motherboard_gamer from '../../img/presets/gamer/gamer_motherboard.jpg'

// Business Preset
// cpu_business is cpu2
import cooler_business from '../../img/presets/business/business_cooler.jpg'
import ram_business from '../../img/presets/business/business_ram.jpg'
import ssd_business from '../../img/presets/business/business_ssd.jpg'
import hdd_business from '../../img/presets/business/business_hdd.jpg'
import gpu_business from '../../img/presets/business/business_gpu.jpg'
import psu_business from '../../img/presets/business/business_psu.jpg'
import case_business from '../../img/presets/business/business_case.jpg'
import motherboard_business from '../../img/presets/business/business_motherboard.jpg'


const testData = {
    productData: [
        {
            id: 1,
            img: cpu1,
            title: 'AMD - Ryzen 7 5800X 4th Gen 8-core, 16-threads Unlocked Desktop Processor Without Cooler',
            desc: 'Latest Technology for the best performance',
            quantity: '70',

            cat: 'CPU',
            brand: 'Ryzen',
            price: '249.00',
            rating: '★★★★★',
        },
        {
            id: 2,
            img: cpu2,
            title: 'Intel - Core i7-13700K 13th Gen 16 cores 8 P-cores + 8 E-cores 30M Cache, 3.4 to 5.4 GHz LGA1700 Unlocked Desktop Processor',
            desc: 'Intel Version of the Ryzen 7',
            quantity: '70',

            cat: 'CPU',
            brand: 'Intel',
            price: '399.99',
            rating: '★★★★★',
        },

        {
            id: 3,
            img: motherboard1,
            title: 'MSI - B550 GAMING PLUS (Socket AM4) USB-C Gen 2 AMD ATX GAMING Motherboard PCIE Gen 4 - Black',
            desc: 'Trusted MSI Component',
            quantity: '70',

            cat: 'Motherboard',
            brand: 'MSI',
            price: '157.99',
            rating: '★★★☆☆',
        },
        {
            id: 4,
            img: motherboard2,
            title: 'MSI - B550 TOMAHAWK MAX WIFI (Socket AM4) USB-C Gen2 AMD ATX GAMING Motherboard - Black',
            desc: 'Reliable Motherboard for gamers',
            quantity: '70',

            cat: 'Motherboard',
            brand: 'MSI',
            price: '179.99',
            rating: '★★★☆☆',
        },

        {
            id: 5,
            img: ram1,
            title: 'CORSAIR - VENGEANCE LPX 32GB (2PK x 16GB) 3600MHz DDR4 C18 DIMM Desktop Memory - Black',
            desc: 'No RGB for the workers',
            quantity: '70',

            cat: 'RAM',
            brand: 'CORSAIR',
            price: '69.99',
            rating: '★★★★☆',
        },
        {
            id: 6,
            img: ram2,
            title: 'CORSAIR - VENGEANCE PRO 32GB (2PK x 16GB) 3600MHz DDR4 C18 DIMM Desktop Memory with RGB lighting',
            desc: 'RGB for the gamers',
            quantity: '70',

            cat: 'RAM',
            brand: 'CORSAIR',
            price: '82.99',
            rating: '★★★★☆',
        },

        {
            id: 7,
            img: ssd1,
            title: 'Samsung - 870 EVO 2TB Internal SSD SATA',
            desc: 'SSD for Gaming',
            quantity: '70',

            cat: 'SSD',
            brand: 'Samsung',
            price: '119.99',
            rating: '★★★★★',
        },
        {
            id: 8,
            img: hdd1,
            title: 'WD - Blue 4TB Internal SATA Hard Drive for Desktops',
            desc: 'HDD for Office Work',
            quantity: '70',

            cat: 'HDD',
            brand: 'WD',
            price: '68.99',
            rating: '★★★★★',
        },

        {
            id: 9,
            img: case1,
            title: 'CORSAIR - 4000D AIRFLOW MidTower Case',
            desc: 'Reliable Corsair Case',
            quantity: '70',

            cat: 'Case',
            brand: 'CORSAIR',
            price: '129.99',
            rating: '★★★★★',
        },
        {
            id: 10,
            img: case2,
            title: 'NZXT - H7 Flow ATX Mid-Tower Case - Black',
            desc: 'Popular in demand NZXT Case',
            quantity: '70',

            cat: 'Case',
            brand: 'NZXT',
            price: '129.99',
            rating: '★★★★★',
        },

        {
            id: 11,
            img: cooler1,
            title: 'NZXT - X63 280mm RGB All-in-one Liquid CPU Cooler - Black',
            desc: 'One Version of NZXTs Liquid Coolers',
            quantity: '70',

            cat: 'Cooler',
            brand: 'NZXT',
            price: '154.99',
            rating: '★★★★★',
        },
        {
            id: 12,
            img: cooler2,
            title: 'NZXT - Kraken X63 280mm RGB All-in-one Liquid CPU Cooler - Black',
            desc: 'Liquid Coolers are the future',
            quantity: '70',

            cat: 'Cooler',
            brand: 'NZXT',
            price: '219.99',
            rating: '★★★★★',
        },

        {
            id: 13,
            img: gpu1,
            title: 'NVIDIA GeForce RTX 3060 Ventus 3X 12G OC - 12GB GDDR6 - PCI Express 4.0 - Graphics Card - Black',
            desc: 'One version of the 3060',
            quantity: '70',

            cat: 'GPU',
            brand: 'NVIDIA',
            price: '369.99',
            rating: '★★★★★',
        },
        {
            id: 14,
            img: gpu2,
            title: 'GIGABYTE - NVIDIA GeForce RTX 3060 12GB GDDR6 PCI Express 4.0 Graphics Card',
            desc: 'Recent Graphics Card - Can handle any game',
            quantity: '70',

            cat: 'GPU',
            brand: 'GIGABYTE',
            price: '369.99',
            rating: '★★★★★',
        },

        {
            id: 15,
            img: psu1,
            title: 'CORSAIR - RMe Series RM750e 80 PLUS Gold Fully Modular Low-Noise ATX 3.0 and PCIE 5.0 Power Supply - Black',
            desc: 'Budget Power Supply from trusted Corsair',
            quantity: '70',

            cat: 'PSU',
            brand: 'CORSAIR',
            price: '99.99',
            rating: '★★★★★',
        },
        {
            id: 16,
            img: psu2,
            title: 'CORSAIR - RMx Series RM1000x 80 PLUS Gold Fully Modular ATX Power Supply - Black',
            desc: 'Classic Power Supply from trusted Corsair',
            quantity: '70',

            cat: 'PSU',
            brand: 'CORSAIR',
            price: '189.99',
            rating: '★★★★★',
        },
        {
            id: 17,
            img: psu2,
            title: 'CORSAIR - RMx Series RM1000x 80 PLUS Gold Fully Modular ATX Power Supply - Black',
            desc: 'Classic Power Supply from trusted Corsair',
            quantity: '70',

            cat: 'PSU',
            brand: 'CORSAIR',
            price: '189.99',
            rating: '★★★★★',
        },
        // presets
        {
            id: 18,
            img: cpu_student,
            title: 'AMD Ryzen 5 5600X',
            desc: "AMD's Fastest 6-Core (12 Processing Threads) Processor for Mainstream Use",
            quantity: '70',

            cat: 'CPU',
            brand: 'AMD',
            price: '148.00',
            rating: '★★★★★',
        },
        {
            id: 19,
            img: motherboard_student,
            title: 'ASUS TUF Gaming B550-PLUS',
            desc: "Latest Asus Motherboard for Peak Performance",
            quantity: '70',

            cat: 'Motherboard',
            brand: 'ASUS',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 20,
            img: ram_student,
            title: 'Corsair Vengeance LPX 16GB (2x 8GB) DDR4',
            desc: "Trusted Corsair RAM",
            quantity: '70',

            cat: 'RAM',
            brand: 'CORSAIR',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 21,
            img: ssd_student,
            title: 'Samsung 970 EVO Plus 500GB NVMe',
            desc: "Popular SSD Choice for Work",
            quantity: '70',

            cat: 'SSD',
            brand: 'SAMSUNG',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 22,
            img: hdd_student,
            title: 'Seagate Barracuda 2TB 7200 RPM',
            desc: "Most Used HDD Among NASA",
            quantity: '70',

            cat: 'HDD',
            brand: 'BARRACUDA',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 23,
            img: case_student,
            title: 'NZXT H510',
            desc: "Clean Tower Case - Perfect for Office and Gaming",
            quantity: '70',

            cat: 'Case',
            brand: 'NZXT',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 24,
            img: cooler_student,
            title: 'Cooler Master Hyper 212 RGB Black Edition',
            desc: "Trusted Cooler Master for Budget Option",
            quantity: '70',

            cat: 'Cooler',
            brand: 'COOLER MASTER',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 25,
            img: gpu_student,
            title: 'NVIDIA GeForce GTX 1660 Super',
            desc: "Popular Budget GPU Among Gamers",
            quantity: '70',

            cat: 'GPU',
            brand: 'NVIDIA',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 26,
            img: psu_student,
            title: 'EVGA 600 W1, 80+ WHITE 600W',
            desc: "Standard EVGA Power Supply",
            quantity: '70',

            cat: 'PSU',
            brand: 'EVGA',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 27,
            img: motherboard_gamer,
            title: 'MSI MAG X570 TOMAHAWK',
            desc: "Trusted MSI Motherboard",
            quantity: '70',

            cat: 'Motherboard',
            brand: 'MSI',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 28,
            img: ram_gamer,
            title: 'G.Skill Trident Z RGB 32GB (2 x 16GB) DDR4',
            desc: "RGB for the Gamers",
            quantity: '70',

            cat: 'RAM',
            brand: 'G.Skill',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 29,
            img: ssd_gamer,
            title: 'Western Digital SN850 1TB NVMe',
            desc: "SSD Made to Withstand Wear and Tear",
            quantity: '70',

            cat: 'SSD',
            brand: 'WD',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 30,
            img: hdd_gamer,
            title: 'Seagate Barracuda 4TB 7200 RPM',
            desc: "Standard 4TB Powerful Enough for NASA",
            quantity: '70',

            cat: 'HDD',
            brand: 'Barracuda',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 31,
            img: case_gamer,
            title: 'Cooler Master MasterCase H500P Mesh',
            desc: "Budget Case for Gamers",
            quantity: '70',

            cat: 'Case',
            brand: 'Cooler Master',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 32,
            img: cooler_gamer,
            title: 'NZXT Kraken X63',
            desc: "Nothing is More Reliable than NZXT",
            quantity: '70',

            cat: 'Cooler',
            brand: 'NZXT',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 33,
            img: gpu_gamer,
            title: 'NVIDIA GeForce RTX 3070',
            desc: "No One Beats NVIDIA",
            quantity: '70',

            cat: 'GPU',
            brand: 'NVIDIA',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 34,
            img: psu_gamer,
            title: 'Seasonic Focus GX-750, 80+ Gold 750W',
            desc: "Fancy Golden PSU",
            quantity: '70',

            cat: 'PSU',
            brand: 'Seasonic',
            price: '155.00',
            rating: '★★★★★',
        },
         {
            id: 35,
            img: motherboard_business,
            title: 'ASUS Prime Z590-A',
            desc: "Reliable ASUS Motherboards",
            quantity: '70',

            cat: 'Motherboard',
            brand: 'ASUS',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 36,
            img: ram_business,
            title: 'Corsair Vengeance LPX 32GB (2 x 16GB) DDR4',
            desc: "Corsair RAM is Great",
            quantity: '70',

            cat: 'RAM',
            brand: 'Corsair',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 37,
            img: ssd_business,
            title: 'Samsung 980 Pro 1TB NVMe',
            desc: "Samsung is Always Good",
            quantity: '70',

            cat: 'SSD',
            brand: 'Samsung',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 38,
            img: hdd_business,
            title: 'Seagate IronWolf Pro 4TB 7200 RPM',
            desc: "Seagate is Best",
            quantity: '70',

            cat: 'HDD',
            brand: 'Barracuda',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 39,
            img: case_business,
            title: 'Fractal Design Meshify C',
            desc: "Standard Case",
            quantity: '70',

            cat: 'Case',
            brand: 'Fractal',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 40,
            img: cooler_business,
            title: 'Noctua NH-D15',
            desc: "Popular Desktop Coolers",
            quantity: '70',

            cat: 'Cooler',
            brand: 'Noctua',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 41,
            img: gpu_business,
            title: 'NVIDIA GeForce RTX 3060 Ti',
            desc: "Nothing Beats NVIDIA",
            quantity: '70',

            cat: 'GPU',
            brand: 'NVIDIA',
            price: '155.00',
            rating: '★★★★★',
        },
        {
            id: 42,
            img: psu_business,
            title: 'Corsair RM750x, 80+ Gold 750W',
            desc: "750W for the Power",
            quantity: '70',

            cat: 'PSU',
            brand: 'Corsair',
            price: '155.00',
            rating: '★★★★★',
        },
        
    ]
}

export default testData;
