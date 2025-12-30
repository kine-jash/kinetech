import { Component, signal, ViewChild, ElementRef, AfterViewChecked, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../services/ai.service';

interface ChatMessage {
  text: string;
  isUser: boolean;
  time: Date;
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      <!-- Chat Window -->
      @if (isOpen()) {
        <div class="pointer-events-auto w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right" style="height: 500px;">
          
          <!-- Header -->
          <div class="bg-slate-900 p-4 flex justify-between items-center text-white shrink-0">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-kinetech-600 flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-sm">Kinetech AI</h3>
                <div class="flex items-center gap-1">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span class="text-xs text-slate-400">Online</span>
                </div>
              </div>
            </div>
            <button (click)="toggleChat()" class="text-slate-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Messages -->
          <div #scrollContainer class="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            @for (msg of messages(); track msg.time) {
              <div class="flex" [class.justify-end]="msg.isUser">
                <div class="max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm"
                     [class.bg-kinetech-600]="msg.isUser"
                     [class.text-white]="msg.isUser"
                     [class.bg-white]="!msg.isUser"
                     [class.text-slate-800]="!msg.isUser"
                     [class.rounded-br-none]="msg.isUser"
                     [class.rounded-bl-none]="!msg.isUser">
                  {{ msg.text }}
                </div>
              </div>
            }
            @if (isLoading()) {
              <div class="flex justify-start">
                <div class="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-slate-100">
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Input -->
          <div class="p-3 bg-white border-t border-slate-200 shrink-0">
            <form (ngSubmit)="sendMessage()" class="flex gap-2">
              <input 
                type="text" 
                [(ngModel)]="newMessage" 
                name="message"
                placeholder="Ask about our services..." 
                class="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-kinetech-500 focus:border-kinetech-500 outline-none text-sm"
                [disabled]="isLoading()">
              <button 
                type="submit" 
                class="w-10 h-10 bg-kinetech-600 text-white rounded-full flex items-center justify-center hover:bg-kinetech-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                [disabled]="!newMessage.trim() || isLoading()">
                <svg class="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      }

      <!-- Toggle Button -->
      <button 
        (click)="toggleChat()" 
        class="pointer-events-auto w-14 h-14 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 flex items-center justify-center hover:scale-110 transition-transform duration-200 border-2 border-white">
        @if (!isOpen()) {
          <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        } @else {
          <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        }
      </button>

    </div>
  `
})
export class ChatWidgetComponent implements AfterViewChecked {
  private aiService = inject(AiService);
  
  isOpen = signal(false);
  isLoading = signal(false);
  messages = signal<ChatMessage[]>([
    { text: "Hello! I'm KineBot. How can I help you build your digital future today?", isUser: false, time: new Date() }
  ]);
  newMessage = '';

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  async sendMessage() {
    if (!this.newMessage.trim() || this.isLoading()) return;

    const userText = this.newMessage;
    this.newMessage = '';
    
    // Add User Message
    this.messages.update(msgs => [...msgs, { text: userText, isUser: true, time: new Date() }]);
    this.isLoading.set(true);

    // Call AI
    const response = await this.aiService.sendMessage(userText);

    // Add AI Response
    this.messages.update(msgs => [...msgs, { text: response, isUser: false, time: new Date() }]);
    this.isLoading.set(false);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    if (this.scrollContainer) {
      try {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
    }
  }
}