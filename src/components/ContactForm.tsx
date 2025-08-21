import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';
import { Loader2, AlertCircle } from 'lucide-react';
import backend from './client';

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
  const navigate = useNavigate();

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
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
    }
  };

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

    try {
      const response = await backend.contact.submit(formData);
      
      if (response.success) {
        // Check if we should redirect to confirmation page
        if (response.redirectTo) {
          navigate(response.redirectTo);
        } else {
          toast({
            title: "Message Sent Successfully!",
            description: response.message,
          });
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        }
      } else {
        // Handle specific error cases
        if (response.message.includes('rate limit')) {
          toast({
            title: "Too Many Requests",
            description: response.message,
            variant: "destructive",
          });
        } else if (response.message.includes('email')) {
          setErrors({ email: 'Please enter a valid email address' });
        } else if (response.message.includes('required')) {
          toast({
            title: "Missing Information",
            description: response.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Submission Error",
            description: response.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      
      // Handle different types of errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast({
          title: "Connection Error",
          description: "Unable to connect to the server. Please check your internet connection and try again.",
          variant: "destructive",
        });
      } else if (error instanceof Error && error.message.includes('timeout')) {
        toast({
          title: "Request Timeout",
          description: "The request took too long to complete. Please try again.",
          variant: "destructive",
        });
      } else if (error instanceof Error && error.message.includes('rate limit')) {
        toast({
          title: "Too Many Requests",
          description: "Please wait a moment before submitting again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Unexpected Error",
          description: "Something went wrong while sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your full name"
          className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
          disabled={isLoading}
          required
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
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="your.email@example.com"
          className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
          disabled={isLoading}
          required
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
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell us about your project or inquiry..."
          rows={6}
          className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
          disabled={isLoading}
          required
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
        type="submit"
        disabled={isLoading}
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
