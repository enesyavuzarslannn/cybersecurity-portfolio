import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Adınız, email ve mesaj alanları zorunludur.' });
      }
      
      try {
        // Validate with zod schema
        const validatedData = insertContactMessageSchema.parse({ name, email, phone, message });
        
        // Veritabanına kaydet
        const savedMessage = await storage.createContactMessage(validatedData);
        
        return res.status(200).json({ 
          success: true,
          message: 'İletişim formu başarıyla gönderildi.',
          data: savedMessage
        });
      } catch (validationError) {
        if (validationError instanceof z.ZodError) {
          return res.status(400).json({ 
            message: 'Form verilerinde hata var.',
            errors: validationError.errors 
          });
        }
        throw validationError;
      }
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
      });
    }
  });

  // Tüm mesajları getir (sadece admin tarafından kullanılacak, normalde authentication gerekir)
  app.get('/api/admin/messages', async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      return res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      console.error('Get messages error:', error);
      return res.status(500).json({
        message: 'Mesajlar alınırken bir hata oluştu.'
      });
    }
  });

  // Bir mesajı işaretleme
  app.patch('/api/admin/messages/:id/read', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Geçersiz ID formatı.' });
      }
      
      const success = await storage.markContactMessageAsRead(id);
      
      if (!success) {
        return res.status(404).json({ message: 'Mesaj bulunamadı.' });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Mesaj okundu olarak işaretlendi.'
      });
    } catch (error) {
      console.error('Mark message as read error:', error);
      return res.status(500).json({
        message: 'Mesaj işaretlenirken bir hata oluştu.'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
