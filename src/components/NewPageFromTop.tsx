import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ova komponenta nema svoj izgled, njen jedini zadatak je da upravlja skrolovanjem.
export default function RefreshFromTop() {
  // `useLocation` je hook iz react-router-dom koji nam daje informacije o trenutnoj URL adresi.
  const { pathname } = useLocation();

  // `useEffect` nam omogućava da izvršimo neku akciju kada se nešto promeni.
  // U ovom slučaju, akcija je skrolovanje na vrh, a okidač je promena `pathname`-a.
  useEffect(() => {
    // Svaki put kada se `pathname` promeni (npr. sa "/" na "/about"),
    // ova funkcija će se izvršiti.
    window.scrollTo(0, 0);
  }, [pathname]); // Niz zavisnosti - ovo osigurava da se efekat pokreće samo kad se putanja promeni.

  // Pošto ova komponenta ne treba ništa da prikazuje na ekranu, vraćamo null.
  return null;
}