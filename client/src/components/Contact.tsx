import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from "@/hooks/use-language";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('contact.error'),
        description: t('contact.fillRequired'),
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      const response = await apiRequest('POST', '/api/contact', formData);
      
      if (response.ok) {
        toast({
          title: t('contact.success'),
          description: t('contact.messageSent'),
          variant: "default"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        title: t('contact.sendFailed'),
        description: t('contact.tryAgain'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Reduced spacing between title and form */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 inline-block relative pb-2 sm:pb-3 after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-red-600 after:bottom-0 after:left-1/4">
            {t('nav.contact')}
          </h2>
        </div>
        
        {/* Contact Form with Terminal Style */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center mb-4 sm:mb-6 text-sm sm:text-base">
            {t('contact.description')}
          </p>
          
          <form 
            className="bg-black/90 border border-red-600/40 rounded-lg p-4 sm:p-6 shadow-lg shadow-black/30"
            onSubmit={handleSubmit}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="terminal-text text-xs sm:text-sm text-gray-500">contact_form.sh</div>
            </div>
            
            <div className="mb-3 sm:mb-4">
              <label htmlFor="name" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                <span className="text-red-600">$</span> {t('contact.name')}
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-black/60 border border-gray-700 rounded px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light text-sm sm:text-base"
                placeholder={t('contact.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-3 sm:mb-4">
              <label htmlFor="email" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                <span className="text-red-600">$</span> {t('contact.email')}
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black/60 border border-gray-700 rounded px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light text-sm sm:text-base"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-3 sm:mb-4">
              <label htmlFor="phone" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                <span className="text-red-600">$</span> {t('contact.phone')} <span className="text-gray-500 text-xs sm:text-sm">({t('contact.optional')})</span>
              </label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full bg-black/60 border border-gray-700 rounded px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light text-sm sm:text-base"
                placeholder={t('contact.phonePlaceholder')}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4 sm:mb-5">
              <label htmlFor="message" className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                <span className="text-red-600">$</span> {t('contact.message')}
              </label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-black/60 border border-gray-700 rounded px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-red-600 transition-colors text-text-light text-sm sm:text-base"
                placeholder={t('contact.messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
