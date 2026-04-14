import { motion } from 'motion/react';
import { Download, FileText, ShieldCheck, Clock } from 'lucide-react';
import { cn } from './lib/utils';

interface Document {
  id: string;
  name: string;
  path: string;
  size: string;
  date: string;
  active: boolean;
}

export const Transparency = () => {
  // Apenas os arquivos que constam atualmente
  const documents: Document[] = [
    { 
      id: 'doc-1',
      name: "Estatuto Social Consolidado", 
      path: "/Download/EstatutoSocialConsolidado.pdf", 
      size: "7.0 MB",
      date: "14/04/2026",
      active: true
    },
    { 
      id: 'doc-2',
      name: "Eleição Assembleia Geral", 
      path: "/Download/EleicaoAssembleiaGeral.pdf", 
      size: "2.5 MB",
      date: "14/04/2026",
      active: true
    }
  ];

  const handleDownloadLog = async (docName: string) => {
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json').catch(() => null);
      const ipData = ipResponse ? await ipResponse.json() : { ip: 'IP não identificado' };
      
      const now = new Date();
      const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
      const pastDaysOfYear = (now.getTime() - firstDayOfYear.getTime()) / 86400000;
      const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);

      const logEntry = {
        id: crypto.randomUUID(),
        arquivo: docName,
        ip: ipData.ip,
        data_hora: now.toLocaleString('pt-BR'),
        mes: now.getMonth() + 1,
        semana: weekNumber,
        ano: now.getFullYear(),
        local_fuso: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      const existingLogs = JSON.parse(localStorage.getItem('imb_download_logs') || '[]');
      existingLogs.push(logEntry);
      localStorage.setItem('imb_download_logs', JSON.stringify(existingLogs));
      
      console.log('🔒 Log de Transparência Salvo (Oculto):', logEntry);
    } catch (error) {
      console.error('Erro ao gerar log de download', error);
    }
  };

  return (
    <section id="transparencia" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Animado "Vídeowallpaper" via Programação (Suave e Moderno) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-sky/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-navy/10 blur-[120px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-brand-navy text-xs font-bold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-brand-sky" />
            Portal da Transparência
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6"
          >
            Documentos <span className="text-brand-sky">Institucionais</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Acreditamos na gestão aberta e no acesso à informação. Aqui você encontra todos os nossos relatórios, estatutos e atas oficiais disponíveis para visualização e download público.
          </motion.p>
        </div>

        {/* Grid de Documentos (Design Premium em Cards - Centralizado para 2 itens) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {documents.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-white/60 hover:border-brand-sky/30 transition-all duration-500 flex flex-col h-full relative"
            >
              {/* Badge Topo */}
              <div className="flex items-center justify-between mb-8">
                <div className="bg-brand-navy/5 text-brand-navy px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  PDF
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-50/80 group-hover:bg-brand-sky/10 flex items-center justify-center transition-colors shadow-sm">
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-brand-sky transition-colors" />
                </div>
              </div>

              {/* Título e Info */}
              <div className="flex-1">
                <p className="text-brand-sky text-xs font-extrabold tracking-[0.2em] uppercase mb-3">
                  Instituto Mais Brasília
                </p>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-navy mb-6 leading-tight group-hover:text-brand-sky transition-colors">
                  {doc.name}
                </h3>
              </div>

              {/* Meta data (Tamanho e Data) */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-1.5 font-bold text-brand-navy/60">
                  <span className="w-2 h-2 rounded-full bg-brand-sky"></span>
                  {doc.size}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                <div className="flex items-center gap-1.5 font-bold text-brand-navy/60">
                  <Clock className="w-4 h-4 opacity-50" />
                  {doc.date}
                </div>
              </div>

              {/* Botão Principal */}
              <a 
                href={doc.active ? doc.path : undefined}
                download={doc.active ? true : undefined}
                target={doc.active ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={() => doc.active && handleDownloadLog(doc.name)}
                className={cn(
                  "w-full py-5 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all duration-300",
                  doc.active
                    ? "bg-brand-navy text-white hover:bg-brand-sky hover:shadow-xl hover:shadow-brand-sky/20 hover:-translate-y-1"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                )}
              >
                <Download className="w-5 h-5" />
                Baixar Documento
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
