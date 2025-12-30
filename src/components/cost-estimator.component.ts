import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cost-estimator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="cost-estimator" class="scroll-mt-28 py-24 bg-slate-900 relative overflow-hidden">
      <!-- Ambient Glows -->
      <div class="absolute top-0 left-1/4 w-[800px] h-[800px] bg-kinetech-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Text Content -->
          <div>
            <div class="inline-block px-4 py-1.5 rounded-full border border-kinetech-500/30 bg-kinetech-500/10 text-kinetech-400 font-semibold text-sm mb-6">
              Transparent Pricing
            </div>
            <h2 class="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Build Your Site <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-kinetech-400 to-indigo-400">At Your Cost</span>
            </h2>
            <p class="text-slate-400 mb-8 text-lg leading-relaxed">
              At Kinetech, we believe in complete transparency. Use our real-time estimator to see how features impact your investment. 
              Customize your package to fit your specific needs without hidden fees.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-kinetech-400">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <div>
                  <h4 class="text-white font-bold">Modular Features</h4>
                  <p class="text-slate-400 text-sm">Pay only for what you need.</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-kinetech-400">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 class="text-white font-bold">AI-Ready Codebase</h4>
                  <p class="text-slate-400 text-sm">Future-proof architecture included.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Estimator Tool -->
          <div class="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 shadow-2xl relative group hover:border-slate-600 transition-colors">
            <!-- Decorative gradient border effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-kinetech-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <span class="w-2 h-6 bg-kinetech-500 rounded-full"></span>
              Project Estimator
            </h3>
            
            <div class="space-y-8 relative z-10">
              <!-- Slider -->
              <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
                <div class="flex justify-between items-center mb-4">
                  <label class="text-sm font-medium text-slate-300">Number of Pages</label>
                  <span class="text-kinetech-400 font-bold bg-kinetech-950/50 px-3 py-1 rounded-lg border border-kinetech-900">{{ pages() }}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  [ngModel]="pages()" 
                  (ngModelChange)="pages.set($event)"
                  class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-kinetech-500 hover:accent-kinetech-400 transition-all">
                <div class="flex justify-between text-xs text-slate-500 mt-2">
                   <span>1 Page</span>
                   <span>20 Pages</span>
                </div>
              </div>

              <!-- Toggles -->
              <div class="space-y-3">
                <label class="block text-sm font-medium text-slate-300 mb-2">Add-on Features</label>
                
                <label class="flex items-center justify-between p-4 rounded-xl bg-slate-700/30 border border-slate-700/50 cursor-pointer hover:bg-slate-700/50 hover:border-slate-600 transition-all group/item">
                  <div class="flex items-center space-x-3">
                    <div class="w-5 h-5 rounded-md border-2 border-slate-500 flex items-center justify-center transition-colors" [class.bg-kinetech-500]="hasCMS()" [class.border-kinetech-500]="hasCMS()">
                       <svg *ngIf="hasCMS()" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span class="text-slate-200 group-hover/item:text-white transition-colors">Content Management (CMS)</span>
                  </div>
                  <input type="checkbox" [ngModel]="hasCMS()" (ngModelChange)="hasCMS.set($event)" class="hidden">
                  <span class="text-sm text-slate-400">+$800</span>
                </label>
                
                <label class="flex items-center justify-between p-4 rounded-xl bg-slate-700/30 border border-slate-700/50 cursor-pointer hover:bg-slate-700/50 hover:border-slate-600 transition-all group/item">
                  <div class="flex items-center space-x-3">
                    <div class="w-5 h-5 rounded-md border-2 border-slate-500 flex items-center justify-center transition-colors" [class.bg-kinetech-500]="hasEcommerce()" [class.border-kinetech-500]="hasEcommerce()">
                       <svg *ngIf="hasEcommerce()" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span class="text-slate-200 group-hover/item:text-white transition-colors">E-commerce</span>
                  </div>
                   <input type="checkbox" [ngModel]="hasEcommerce()" (ngModelChange)="hasEcommerce.set($event)" class="hidden">
                   <span class="text-sm text-slate-400">+$1,500</span>
                </label>

                <label class="flex items-center justify-between p-4 rounded-xl bg-slate-700/30 border border-slate-700/50 cursor-pointer hover:bg-slate-700/50 hover:border-slate-600 transition-all group/item">
                  <div class="flex items-center space-x-3">
                    <div class="w-5 h-5 rounded-md border-2 border-slate-500 flex items-center justify-center transition-colors" [class.bg-kinetech-500]="hasAI()" [class.border-kinetech-500]="hasAI()">
                       <svg *ngIf="hasAI()" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span class="text-slate-200 group-hover/item:text-white transition-colors">Kinetech AI Core</span>
                  </div>
                   <input type="checkbox" [ngModel]="hasAI()" (ngModelChange)="hasAI.set($event)" class="hidden">
                   <span class="text-sm text-slate-400">+$1,200</span>
                </label>
              </div>

              <div class="pt-8 border-t border-slate-700/50">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-slate-400 font-medium">Estimated Total</span>
                  <div class="text-right">
                    <span class="block text-4xl font-display font-bold text-white tracking-tight">{{ formattedTotal() }}</span>
                  </div>
                </div>
                <div class="flex justify-end">
                   <p class="text-xs text-slate-500">*Estimated base price. Final quote may vary.</p>
                </div>
                <button class="mt-6 w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-kinetech-50 transition-all duration-200 shadow-lg shadow-white/10 active:scale-95">
                  Request Detailed Quote
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class CostEstimatorComponent {
  pages = signal(5);
  hasCMS = signal(false);
  hasEcommerce = signal(false);
  hasAI = signal(false);

  total = computed(() => {
    let base = 500; // Base setup fee
    base += this.pages() * 150; // Per page
    if (this.hasCMS()) base += 800;
    if (this.hasEcommerce()) base += 1500;
    if (this.hasAI()) base += 1200;
    return base;
  });

  formattedTotal = computed(() => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(this.total());
  });
}