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

const testData = {
    productData: [
        {
            id: 1,
            img: cpu1,
            title: 'AMD - Ryzen 7 5800X 4th Gen 8-core, 16-threads Unlocked Desktop Processor Without Cooler',
            desc: 'actually a chad laptop',
            quantity: '69',

            cat: 'CPU',
            brand: 'Ryzen',
            price: '249.00',
            rating: '★★★★★',
        },
        {
            id: 2,
            img: cpu2,
            title: 'Intel - Core i7-13700K 13th Gen 16 cores 8 P-cores + 8 E-cores 30M Cache, 3.4 to 5.4 GHz LGA1700 Unlocked Desktop Processor',
            desc: 'actually a chad laptop',
            quantity: '69',

            cat: 'CPU',
            brand: 'Intel',
            price: '399.99',
            rating: '★★★★★',
        },

        {
            id: 3,
            img: motherboard1,
            title: 'MSI - B550 GAMING PLUS (Socket AM4) USB-C Gen 2 AMD ATX GAMING Motherboard PCIE Gen 4 - Black',
            desc: 'actually a poopoo laptop',
            quantity: '420',

            cat: 'Motherboard',
            brand: 'MSI',
            price: '157.99',
            rating: '★★★☆☆',
        },
        {
            id: 4,
            img: motherboard2,
            title: 'MSI - B550 TOMAHAWK MAX WIFI (Socket AM4) USB-C Gen2 AMD ATX GAMING Motherboard - Black',
            desc: 'actually a poopoo laptop',
            quantity: '420',

            cat: 'Motherboard',
            brand: 'MSI',
            price: '179.99',
            rating: '★★★☆☆',
        },

        {
            id: 5,
            img: ram1,
            title: 'CORSAIR - VENGEANCE LPX 32GB (2PK x 16GB) 3600MHz DDR4 C18 DIMM Desktop Memory - Black',
            desc: 'k',
            quantity: '707',

            cat: 'RAM',
            brand: 'CORSAIR',
            price: '69.99',
            rating: '★★★★☆',
        },
        {
            id: 6,
            img: ram2,
            title: 'CORSAIR - VENGEANCE PRO 32GB (2PK x 16GB) 3600MHz DDR4 C18 DIMM Desktop Memory with RGB lighting',
            desc: 'k',
            quantity: '707',

            cat: 'RAM',
            brand: 'CORSAIR',
            price: '82.99',
            rating: '★★★★☆',
        },

        {
            id: 7,
            img: ssd1,
            title: 'Samsung - 870 EVO 2TB Internal SSD SATA',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'SSD',
            brand: 'Samsung',
            price: '119.99',
            rating: '★★★★★',
        },
        {
            id: 8,
            img: hdd1,
            title: 'WD - Blue 4TB Internal SATA Hard Drive for Desktops',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'HDD',
            brand: 'WD',
            price: '68.99',
            rating: '★★★★★',
        },

        {
            id: 9,
            img: case1,
            title: 'CORSAIR - 4000D AIRFLOW MidTower Case',
            desc: '',
            quantity: '7331',

            cat: 'Case',
            brand: 'CORSAIR',
            price: '129.99',
            rating: '★★★★★',
        },
        {
            id: 10,
            img: case2,
            title: 'NZXT - H7 Flow ATX Mid-Tower Case - Black',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'Case',
            brand: 'NZXT',
            price: '129.99',
            rating: '★★★★★',
        },

        {
            id: 11,
            img: cooler1,
            title: 'NZXT - Kraken X63 280mm RGB All-in-one Liquid CPU Cooler - Black',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'Cooler',
            brand: 'NZXT',
            price: '154.99',
            rating: '★★★★★',
        },
        {
            id: 12,
            img: cooler2,
            title: 'NZXT - Kraken X63 280mm RGB All-in-one Liquid CPU Cooler - Black',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'Cooler',
            brand: 'NZXT',
            price: '219.99',
            rating: '★★★★★',
        },

        {
            id: 13,
            img: gpu1,
            title: 'NVIDIA GeForce RTX 3060 Ventus 3X 12G OC - 12GB GDDR6 - PCI Express 4.0 - Graphics Card - Black',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'GPU',
            brand: 'NVIDIA',
            price: '369.99',
            rating: '★★★★★',
        },
        {
            id: 14,
            img: gpu2,
            title: 'GIGABYTE - NVIDIA GeForce RTX 3060 12GB GDDR6 PCI Express 4.0 Graphics Card',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'GPU',
            brand: 'GIGABYTE',
            price: '369.99',
            rating: '★★★★★',
        },

        {
            id: 15,
            img: psu1,
            title: 'CORSAIR - RMe Series RM750e 80 PLUS Gold Fully Modular Low-Noise ATX 3.0 and PCIE 5.0 Power Supply - Black',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'PSU',
            brand: 'CORSAIR',
            price: '99.99',
            rating: '★★★★★',
        },
        {
            id: 16,
            img: psu2,
            title: 'CORSAIR - RMx Series RM1000x 80 PLUS Gold Fully Modular ATX Power Supply - Black',
            desc: 'its a mmk laptop',
            quantity: '7331',

            cat: 'PSU',
            brand: 'CORSAIR',
            price: '189.99',
            rating: '★★★★★',
        },
    ]
}

export default testData;