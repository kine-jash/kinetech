import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div class="col-span-2 md:col-span-1">
            <div class="flex items-center gap-2 mb-4 text-white">
              <div class="w-6 h-6 bg-kinetech-600 rounded flex items-center justify-center font-bold text-xs">K</div>
              <span class="font-bold text-lg tracking-tight">Kinetech</span>
            </div>
            <p class="text-sm">Empowering businesses with minimalistic, high-performance software solutions.</p>
          </div>
          
          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white transition">About Us</a></li>
              <li><a href="#" class="hover:text-white transition">Careers</a></li>
              <li><a href="#" class="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white transition">Web Development</a></li>
              <li><a href="#" class="hover:text-white transition">AI Integration</a></li>
              <li><a href="#" class="hover:text-white transition">Cloud Architecture</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Legal</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Kinetech Solutions. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <!-- Social Icons placeholder -->
            <span class="cursor-pointer hover:text-white">Twitter</span>
            <span class="cursor-pointer hover:text-white">LinkedIn</span>
            <span class="cursor-pointer hover:text-white">GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}