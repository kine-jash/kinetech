import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="scroll-mt-28 py-24 bg-white relative">
      <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-white"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2 class="font-display text-4xl font-bold text-slate-900 sm:text-5xl">Our Expertise</h2>
          <p class="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
            We don't just write code; we engineer digital experiences. Comprehensive solutions designed for the modern web.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <!-- Service 1: Web Dev -->
          <div class="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-kinetech-500/10 hover:-translate-y-2 transition-all duration-300 h-full">
            <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-kinetech-600 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7 text-kinetech-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-slate-900 mb-3">Web Development</h3>
            <p class="text-slate-600 leading-relaxed mb-4 text-sm">
              Custom-built websites using the latest frameworks (Angular, React) ensuring speed, SEO optimization, and mobile responsiveness.
            </p>
          </div>

          <!-- Service 2: Product Design -->
          <div class="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 h-full">
            <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-slate-900 mb-3">Product Design</h3>
            <p class="text-slate-600 leading-relaxed mb-4 text-sm">
              UI/UX design that prioritizes user journey. We create intuitive interfaces that convert visitors into loyal customers.
            </p>
          </div>

          <!-- Service 3: AI Integration -->
          <div class="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 h-full">
             <div class="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-slate-900 mb-3">AI Integration</h3>
            <p class="text-slate-600 leading-relaxed mb-4 text-sm">
              Leverage the power of Gemini and other LLMs to automate tasks, analyze data, and provide smart customer support.
            </p>
          </div>

          <!-- Service 4: Cloud & DevOps (New) -->
          <div class="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 h-full lg:col-start-1 lg:col-end-2 xl:col-auto">
             <div class="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-slate-900 mb-3">Cloud & DevOps</h3>
            <p class="text-slate-600 leading-relaxed mb-4 text-sm">
              Scalable infrastructure on AWS, Azure, or GCP. We optimize deployment pipelines (CI/CD) and ensure 99.9% uptime.
            </p>
          </div>

          <!-- Service 5: SEO & Marketing (New) -->
          <div class="group p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300 h-full lg:col-start-2 lg:col-end-3 xl:col-auto">
             <div class="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-slate-900 mb-3">SEO & Marketing</h3>
            <p class="text-slate-600 leading-relaxed mb-4 text-sm">
              Data-driven growth strategies. real-time SEO audits, content marketing, and performance tracking to maximize your digital reach.
            </p>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {}