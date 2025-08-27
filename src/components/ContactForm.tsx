import { useState } from 'react';
// useNavigate se više ne koristi, pa ga možemo ukloniti ako ne preusmeravamo
// import { useNavigate } from 'react-router-dom'; 
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import { Loader2, AlertCircle } from 'lucide-react';
// import backend from './client'; // 1. Uklanjamo zavisnost od backend-a

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  // const navigate = useNavigate();

  // 2. Dodajte vaš Access Key ovde (najbolje iz .env.local fajla)
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // SVA VAŠA VALIDACIJA I FUNKCIJE OSTALE SU POTPUNO ISTE - ODLIČNE SU!
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name': {
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 100) return 'Name must be less than 100 characters';
        if (!/^[a-zA-Z\s\-']+$/.test(value.trim())) return 'Name contains invalid characters';
        return undefined;}
      
      case 'email':{
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        if (value.length > 254) return 'Email address is too long';
        return undefined;}
      
      case 'message':{
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 2000) return 'Message must be less than 2000 characters';
        return undefined;}
      
      default:
        return undefined;
    }
  };
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) { newErrors[key as keyof FormErrors] = error; }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) { setErrors(prev => ({ ...prev, [name]: error })); }
  };

  // 3. Menjamo samo ovu funkciju
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below and try again",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Pripremamo podatke za slanje Web3Forms-u
    const dataToSend = {
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New message from ${formData.name}`, // Možete prilagoditi naslov emaila
    };

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
          throw new Error("Web3Forms Access Key is not defined. Check your .env.local file.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We will get back to you shortly.",
        });
        setFormData({ name: '', email: '', message: '' }); // Reset forme
        setErrors({});
      } else {
        console.error("Error from Web3Forms:", result);
        toast({
          title: "Submission Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Unexpected Error",
        description: "Something went wrong while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // OSTATAK KOMPONENTE (JSX) JE POTPUNO ISTI
  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/*... vaš JSX ostaje nepromenjen ...*/}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <Input
          type="text" id="name" name="name" value={formData.name}
          onChange={handleChange} onBlur={handleBlur}
          placeholder="Your full name"
          className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
          disabled={isLoading} required
        />
        {errors.name && (
          <div className="flex items-center mt-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.name}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <Input
          type="email" id="email" name="email" value={formData.email}
          onChange={handleChange} onBlur={handleBlur}
          placeholder="your.email@example.com"
          className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
          disabled={isLoading} required
        />
        {errors.email && (
          <div className="flex items-center mt-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.email}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <Textarea
          id="message" name="message" value={formData.message}
          onChange={handleChange} onBlur={handleBlur}
          placeholder="Tell us about your project or inquiry..."
          rows={6}
          className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
          disabled={isLoading} required
        />
        {errors.message && (
          <div className="flex items-center mt-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.message}
          </div>
        )}
        <div className="text-right text-xs text-gray-500 mt-1">
          {formData.message.length}/2000 characters
        </div>
      </div>

      <Button
        type="submit" disabled={isLoading}
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Message...</>
        ) : ( 'Send Message' )}
      </Button>
    </form>
  );
}