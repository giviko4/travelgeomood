import OldTbilisiImg from '../assets/images/oldtbilisi.jpg';
import KakhetiImg from '../assets/images/kakheti.jpg';
import GoriscixeImg from '../assets/images/goriscixe.jpg';
import SvanetiImg from '../assets/images/svaneti.jpg';
import BatumiImg from '../assets/images/batumi.jpg';
import KhevsuretiImg from '../assets/images/khevsureti.jpg';
import SighnaghiImg from '../assets/images/sighnaghi.jpg';

export const destinations = [
  { 
    id: 'oldtbilisi', 
    images: [{ src: OldTbilisiImg, name: 'Tbilisi' }, { src: KakhetiImg, name: 'Kakheti' }, { src: GoriscixeImg, name: 'Gori Fortress' }],
    name: { en: 'Tour to Georgia for 3 days', ru: 'Тур в Грузию на 3 дня' },
    price: '300',
    routeLabel: { en: 'Tour route:', ru: 'Маршрут тура:' },
    route: { en: 'Tbilisi - Kakheti - Gori', ru: 'Тбилиси - Кахетия - Гори' },
    duration: { en: '3 days / 2 nights', ru: '3 дня / 2 ночи' },
    description: { en: 'The best option for a short and intense program - a reboot from the daily hustle and bustle. The most beautiful places and fresh air will help you recharge your batteries. Tour cost per person $300. Discount from 4 people $250, from 17 people $200.', ru: 'Лучший вариант для короткой и насыщенной программы - перезагрузка от повседневной суеты. Красивейшие места и свежий воздух помогут вам зарядиться энергией. Стоимость тура на человека $300. Скидка от 4-х человек $250, от 17-ти человек $200.' },
  },
  { 
    id: 'svaneti-5day',
    images: [{ src: SvanetiImg, name: 'Svaneti' }], 
    name: { en: 'Tour to Georgia for 5 days', ru: 'Тур в Грузию на 5 дней' },
    price: '500',
    routeLabel: { en: 'Tour itinerary', ru: 'Маршрут тура' },
    route: { en: 'Tbilisi - Mtskheta - Kazbegi', ru: 'Тбилиси - Мцхета - Казбеги' },
    duration: { en: '5 days / 4 nights', ru: '5 дней / 4 ночи' },
    description: { en: 'Great opportunity to see the maximum in a short time. The tour starts from Tbilisi and covers the main attractions of central and eastern Georgia. Tour cost per person $500. Discount from 4 people $450, from 17 people $300.', ru: 'Отличная возможность увидеть максимум за короткое время. Тур начинается из Тбилиси и охватывает основные достопримечательности центральной и восточной Грузии. Стоимость тура на человека $500. Скидка от 4-х человек $450, от 17-ти человек $300.' },
  },
  { 
    id: 'batumi-7day', 
    images: [{ src: BatumiImg, name: 'Batumi' }], 
    name: { en: 'Tour to Georgia for 7 days', ru: 'Тур в Грузию на 7 дней' },
    price: '500',
    routeLabel: { en: 'Tour itinerary', ru: 'Маршрут тура' },
    route: { en: 'Kazbegi - Mtskheta - Gori - Uplistsikhe - Kakheti', ru: 'Казбеги - Мцхета - Гори - Уплисцихе - Кахетия' },
    duration: { en: '7 days / 6 nights', ru: '7 дней / 6 ночей' },
    description: { en: 'A unique tour where you spend all nights in Tbilisi while visiting multiple regions. Tour cost per person $500. Discount from 4 people $450, from 17 people $300.', ru: 'Уникальный тур, где вы проводите все ночи в Тбилиси, посещая при этом множество регионов. Стоимость тура на человека $500. Скидка от 4-х человек $450, от 17-ти человек $300.' },
  },
  { 
    id: 'khevsureti-8day', 
    images: [{ src: KhevsuretiImg, name: 'Khevsureti' }], 
    name: { en: 'Tour to Georgia For 8 days', ru: 'Тур в Грузию на 8 дней' },
    price: '750',
    routeLabel: { en: 'Tour route:', ru: 'Маршрут тура:' },
    route: { en: 'Tbilisi - Mtskheta - Sighnaghi - Tsinandali - Kazbegi...', ru: 'Тбилиси - Мцхета - Сигнахи - Цинандали - Казбеги...' },
    duration: { en: '8 days / 7 nights', ru: '8 дней / 7 ночей' },
    description: { en: 'A tour for true connoisseurs of Georgian culture. Tour cost per person $750. Discount from 4 people $670, from 17 people $600.', ru: 'Тур для истинных ценителей грузинской культуры. Стоимость тура на человека $750. Скидка от 4-х человек $670, от 17-ти человек $600.' },
  },
  {
    id: 'khevsureti-2day',
    images: [{ src: KhevsuretiImg, name: 'Shatili, Khevsureti' }],
    name: { en: 'Two day tour to Khevsureti', ru: 'Двухдневный тур в Хевсурети' },
    price: '200',
    routeLabel: { en: 'Route:', ru: 'Маршрут:' },
    route: { en: 'Tbilisi – Shatili – Mutso – Tbilisi', ru: 'Тбилиси – Шатили – Муцо – Тбилиси' },
    duration: { en: '1 night/2 days', ru: '1 ночь/2 дня' },
    description: { en: 'An express tour to a remote region. Tour cost per person $200. Discount from 4 people $180, from 17 people $150.', ru: 'Экспресс-тур в отдаленный регион. Стоимость тура на человека $200. Скидка от 4-х человек $180, от 17-ти человек $150.' },
  },
  {
    id: 'georgia-10day',
    images: [{ src: SvanetiImg, name: 'Svaneti' }],
    name: { en: 'Tour to Georgia 10 days', ru: 'Тур в Грузию на 10 дней' },
    price: '900',
    routeLabel: { en: 'Tour route:', ru: 'Маршрут тура:' },
    route: { en: 'Samtskhe-Javakheti, Imereti, Svaneti...', ru: 'Самцхе-Джавахети, Имерети, Сванетия...' },
    duration: { en: '10 days / 9 nights', ru: '10 дней / 9 ночей' },
    description: { en: 'A grand tour covering diverse regions. Tour cost per person $900. Discount from 4 people $800, from 17 people $750.', ru: 'Грандиозный тур по разнообразным регионам. Стоимость тура на человека $900. Скидка от 4-х человек $800, от 17-ти человек $750.' },
  },
  {
    id: 'visiting-grandma',
    images: [{ src: KakhetiImg, name: 'Telavi, Kakheti' }],
    name: { en: 'Visiting Grandma', ru: 'В гости к бабушке' },
    price: '150',
    routeLabel: { en: 'Tour route:', ru: 'Маршрут тура:' },
    route: { en: 'Gombori, Ujarma, Shuamta, Telavi', ru: 'Гомбори, Уджарма, Шуамта, Телави' },
    duration: { en: '1 day', ru: '1 день' },
    description: { en: 'A cozy trip to the heart of Kakheti. Tour cost per person $150. Discount from 4 people $120, from 17 people $75.', ru: 'Уютная поездка в сердце Кахетии. Стоимость тура на человека $150. Скидка от 4-х человек $120, от 17-ти человек $75.' },
  },
  {
    id: 'kakheti-short-tour',
    images: [{ src: SighnaghiImg, name: 'Sighnaghi, Kakheti' }],
    name: { en: 'Tour to Kakheti', ru: 'Тур в Кахетию' },
    price: '90',
    routeLabel: { en: 'Kakheti Tour Route', ru: 'Маршрут по Кахетии' },
    route: { en: 'A short trip to the wine region.', ru: 'Короткая поездка в винный регион.' },
    duration: { en: '1 day', ru: '1 день' },
    description: { en: 'A budget-friendly tour to see Kakheti. Tour cost per person $90. Discount from 4 people $70, from 17 people $35.', ru: 'Бюджетный тур для осмотра Кахетии. Стоимость тура на человека $90. Скидка от 4-х человек $70, от 17-ти человек $35.' },
  },
];