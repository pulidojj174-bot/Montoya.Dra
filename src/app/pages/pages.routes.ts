import { Routes } from '@angular/router';

const BASE_URL = 'https://montoya-dra.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/home/hero-1.jpg`;
const LOGO_IMAGE = `${BASE_URL}/assets/images/logos/MONTOYA_DRA.png`;

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout-home/layout-home').then(m =>m.LayoutHome),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
        data: {
          title: 'Montoya.Dra | Clínica Odontológica - Sonrisas de Confianza',
          description:
            'Montoya.Dra: clínica odontológica integral con los mejores tratamientos dentales. Implantes, ortodoncia, estética dental y más. Profesionales especializados con tecnología de punta.',
          keywords: 'odontología, clínica dental, implantes dentales, ortodoncia, estética dental, blanqueamiento dental, Montoya.Dra, tratamientos dentales Colombia',
          image: DEFAULT_IMAGE,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Montoya.Dra',
            url: BASE_URL,
            logo: LOGO_IMAGE,
            description: 'Clínica odontológica integral especializada en tratamientos dentales avanzados con equipos modernos.',
            medicalSpecialty: 'Dentistry',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Spanish',
            },
          },
        },
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About),
        data: {
          title: 'Sobre Nosotros | Montoya.Dra - Clínica Odontológica',
          description: 'Conoce la historia, misión y valores de Montoya.Dra. Contamos con un equipo de profesionales comprometidos con tu salud dental.',
          keywords: 'sobre Montoya.Dra, historia, misión, profesionales dentales, equipo odontológico, clínica dental Colombia',
          image: DEFAULT_IMAGE,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Montoya.Dra',
            url: BASE_URL,
            logo: LOGO_IMAGE,
            description: 'Clínica odontológica integral especializada en tratamientos dentales avanzados con equipos modernos.',
            medicalSpecialty: 'Dentistry',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Spanish',
            },
          },
        },
      },
      {
        path: 'service',
        loadComponent: () => import('./service/service').then(m => m.Service),
        data: {
          title: 'Servicios Dentales | Montoya.Dra',
          description: 'Descubre nuestros servicios odontológicos: implantes, ortodoncia, estética dental, blanqueamiento y más tratamientos especializados.',
          keywords: 'servicios dentales, implantes dentales, ortodoncia, blanqueamiento dental, estética dental, tratamientos dentales, Montoya.Dra',
          image: DEFAULT_IMAGE,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Montoya.Dra',
            url: BASE_URL,
            logo: LOGO_IMAGE,
            description: 'Clínica odontológica integral especializada en tratamientos dentales avanzados con equipos modernos.',
            medicalSpecialty: 'Dentistry',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Spanish',
            },
          },
        },
      },
      {
        path: 'result',
        loadComponent: () => import('./result/result').then(m => m.Result),
        data: {
          title: 'Resultados | Montoya.Dra - Casos de Éxito',
          description: 'Revisa los resultados y casos de éxito de nuestros tratamientos dentales. Sonrisas transformadas en Montoya.Dra.',
          keywords: 'resultados dentales, casos de éxito, antes y después, tratamientos dentales, Montoya.Dra, transformación dental',
          image: DEFAULT_IMAGE,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Montoya.Dra',
            url: BASE_URL,
            logo: LOGO_IMAGE,
            description: 'Clínica odontológica integral especializada en tratamientos dentales avanzados con equipos modernos.',
            medicalSpecialty: 'Dentistry',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Spanish',
            },
          },
        },
      },
      {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
        data: {
          title: 'Contacto | Montoya.Dra - Agenda tu Cita',
          description: 'Contáctanos para agendar tu cita con nuestros profesionales dentales. Consultas y tratamientos especializados en Montoya.Dra.',
          keywords: 'contacto, Montoya.Dra, agendar cita, servicio al cliente, consulta dental, teléfono clínica dental',
          image: DEFAULT_IMAGE,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Montoya.Dra',
            url: BASE_URL,
            logo: LOGO_IMAGE,
            description: 'Clínica odontológica integral especializada en tratamientos dentales avanzados con equipos modernos.',
            medicalSpecialty: 'Dentistry',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Spanish',
            },
          },
        },
      },
    ]
  },
];

export default pagesRoutes;
