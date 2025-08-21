import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import backend from './newsletter';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email address is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    
    if (email.length > 254) return 'Email address is too long';
    
    return undefined;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleBlur = () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      toast({
        title: "Invalid Email",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await backend.newsletter.subscribe({ email });
      
      if (response.success) {
        setIsSubmitted(true);
        toast({
          title: "Subscription Initiated",
          description: response.message,
        });
        setEmail('');
      } else {
        // Handle specific error cases
        if (response.message.includes('already subscribed')) {
          setError('This email is already subscribed');
          toast({
            title: "Already Subscribed",
            description: response.message,
            variant: "destructive",
          });
        } else if (response.message.includes('valid email')) {
          setError('Please enter a valid email address');
          toast({
            title: "Invalid Email",
            description: response.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Subscription Error",
            description: response.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      
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
      } else if (error instanceof Error && error.message.includes('email')) {
        setError('Failed to send confirmation email. Please try again.');
        toast({
          title: "Email Service Error",
          description: "Failed to send confirmation email. Please try again later.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Unexpected Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        {/* Koristimo CheckCircle ikonicu za jasan znak uspeha */}
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" /> 
        <h4 className="text-lg font-semibold text-white mb-2">Thank You for Subscribing!</h4>
        <p className="text-gray-300 text-sm">
          Please check your email to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur}
          className={`bg-gray-800 border-gray-700 text-white placeholder-gray-400 ${
            error ? 'border-red-500 focus:border-red-500' : 'focus:border-yellow-500'
          }`}
          disabled={isLoading}
          required
        />
        {error && (
          <div className="flex items-center mt-1 text-sm text-red-400">
            <AlertCircle className="h-3 w-3 mr-1" />
            {error}
          </div>
        )}
      </div>
      
      <Button
        type="submit"
        disabled={isLoading || !!error}
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );
}
