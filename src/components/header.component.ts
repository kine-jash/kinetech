import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <a href="#home" (click)="closeMenu()" class="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div class="w-10 h-10 bg-gradient-to-br from-kinetech-500 to-kinetech-700 rounded-xl shadow-lg shadow-kinetech-500/20 flex items-center justify-center text-white font-display font-bold text-2xl transform group-hover:scale-105 transition-transform">K</div>
            <span class="font-display font-bold text-2xl tracking-tight text-slate-900 group-hover:text-kinetech-700 transition-colors">Kinetech</span>
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex space-x-1">
            <a href="#home" class="px-4 py-2 rounded-full text-slate-600 font-medium hover:text-kinetech-600 hover:bg-kinetech-50 transition-all duration-200">Home</a>
            <a href="#services" class="px-4 py-2 rounded-full text-slate-600 font-medium hover:text-kinetech-600 hover:bg-kinetech-50 transition-all duration-200">Services</a>
            <a href="#products" class="px-4 py-2 rounded-full text-slate-600 font-medium hover:text-kinetech-600 hover:bg-kinetech-50 transition-all duration-200">Products</a>
            <a href="#cost-estimator" class="px-4 py-2 rounded-full text-slate-600 font-medium hover:text-kinetech-600 hover:bg-kinetech-50 transition-all duration-200">Pricing</a>
            <a href="#contact" class="px-4 py-2 rounded-full text-slate-600 font-medium hover:text-kinetech-600 hover:bg-kinetech-50 transition-all duration-200">Contact</a>
          </nav>

          <!-- CTA / Mobile Menu Toggle -->
          <div class="flex items-center gap-4">
            <a href="#cost-estimator" class="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 duration-200">
              Get Started
            </a>
            
            <div class="md:hidden">
              <button (click)="toggleMenu()" class="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Toggle menu">
                @if (!isOpen()) {
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                } @else {
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      @if (isOpen()) {
        <div class="md:hidden fixed inset-0 z-40 bg-white pt-24 px-4 animate-fade-in-up">
           <nav class="flex flex-col space-y-4 text-center">
             <a href="#home" (click)="closeMenu()" class="text-xl font-medium text-slate-900 py-3 border-b border-slate-100">Home</a>
             <a href="#services" (click)="closeMenu()" class="text-xl font-medium text-slate-900 py-3 border-b border-slate-100">Services</a>
             <a href="#products" (click)="closeMenu()" class="text-xl font-medium text-slate-900 py-3 border-b border-slate-100">Products</a>
             <a href="#cost-estimator" (click)="closeMenu()" class="text-xl font-medium text-slate-900 py-3 border-b border-slate-100">Pricing</a>
             <a href="#contact" (click)="closeMenu()" class="text-xl font-medium text-slate-900 py-3 border-b border-slate-100">Contact</a>
             <a href="#cost-estimator" (click)="closeMenu()" class="mt-4 inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-bold rounded-xl text-white bg-slate-900 shadow-lg active:scale-95 transition-transform">
               Get Started
             </a>
           </nav>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}