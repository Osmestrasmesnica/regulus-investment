// 1. Uvozimo 'jsonp' paket koji smo upravo instalirali
import jsonp from 'jsonp';

// Definišemo tipove. Komponenta očekuje isti "ugovor" kao i pre.
interface NewsletterFormData {
  email: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

// 2. Kreiramo funkciju za slanje podataka na Mailchimp
async function subscribeToNewsletter(formData: NewsletterFormData): Promise<ApiResponse> {
  // Zalepite vašu magičnu URL adresu ovde
  const mailchimpUrl = import.meta.env.VITE_MAILCHIMP_URL;

  // Sastavljamo kompletan URL za slanje. Mailchimp zahteva specifičan format.
  // Menjamo "post?" u "post-json?" i dodajemo polja.
  const url = `${mailchimpUrl.replace('post?', 'post-json?')}
    &EMAIL=${encodeURIComponent(formData.email)}
  `.trim();

  // `jsonp` funkcija vraća Promise, pa je možemo koristiti sa `await`
  return new Promise((resolve) => {
    jsonp(url, { param: 'c' }, (error, data) => {
      // `data` je odgovor od Mailchimp servera
      if (error) {
        console.error('Mailchimp Error:', error);
        resolve({
          success: false,
          message: 'An error occurred while subscribing. Please try again.',
        });
      } else if (data.result === 'error') {
        console.error('Mailchimp Form Error:', data.msg);
        // Mailchimp vraća korisne poruke o greškama
        // Proveravamo da li je korisnik već prijavljen
        if (data.msg.includes('is already subscribed')) {
          resolve({
            success: false,
            message: 'This email address is already subscribed.',
          });
        } else {
          resolve({ success: false, message: 'Please enter a valid email address.' });
        }
      } else {
        // `data.result` će biti "success" ako je sve prošlo kako treba
        resolve({
          success: true,
          message: 'Success! Please check your email to confirm your subscription.',
        });
      }
    });
  });
}


// 3. Pakujemo sve za izvoz na isti način kao i pre
const backend = {
  newsletter: {
    subscribe: subscribeToNewsletter,
  },
};

export default backend;