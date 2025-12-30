import { Injectable } from '@angular/core';
import { GoogleGenAI, Chat } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private ai: GoogleGenAI;
  private chatSession: Chat | null = null;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env['API_KEY'] });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      if (!this.chatSession) {
        this.chatSession = this.ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `You are 'KineBot', the intelligent assistant for Kinetech. 
            Kinetech is a premier software development organization.
            
            Our Services:
            1. Web Development: Custom, responsive, high-performance sites.
            2. Cloud Solutions: Scalable AWS/Azure/GCP integration.
            3. AI Integration: We build custom AI models for business efficiency.
            
            Our Key Feature: "Build Your Site at Your Cost" - a flexible pricing model where clients choose features to match their budget.
            
            Tone: Professional, minimalistic, helpful, and concise. Do not write long paragraphs. Use bullet points if helpful.`,
          }
        });
      }

      const response = await this.chatSession.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error('Error generating AI response:', error);
      return "I apologize, but I'm having trouble connecting to the Kinetech network right now. Please try again later.";
    }
  }
}