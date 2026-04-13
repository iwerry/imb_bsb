import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Instagram, 
  ArrowRight, 
  Target, 
  Users, 
  ShieldCheck, 
  Calendar, 
  FileText, 
  Mail, 
  MapPin, 
  Phone,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Institucional', href: '#sobre', dropdown: ['Sobre Nós', 'Missão e Valores'] },
    { name: 'Eventos Realizados', href: '#eventos' },
    { name: 'Transparência', href: '#transparencia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white font-bold text-xl">
            IMB
          </div>
          <span className={cn(
            "font-bold text-lg tracking-tight transition-colors",
            scrolled ? "text-brand-navy" : "text-brand-navy"
          )}>
            Instituto Mais Brasília
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              <a 
                href={link.href} 
                className="flex items-center gap-1 text-sm font-medium hover:text-brand-sky transition-colors"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />}
              </a>
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100">
                  {link.dropdown.map(item => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-brand-sky">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="#contato" 
            className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-sky transition-all hover:shadow-lg hover:shadow-brand-sky/20"
          >
            Apoio
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-brand-navy border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold">
                Apoio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-white/30">
      {/* Abstract Shapes inspired by Niemeyer */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-brand-navy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[70%] bg-brand-sky/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sky/10 text-brand-sky text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            Entidade Sem Fins Lucrativos
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-navy leading-[1.1] mb-6 text-balance">
            Transformando <span className="text-brand-sky">Brasília</span> através da ação social.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Somos uma entidade privada dedicada ao interesse público, promovendo o bem-estar da comunidade e transformações sociais sustentáveis.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#sobre" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-sky transition-all flex items-center gap-2 group">
              Conheça o Instituto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#eventos" className="bg-white border-2 border-brand-navy/10 text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
              Eventos Realizados
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
            <img 
              src="https://picsum.photos/seed/brasilia/1200/1200" 
              alt="Brasília Architecture" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-medium text-lg leading-snug">
                "Promovendo o bem-estar e a integração no coração do Brasil."
              </p>
            </div>
          </div>
          
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-sky/10 rounded-full flex items-center justify-center text-brand-sky">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-navy">+10k</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Vidas Impactadas</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/social1/600/800" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                <div className="bg-brand-sky p-8 rounded-2xl text-white">
                  <Target className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Foco Social</h3>
                  <p className="text-sm opacity-90">Ações direcionadas para quem mais precisa.</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-brand-navy p-8 rounded-2xl text-white">
                  <ShieldCheck className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ética</h3>
                  <p className="text-sm opacity-90">Transparência total em cada projeto.</p>
                </div>
                <img src="https://picsum.photos/seed/social2/600/800" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-brand-sky uppercase tracking-[0.2em] mb-4">Sobre o Instituto</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8 leading-tight">
              Compromisso com o futuro de Brasília.
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                O <strong>Instituto Mais Brasília</strong> é uma organização da sociedade civil, sem fins lucrativos, que nasceu do desejo de contribuir ativamente para o desenvolvimento social e humano da nossa capital.
              </p>
              <p>
                Atuamos como ponte entre o interesse público e a comunidade, desenvolvendo projetos que promovem a cidadania, a cultura, o esporte e a assistência social. Nossa base é a transparência e a busca incessante por resultados que transformem realidades.
              </p>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-brand-navy mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-brand-sky rounded-full" />
                  Nossa Missão
                </h4>
                <p className="text-gray-600">
                  Promover a inclusão social e o bem-estar através de projetos inovadores e parcerias estratégicas.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-navy mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-brand-navy rounded-full" />
                  Nossa Visão
                </h4>
                <p className="text-gray-600">
                  Ser referência em gestão de projetos sociais e transparência institucional no Distrito Federal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    {
      title: "Festival Cultural Comunitário",
      date: "Março 2024",
      category: "Cultura",
      image: "https://picsum.photos/seed/event1/800/600"
    },
    {
      title: "Workshop de Capacitação Jovem",
      date: "Janeiro 2024",
      category: "Educação",
      image: "https://picsum.photos/seed/event2/800/600"
    },
    {
      title: "Ação Saúde no Parque",
      date: "Dezembro 2023",
      category: "Saúde",
      image: "https://picsum.photos/seed/event3/800/600"
    }
  ];

  return (
    <section id="eventos" className="py-24 bg-brand-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-brand-sky uppercase tracking-[0.2em] mb-4">Impacto Real</h2>
            <h3 className="text-4xl font-extrabold text-brand-navy">Eventos Realizados</h3>
          </div>
          <a href="https://www.instagram.com/imbrasilia/" target="_blank" className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-sky transition-colors">
            Ver mais no Instagram <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                  {event.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-sky transition-colors">
                  {event.title}
                </h4>
                <button className="text-sm font-bold text-brand-navy flex items-center gap-2 group/btn">
                  Ver detalhes <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transparency = () => {
  return (
    <section id="transparencia" className="py-24 bg-brand-navy text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M0,200 C100,100 300,300 400,200" stroke="white" fill="none" strokeWidth="2" />
          <path d="M0,250 C100,150 300,350 400,250" stroke="white" fill="none" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-sky uppercase tracking-[0.2em] mb-4">Gestão Aberta</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Transparência e Governança</h3>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Acreditamos que a confiança é a base de qualquer transformação social. Por isso, mantemos nossos processos, relatórios e estatutos acessíveis a todos os parceiros e à sociedade.
            </p>
            
            <div className="space-y-4">
              {[
                "Estatuto Social Atualizado",
                "Relatório de Atividades 2023",
                "Demonstrações Financeiras",
                "Certidões Negativas"
              ].map((doc, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-sky/20 rounded-lg flex items-center justify-center text-brand-sky">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{doc}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white text-brand-navy p-10 rounded-[40px] shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Nossos Pilares</h4>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-brand-sky/10 rounded-2xl flex items-center justify-center text-brand-sky">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Conformidade Legal</h5>
                  <p className="text-gray-600 text-sm">Atendimento rigoroso a todas as normas de entidades do terceiro setor.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Conselho Consultivo</h5>
                  <p className="text-gray-600 text-sm">Decisões colegiadas para garantir a melhor aplicação dos recursos.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-brand-sky/10 rounded-2xl flex items-center justify-center text-brand-sky">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Foco no Resultado</h5>
                  <p className="text-gray-600 text-sm">Monitoramento constante do impacto social de cada projeto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-brand-white/30 rounded-[30px] sm:rounded-[50px] p-4 sm:p-8 md:p-16 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-sm font-bold text-brand-sky uppercase tracking-[0.2em] mb-4">Fale Conosco</h2>
              <h3 className="text-4xl font-extrabold text-brand-navy mb-8">Vamos construir algo juntos?</h3>
              
              <div className="space-y-6 sm:space-y-8 mb-12">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-sky">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">E-mail</p>
                    <p className="text-sm sm:text-lg font-bold text-brand-navy break-all sm:break-normal">institutomaisbrasilia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-sky">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Telefone</p>
                    <p className="text-sm sm:text-lg font-bold text-brand-navy">(61) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-sky">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Localização</p>
                    <p className="text-sm sm:text-lg font-bold text-brand-navy">Brasília, Distrito Federal</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-white h-64 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122841.4924723924!2d-48.01254336082269!3d-15.780148197771724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae175%3A0xeb3e0d849996cfc4!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1712990000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              <div className="mt-12">
                <p className="font-bold text-brand-navy mb-4">Siga-nos</p>
                <a 
                  href="https://www.instagram.com/imbrasilia/" 
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all text-brand-navy font-bold"
                >
                  <Instagram className="w-5 h-5 text-brand-sky" />
                  @imbrasilia
                </a>
              </div>
            </div>

            <div className="relative w-full">
              <form 
                onSubmit={handleSubmit}
                className={cn(
                  "bg-white p-4 sm:p-10 rounded-3xl shadow-xl border border-gray-50 space-y-4 sm:space-y-6 transition-all duration-500",
                  submitted ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                )}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Nome</label>
                    <input required type="text" className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-sky outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">E-mail</label>
                    <input required type="email" className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-sky outline-none transition-all" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Assunto</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-sky outline-none transition-all appearance-none">
                    <option>Parceria</option>
                    <option>Dúvidas</option>
                    <option>Imprensa</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy">Mensagem</label>
                  <textarea required rows={4} className="w-full px-5 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-brand-sky outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy text-white py-5 rounded-xl font-bold hover:bg-brand-sky transition-all shadow-lg shadow-brand-navy/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : "Enviar Mensagem"}
                </button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-white rounded-3xl shadow-xl border border-gray-50"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-navy mb-2">Mensagem Enviada!</h4>
                    <p className="text-gray-500">
                      Obrigado pelo contato. Nossa equipe retornará em breve para o seu e-mail.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-brand-sky font-bold hover:underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white font-bold text-xl">
                IMB
              </div>
              <span className="font-bold text-2xl text-brand-navy tracking-tight">
                Instituto Mais Brasília
              </span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Entidade privada sem fins lucrativos, atuando em prol do interesse público e do bem-estar social no Distrito Federal.
            </p>
            <div className="flex flex-col gap-2 mb-8 text-sm text-gray-500">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-sky" /> institutomaisbrasilia@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-sky" /> (61) 99999-9999</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-sky hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-sky hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-brand-navy mb-6">Links Rápidos</h5>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#sobre" className="hover:text-brand-sky transition-colors">Sobre Nós</a></li>
              <li><a href="#eventos" className="hover:text-brand-sky transition-colors">Eventos</a></li>
              <li><a href="#transparencia" className="hover:text-brand-sky transition-colors">Transparência</a></li>
              <li><a href="#contato" className="hover:text-brand-sky transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-brand-navy mb-6">Legal</h5>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-brand-sky transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-sky transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-sky transition-colors">Estatuto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Instituto Mais Brasília. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-300 uppercase tracking-widest font-bold">
            Brasília • DF
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-sky/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Transparency />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
