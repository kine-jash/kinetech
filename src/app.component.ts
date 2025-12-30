import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { ServicesComponent } from './components/services.component';
import { CostEstimatorComponent } from './components/cost-estimator.component';
import { ProductsComponent } from './components/products.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { ChatWidgetComponent } from './components/chat-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    CostEstimatorComponent,
    ProductsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    ChatWidgetComponent
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-services />
      <app-cost-estimator />
      <app-products />
      <app-testimonials />
      <app-contact />
    </main>
    <app-footer />
    <app-chat-widget />
  `
})
export class AppComponent {}