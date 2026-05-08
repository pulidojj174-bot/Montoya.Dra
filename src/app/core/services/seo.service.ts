import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = 'https://montoya-dra.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/home/hero-1.jpg`;
const LOGO_IMAGE = `${BASE_URL}/assets/images/logos/MONTOYA_DRA.png`;
const SITE_NAME = 'Montoya.Dra';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  init(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data: SeoData) => {
        this.updateSeo(data);
      });
  }

  private updateSeo(data: SeoData): void {
    const pageTitle = data.title || SITE_NAME;
    const description = data.description || '';
    const image = data.image || DEFAULT_IMAGE;
    const url = `${BASE_URL}${this.router.url}`;
    const type = data.type || 'website';

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.updateCanonicalUrl(url);
    this.updateJsonLd(data, pageTitle, description, image, url);
  }

  private updateCanonicalUrl(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private updateJsonLd(data: SeoData, title: string, description: string, image: string, url: string): void {
    const existingScript = this.document.querySelector('script[data-seo="jsonld"]');
    if (existingScript) {
      existingScript.remove();
    }

    const jsonLd = data.jsonLd || this.buildDefaultJsonLd(title, description, image, url);

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'jsonld');
    script.textContent = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }

  private buildDefaultJsonLd(title: string, description: string, image: string, url: string): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      image,
      publisher: {
        '@type': 'MedicalBusiness',
        name: SITE_NAME,
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: LOGO_IMAGE,
        },
        medicalSpecialty: 'Dentistry',
      },
    };
  }
}
