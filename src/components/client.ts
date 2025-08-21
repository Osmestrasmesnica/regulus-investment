// 1. Uvozimo EmailJS biblioteku umesto da pišemo fetch
import emailjs from '@emailjs/browser';

// Definišemo iste tipove kao i pre, jer se "ugovor" sa komponentom ne menja
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  // Dodajte ovu liniju:
  [key: string]: string; 
}

interface ApiResponse {
  success: boolean;
  message: string;
  redirectTo?: string;
}

// 2. Unesite vaše ključeve sa EmailJS sajta
// NAJBOLJA PRAKSA: Kasnije ove ključeve treba izmestiti u .env fajl da ne bi bili javno vidljivi u kodu!
const SERVICE_ID = import.meta.env.SERVICE_ID_EMAILJS;      // Zalepite vaš Service ID ovde
const TEMPLATE_ID = import.meta.env.TEMPLATE_ID_EMAILJS;     // Zalepite vaš Template ID ovde
const PUBLIC_KEY = import.meta.env.TEMPLATE_ID_EMAILJS;        // Zalepite vaš Public Key ovde


// 3. Prepravljamo funkciju da koristi EmailJS umesto fetch
async function submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
  try {
    // emailjs.send() je glavna funkcija.
    // Parametri: Service ID, Template ID, podaci, Public Key
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

    // Ako je slanje uspelo, vraćamo uspešan odgovor, baš kao što bi i naš stari server uradio.
    return {
      success: true,
      message: 'Message sent successfully via EmailJS!',
    };

  } catch (error) {
    // Ako dođe do greške (npr. pogrešni ključevi, EmailJS server pao)
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
    };
  }
}


// 4. Izvozimo objekat na isti način kao i pre
const backend = {
  contact: {
    submit: submitContactForm,
  },
};

export default backend;