import { useTypingEffect } from "../hooks/use-typing-effect";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface Tool {
  name: string;
  description: string;
  category: string;
  link: string;
}

export default function Tools() {
  const headerText = useTypingEffect("$ ls -la /siber-guvenlik/araclar", 50);
  const descriptionText = useTypingEffect(
    "Siber güvenlik alanında kullandığım ve önerdiğim araçlar:",
    40,
    1000
  );

  const [filter, setFilter] = useState<string | null>(null);
  
  const tools: Tool[] = [
    {
      name: "Nmap",
      description: "Ağ keşif ve güvenlik denetleme aracı",
      category: "Ağ Analizi",
      link: "https://nmap.org/"
    },
    {
      name: "Wireshark",
      description: "Ağ protokolü analiz aracı",
      category: "Ağ Analizi",
      link: "https://www.wireshark.org/"
    },
    {
      name: "Metasploit",
      description: "Penetrasyon testi çerçevesi",
      category: "Penetrasyon Testi",
      link: "https://www.metasploit.com/"
    },
    {
      name: "Burp Suite",
      description: "Web uygulaması güvenlik testi aracı",
      category: "Web Güvenliği",
      link: "https://portswigger.net/burp"
    },
    {
      name: "OWASP ZAP",
      description: "Açık kaynak web uygulama güvenlik tarayıcısı",
      category: "Web Güvenliği",
      link: "https://www.zaproxy.org/"
    },
    {
      name: "John the Ripper",
      description: "Şifre kırma aracı",
      category: "Şifre Güvenliği",
      link: "https://www.openwall.com/john/"
    },
    {
      name: "Aircrack-ng",
      description: "Kablosuz ağ güvenlik değerlendirme aracı",
      category: "Kablosuz Güvenlik",
      link: "https://www.aircrack-ng.org/"
    },
    {
      name: "Kali Linux",
      description: "Penetrasyon testi ve etik hacker işletim sistemi",
      category: "İşletim Sistemi",
      link: "https://www.kali.org/"
    },
    {
      name: "Snort",
      description: "Ağ sızma tespit ve önleme sistemi",
      category: "Ağ Güvenliği",
      link: "https://www.snort.org/"
    },
    {
      name: "SQLmap",
      description: "Otomatik SQL enjeksiyon tespiti ve istismar aracı",
      category: "Web Güvenliği",
      link: "http://sqlmap.org/"
    },
    {
      name: "HashCat",
      description: "Gelişmiş şifre kurtarma aracı",
      category: "Şifre Güvenliği",
      link: "https://hashcat.net/hashcat/"
    },
    {
      name: "Maltego",
      description: "Açık kaynak istihbarat ve adli analiz aracı",
      category: "İstihbarat Toplama",
      link: "https://www.maltego.com/"
    }
  ];

  // Filter unique categories manually
  const categories = tools
    .map(tool => tool.category)
    .filter((category, index, self) => self.indexOf(category) === index);
  
  const filteredTools = filter 
    ? tools.filter(tool => tool.category === filter) 
    : tools;

  return (
    <section id="tools" className="bg-background-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-text-light">
          <h2 className="font-mono text-2xl lg:text-3xl text-text-light mb-4">
            <span className="text-red-500">root@kali:</span>~# {headerText}
            <span className="animate-blink text-red-500">_</span>
          </h2>
          
          <p className="text-lg lg:text-xl mb-8 text-gray-400">{descriptionText}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge 
              className={`cursor-pointer ${filter === null ? 'bg-red-600' : 'bg-gray-700 hover:bg-red-600'}`}
              onClick={() => setFilter(null)}
            >
              Tümü
            </Badge>
            {categories.map(category => (
              <Badge 
                key={category}
                className={`cursor-pointer ${filter === category ? 'bg-red-600' : 'bg-gray-700 hover:bg-red-600'}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <div key={tool.name} className="border border-gray-700 rounded-lg p-6 bg-background-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 hover:border-red-600/50">
                <h3 className="text-xl font-bold mb-2">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                    {tool.name}
                  </a>
                </h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <Badge className="bg-gray-700">{tool.category}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}