import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="hidden lg:block absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="safe-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                <img src="/logo.png" alt="Wavizo Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Wij zijn gespecialiseerd in het creëren van moderne, gebruiksvriendelijke websites die uw bedrijf helpen groeien.
            </p>
            
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/20 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="https://www.instagram.com/wavizo.nl/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue/20 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan hover:bg-brand-cyan/20 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/20 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-outfit font-semibold text-lg mb-6">Diensten</h4>
            <ul className="space-y-3">
              <li><Link href="#diensten" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Webdesign</Link></li>
              <li><Link href="#diensten" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">E-commerce</Link></li>
              <li><Link href="#diensten" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">SEO Optimalisatie</Link></li>
              <li><Link href="#diensten" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Website Onderhoud</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-outfit font-semibold text-lg mb-6">Bedrijf</h4>
            <ul className="space-y-3">
              <li><Link href="#portfolio" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="#prijzen" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Prijzen</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Contact</Link></li>
              <li><Link href="/privacybeleid" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Privacy Beleid</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-outfit font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">info@wavizo.nl</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+31 6 84143386</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 group-hover:scale-110 transition-transform mt-0.5" />
                <span className="text-sm">
                  Tilburg, Nederland<br/>
                  <span className="opacity-70">100% Remote beschikbaar</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Wavizo. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link href="/algemene-voorwaarden" className="text-gray-500 hover:text-white text-sm transition-colors">Algemene Voorwaarden</Link>
            <Link href="/privacybeleid" className="text-gray-500 hover:text-white text-sm transition-colors">Privacybeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
