import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Preporučujem da ove vrednosti stavite u .env.local fajl
  const MAILERLITE_ACTION_URL = import.meta.env.VITE_MAILERLITE_ACTION_URL;
  const MAILERLITE_GROUP_ID = import.meta.env.VITE_MAILERLITE_GROUP_ID;

  // Definišemo tip za `email` parametar i povratnu vrednost funkcije
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'Email address is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    if (email.length > 254) return 'Email address is too long';
    return undefined;
  };

  // Definišemo tip za event `e` na input polju
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
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

  // Definišemo tip za event `e` na formi
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

    const formData = new FormData();
    formData.append('fields[email]', email);
    // TypeScript može da se žali da je vrednost iz .env možda `undefined`.
    // Provera pre slanja je dobra praksa.
    if (MAILERLITE_GROUP_ID) {
      formData.append('groups[]', MAILERLITE_GROUP_ID);
    }
    formData.append('anticsrf', 'true');

    try {
      if (!MAILERLITE_ACTION_URL) {
        throw new Error("MailerLite URL is not defined. Please check your .env.local file.");
      }
      const response = await fetch(MAILERLITE_ACTION_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Subscription Successful!",
          description: "Please check your email to confirm your subscription.",
        });
        setEmail('');
      } else {
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.message || "An error occurred. Please try again.";
        setError(errorMessage);
        toast({
          title: "Subscription Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      // Poboljšano rukovanje greškama
      const errorMessage = err instanceof Error ? err.message : "Unable to connect to the server.";
      setError(errorMessage);
      toast({
        title: "Greška",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
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
          placeholder="Unesite vaš email"
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
        disabled={isLoading || !!error || !email}
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