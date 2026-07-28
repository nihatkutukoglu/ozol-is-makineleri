"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Award,
  Check,
  ArrowUpRight,
  Target,
  Boxes,
  Zap,
  Headphones,
  AlertCircle,
  Calendar,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  PhoneCall,
  Search
} from 'lucide-react';

const Facebook = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Instagram = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Linkedin = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const siteContent = {
  companyName: "Özol İş Makineleri",
  slogan: "Gücünüzü Kesintisiz Çalıştıran Parçalar",
  shortDescription: "İş makineleriniz için kaliteli, güvenilir ve hızlı yedek parça tedarik çözümleri sunuyoruz.",
  heroTagline: "İş Makineleri Yedek Parça Çözümleri",
  contact: {
    phone: "+90 536 645 24 42",
    phoneRaw: "905366452442",
    whatsapp: "+90 536 645 24 42",
    whatsappRaw: "905366452442",
    email: "info@ozolis.com",
    address: "Ankara Ostim 100.Yıl Bulvarı 1242 Sokak No: 71",
    workingHours: "Hafta İçi: 08:30 - 18:30 | Cts: 08:30 - 14:00"
  },
  menu: [
    { title: "Ana Sayfa", href: "#hero" },
    { title: "Hakkımızda", href: "#hakkimizda" },
    { title: "Ürünler", href: "#urunler" },
    { title: "Markalar", href: "#markalar" },
    { title: "Neden Biz?", href: "#neden-biz" },
    { title: "Süreç", href: "#surec" },
    { title: "SSS", href: "#sss" },
    { title: "İletişim", href: "#teklif-al" },
  ],
  stats: [
    { id: "s1", value: 15, suffix: "+", label: "Yıllık Deneyim", description: "Sektörde güvenilirlik" },
    { id: "s2", value: 10000, suffix: "+", label: "Ürün Çeşidi", description: "Zengin stok altyapısı" },
    { id: "s3", value: 20, suffix: "+", label: "Global Marka", description: "Uyumlu yedek parça" },
    { id: "s4", value: 81, suffix: " İl", label: "Hızlı Gönderim", description: "Kesintisiz tedarik ağı" }
  ],
  aboutText: {
    paragraph1: "Özol İş Makineleri olarak, ağır sanayi ve inşaat sektörünün omurgasını oluşturan iş makinelerinin performans kaybı yaşamadan çalışmasını sağlıyoruz. Yılların getirdiği saha tecrübesi ve geniş tedarikçi ağımız ile orijinal ve yüksek kaliteli muadil yedek parçaları en kısa sürede şantiyenize ulaştırıyoruz.",
    paragraph2: "Müşteri memnuniyetini ve teknik doğruluğu odağımıza alarak, makinenizin şasi numarasına özel doğru parça tespitini uzman kadromuzla gerçekleştiriyoruz. Amacımız sadece parça satmak değil, işinizin durmasını engelleyen stratejik bir çözüm ortağı olmaktır.",
    bullets: [
      "Orijinal ve Garantili Yan Sanayi Seçenekleri",
      "Katalog ve Şasi Numarasına Göre Hassas Parça Tespiti",
      "Aynı Gün Kargo ve Şantiye Teslimat Desteği",
      "Satış Sonrası Kesintisiz Teknik Danışmanlık"
    ]
  },
  productCategories: [
    {
      id: "p1",
      title: "Motor Yedek Parçaları",
      description: "Piston, gömlek, yatak takımları, supaplar ve komple blok çözümleri.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      items: ["Piston & Sekman Takımları", "Silindir Gömlekleri", "Ana & Kol Yatakları", "Krank Milleri", "Supap Takımları"],
      features: ["Orijinal OEM Kalitesi", "Yüksek Isı Dayanımı", "Aşınmaya Dayanıklı Alaşım"]
    },
    {
      id: "p2",
      title: "Şanzıman Parçaları",
      description: "Powershift şanzıman revizyon kitleri, dişli grupları ve tork konvertörleri.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      items: ["Güneş & Gezegen Dişlileri", "Şanzıman Diskleri", "Tork Konvertör Parçaları", "Selenoid Valfler", "Keçe ve Rulman Setleri"],
      features: ["Hassas Tolerans İşleme", "Sarsıntısız Vites Geçişi", "Uzun Kullanım Ömrü"]
    },
    {
      id: "p3",
      title: "Hidrolik Sistem Parçaları",
      description: "Hidrolik pompalar, ana kontrol valfleri, silindirler ve hidromotorlar.",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      items: ["Ana Hidrolik Pompalar", "Kule Dönüş Motorları", "Yürüyüş Hidromotorları", "Kumanda Valf Blokları", "Silindir Sızdırmazlık Elemanları"],
      features: ["350+ Bar Basınç Dayanımı", "Sızdırmazlık Garantisi", "Debi Testli Ürünler"]
    },
    {
      id: "p4",
      title: "Pompa Grupları",
      description: "Yakıt pompaları, su pompaları, yağ pompaları ve direksiyon pompaları.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      items: ["Mazot Enjeksiyon Pompaları", "Devirdaim Su Pompaları", "Motor Yağ Pompaları", "Pilot Pompalar", "Dişli Pompalar"],
      features: ["Yüksek Akış Verimliliği", "Düşük Ses Seviyesi", "Korozyon Korumalı"]
    },
    {
      id: "p5",
      title: "Turbo Parçaları",
      description: "Komple turboşarj üniteleri, kartuşlar, salyangoz gövdeleri ve tamir takımları.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      items: ["Komple Turboşarj", "Turbo Kartuşları (CHRA)", "Egzoz Salyangozları", "Wastegate Aktuatörleri", "Bağlantı Flanşları"],
      features: ["150.000+ RPM Balans Testli", "Yüksek Basınç Gücü", "EGT Dayanımlı"]
    },
    {
      id: "p6",
      title: "Conta ve Tamir Takımları",
      description: "Alt-üst motor conta setleri, silindir tamir takımları ve keçe grupları.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
      items: ["Silindir Kapak Contaları", "Komple Motor Conta Kitleri", "Hidrolik Silindir Keçe Setleri", "Krank Yağ Keçeleri", "O-Ring Takımları"],
      features: ["Isı ve Kimyasal Direnci", "%100 Sızdırmazlık", "Eksiksiz Set İçeriği"]
    },
    {
      id: "p7",
      title: "Filtre Grupları",
      description: "Hava, yağ, yakıt ve hidrolik sistemler için yüksek mikronlu filtre çözümleri.",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
      items: ["Hava Filtre Elemanları", "Yakıt Su Seperatörleri", "Motor Yağ Filtreleri", "Hidrolik Dönüş Filtreleri", "Kabin Polen Filtreleri"],
      features: ["Yüksek Toz Tutma Kapasitesi", "Motor Ömrünü Uzatır", "Tam Sızdırmaz Contalar"]
    },
    {
      id: "p8",
      title: "Yürüyüş ve Aktarma Parçaları",
      description: "Palet grupları, makaralar, istikametler, zincirler ve nihai tahrik parçaları.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
      items: ["Alt & Üst Makaralar", "İstikamet Tekerleri", "Palet Zincirleri & Pabuçları", "Ayna Mahruti Dişlileri", "Aks Milleri"],
      features: ["Ağır Hizmet Sertleştirilmiş Çelik", "Darbe ve Aşınma Koruması", "Zorlu Şantiye Uyumlu"]
    }
  ],
  brands: [
    { id: "b1", name: "Caterpillar", tagline: "CAT Uyumlu Parçalar" },
    { id: "b2", name: "Komatsu", tagline: "Ekskavatör & Dozer" },
    { id: "b3", name: "Volvo", tagline: "Yükleyici & Kamyon" },
    { id: "b4", name: "Hitachi", tagline: "Hidrolik Sistemler" },
    { id: "b5", name: "Hyundai", tagline: "Revizyon Parçaları" },
    { id: "b6", name: "JCB", tagline: "Bekoloder Grupları" },
    { id: "b7", name: "Doosan", tagline: "Ağır İş Makineleri" },
    { id: "b8", name: "Liebherr", tagline: "Vinç ve Paletli Grup" }
  ],
  whyUs: [
    {
      id: "w1",
      title: "Hassas Parça Yönlendirmesi",
      description: "Yanlış parça siparişinin getirdiği zaman kaybını engellemek için şasi ve katalog kontrolüyle %100 doğru ürünü tespit ediyoruz.",
      icon: Target
    },
    {
      id: "w2",
      title: "Geniş Stok Yelpazesi",
      description: "En çok ihtiyaç duyulan motor, şanzıman ve hidrolik parçalarını depolarımızda hazır tutarak hızlı tedarik sağlıyoruz.",
      icon: Boxes
    },
    {
      id: "w3",
      title: "Hızlı Teklif Süreci",
      description: "Talebinizi WhatsApp veya form üzerinden ilettiğinizde dakikalar içerisinde fiyat ve stok durumu bilgisi sunuyoruz.",
      icon: Zap
    },
    {
      id: "w4",
      title: "Kalite & Garanti Dengesi",
      description: "Sadece dayanıklılığı test edilmiş, OEM standartlarında veya orijinal sertifikalı parçaların satışını gerçekleştiriyoruz.",
      icon: ShieldCheck
    },
    {
      id: "w5",
      title: "Türkiye Geneli Gönderim",
      description: "Anlaşmalı hızlı kargo ve ambar ağımız ile Türkiye'nin 81 ilindeki şantiyelerinize doğrudan gönderim yapıyoruz.",
      icon: Truck
    },
    {
      id: "w6",
      title: "Satış Sonrası Destek",
      description: "Satış öncesinde olduğu gibi montaj ve kullanım sürecinde de uzman teknik ekibimizle yanınızda yer alıyoruz.",
      icon: Headphones
    }
  ],
  processSteps: [
    {
      number: "01",
      title: "Parça Bilgilerini İletin",
      description: "Makinenizin markası, modeli, şasi numarası veya ihtiyacınız olan parçanın fotoğraf/kodunu bize ulaştırın."
    },
    {
      number: "02",
      title: "Uyum ve Stok Analizi",
      description: "Teknik ekibimiz katalog üzerinden parçayı doğrular; orijinal ve alternatif kaliteli muadil fiyat seçeneklerini hazırlar."
    },
    {
      number: "03",
      title: "Hızlı Teklif ve Onay",
      description: "En uygun fiyat ve teslim süresini içeren teklifimizi onayınıza sunalım. Ödeme aşamasını güvenle tamamlayın."
    },
    {
      number: "04",
      title: "Aynı Gün Güvenli Kargo",
      description: "Özenle paketlenen parçanız aynı gün kargoya verilir, takip numarası ile sürecinizi anlık izleyebilirsiniz."
    }
  ],
  blogs: [
    {
      id: "blog-1",
      title: "İş Makinesi Yedek Parçası Seçerken Nelere Dikkat Edilmeli?",
      date: "14 Temmuz 2026",
      readTime: "4 dk okuma",
      category: "Rehber",
      summary: "Orijinal ve muadil yedek parçalar arasındaki farklar, şasi numarasının önemi ve sahte ürün risklerinden korunma yolları.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "blog-2",
      title: "Hidrolik Sistemlerde Düzenli Bakımın ve Doğru Parçanın Önemi",
      date: "02 Haziran 2026",
      readTime: "5 dk okuma",
      category: "Teknik İpuçları",
      summary: "Yüksek basınç altında çalışan hidrolik pompalar ve valf gruplarında aşınmayı önlemek için uygulanması gereken temel kriterler.",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "blog-3",
      title: "Makine Modeline Göre Doğru Parça Koduna Nasıl Ulaşılır?",
      date: "18 Mayıs 2026",
      readTime: "3 dk okuma",
      category: "Saha İncelemesi",
      summary: "Parça kataloğu okuma yöntemleri ve şasi etiketindeki kritik bilgilerin çözümlenmesi ile zaman kaybını önleme rehberi.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Hangi iş makineleri ve markalar için yedek parça sağlıyorsunuz?",
      answer: "Caterpillar, Komatsu, Volvo, Hitachi, JCB, Hyundai, Doosan ve Liebherr başta olmak üzere paletli/lastikli ekskavatörler, loderler, bekoloderler, dozerler ve greyderler için geniş bir yedek parça stoku sunuyoruz."
    },
    {
      id: "faq-2",
      question: "Parça sorgulaması yaparken hangi bilgileri vermem gerekir?",
      answer: "Doğru parçanın tespiti için makine markası, tam model adı ve mümkünse makine şasi numarası (VIN) yeterlidir. Eğer elinizde eski parçanın kodu veya görseli varsa süreci daha da hızlandırabilirsiniz."
    },
    {
      id: "faq-3",
      question: "Türkiye geneline gönderim süreniz nedir?",
      answer: "Stoklarımızda bulunan parçaları hafta içi saat 16:00'ya kadar verilen siparişlerde aynı gün kargoya teslim ediyoruz. Türkiye genelinde büyük şehirlere 24 saatte, diğer bölgelere ise 48 saat içerisinde ulaşım sağlanmaktadır."
    },
    {
      id: "faq-4",
      question: "Orijinal ve alternatif yan sanayi seçenekleriniz var mı?",
      answer: "Evet, bütçenize ve kullanım tercihinize göre orijinal OEM üretimi parçaların yanı sıra, kalitesini ve dayanıklılığını test ettiğimiz birinci sınıf muadil/yan sanayi yedek parça alternatiflerini de sunmaktayız."
    },
    {
      id: "faq-5",
      question: "Hızlı teklif almak için nasıl iletişime geçebilirim?",
      answer: "Sitemizdeki 'Parça Talep Formu'nu doldurabilir, telefon numaramızdan bizi doğrudan arayabilir veya sağ alttaki WhatsApp butonuna tıklayarak ürün görseli/kodunu hızlıca ekibimize iletebilirsiniz."
    }
  ],
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  }
};

const SectionHeader = ({ badge, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191C] border border-[#32353E] text-[#F59E0B] text-xs font-bold tracking-wider uppercase mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
      {badge}
    </div>
    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = Math.ceil(value / (duration / 30));
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
      {count.toLocaleString('tr-TR')}{suffix}
    </span>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openFaq, setOpenFaq] = useState("faq-1");

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    partName: '',
    partNumber: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.brand || !formData.partName) {
      setFormStatus('error');
      setFormError('Lütfen zorunlu alanları (Ad Soyad, Telefon, Marka, Parça Adı) doldurunuz.');
      return;
    }

    setFormStatus('success');

    const waText = `*YENİ PARÇA TEKLİF TALEBİ*\n\n` +
      `*Müşteri:* ${formData.fullName}\n` +
      `*Firma:* ${formData.company || 'Belirtilmedi'}\n` +
      `*Telefon:* ${formData.phone}\n` +
      `*E-posta:* ${formData.email || 'Belirtilmedi'}\n` +
      `-------------------------\n` +
      `*Makine Markası:* ${formData.brand}\n` +
      `*Makine Modeli:* ${formData.model || 'Belirtilmedi'}\n` +
      `*Parça Adı:* ${formData.partName}\n` +
      `*Parça Numarası:* ${formData.partNumber || 'Belirtilmedi'}\n` +
      `*Not/Açıklama:* ${formData.message || 'Yok'}`;

    const waUrl = `https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="bg-[#0F1012] text-gray-100 min-h-screen font-sans selection:bg-[#F59E0B] selection:text-[#0F1012] antialiased">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#18191C] border-b border-[#32353E]/60 text-xs text-gray-300 py-2.5 px-4 flex max-md:hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="flex items-center space-x-6">
            <a href={`tel:${siteContent.contact.phoneRaw}`} className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{siteContent.contact.phone}</span>
            </a>
            <a href={`mailto:${siteContent.contact.email}`} className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{siteContent.contact.email}</span>
            </a>
            <span className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{siteContent.contact.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium">{siteContent.contact.workingHours}</span>
            <a href="#teklif-al" className="inline-flex items-center gap-1.5 text-[#F59E0B] font-semibold hover:underline">
              <span>Hızlı Parça Sorgula</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F1012]/95 backdrop-blur-md border-b border-[#32353E] py-3.5 shadow-2xl' : 'bg-[#0F1012]/80 backdrop-blur-sm border-b border-[#32353E]/40 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#hero" className="flex items-center group focus:outline-none">
            <img src="/logo.png" alt="Özol İş Makineleri Logo" className="h-16 md:h-20 w-auto object-contain" />
          </a>

          <nav className="flex max-md:hidden items-center space-x-1">
            {siteContent.menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 lg:px-3.5 py-2 text-xs lg:text-sm font-medium text-gray-300 hover:text-[#F59E0B] transition-colors rounded-md hover:bg-[#22242A]/50"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex max-sm:hidden items-center gap-3">
            <a
              href="#teklif-al"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#0F1012] font-bold text-sm transition-all duration-200 shadow-md shadow-[#F59E0B]/10"
            >
              <Send className="w-4 h-4" />
              <span>Teklif Al</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="hidden max-md:flex p-2 rounded-lg bg-[#22242A] text-gray-200 hover:text-[#F59E0B] border border-[#32353E]"
            aria-label="Menüyü Aç"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU MODAL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#0F1012]/98 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-[#32353E]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-[#F59E0B] flex items-center justify-center text-[#0F1012] font-black">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="font-bold text-white text-base uppercase">ÖZOL İŞ MAKİNELERİ</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-[#22242A] text-gray-300 border border-[#32353E]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-6 space-y-3">
              {siteContent.menu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-xl text-lg font-semibold text-gray-200 hover:text-[#0F1012] hover:bg-[#F59E0B] transition-all"
                >
                  {item.title}
                </a>
              ))}
              <div className="pt-6 border-t border-[#32353E] space-y-4">
                <a
                  href="#teklif-al"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F59E0B] text-[#0F1012] font-extrabold text-center shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Hızlı Parça Teklifi Al</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0F1012] pt-12 pb-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000 opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1012] via-[#0F1012]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#22242A]/90 border border-[#32353E] text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              {siteContent.heroTagline}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase"
            >
              {siteContent.slogan}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed font-normal max-w-2xl"
            >
              {siteContent.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#teklif-al"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0F1012] font-extrabold text-base transition-all shadow-xl shadow-[#F59E0B]/15"
              >
                <Send className="w-5 h-5" />
                <span>Hızlı Parça Teklifi Al</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#urunler"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#22242A] hover:bg-[#32353E] border border-[#32353E] text-white font-bold text-base transition-all"
              >
                <span>Ürün Gruplarını İncele</span>
              </a>
            </motion.div>

            <div className="mt-12 pt-8 border-t border-[#32353E]/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">Geniş Stok Ağ</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">Hızlı Yanıt</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">OEM Kalitesi</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#F59E0B] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">81 İl Teslimat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18191C] border border-[#32353E] rounded-2xl shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#32353E]/60">
            {siteContent.stats.map((stat, idx) => (
              <div key={stat.id} className={`flex flex-col ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                <div className="flex items-baseline gap-1 text-[#F59E0B]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <span className="mt-2 text-base font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-xs text-gray-400 mt-1">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="hakkimizda" className="py-24 bg-[#0F1012] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#32353E] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Özol İş Makineleri Depo"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1012] via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[#22242A] border border-[#32353E] p-6 rounded-2xl shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#F59E0B]/10 rounded-xl text-[#F59E0B]">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">15+ Yıl</div>
                    <div className="text-xs text-gray-400 font-medium">Saha Ve Parça Tecrübesi</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191C] border border-[#32353E] text-[#F59E0B] text-xs font-bold uppercase mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Firmamızı Tanıyın</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                Ağır İş Makineleri İçin <span className="text-[#F59E0B]">Güvenilir</span> Parça Ortağınız
              </h2>

              <p className="mt-6 text-gray-300 leading-relaxed text-base">
                {siteContent.aboutText.paragraph1}
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                {siteContent.aboutText.paragraph2}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {siteContent.aboutText.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#18191C]/60 border border-[#32353E]/60">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-200">{bullet}</span>
                  </div>
                ))}
              </div>

              <a
                href="#teklif-al"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0F1012] font-extrabold text-sm transition-all shadow-lg"
              >
                <span>Parça Sorgulaması Başlat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT CATEGORIES */}
      <section id="urunler" className="py-24 bg-[#18191C] border-y border-[#32353E]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Ürün Ekosistemimiz"
            title="Tüm İş Makinesi Parça Grupları"
            description="Ekskavatör, loder, dozer ve bekoloder grubu makineleriniz için geniş stok ve hızlı tedarik olanağı."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.productCategories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-[#22242A] border border-[#32353E] rounded-2xl overflow-hidden hover:border-[#F59E0B]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22242A] via-transparent to-transparent opacity-90" />
                    <span className="absolute top-3 right-3 p-2 rounded-lg bg-[#0F1012]/80 backdrop-blur-md text-[#F59E0B] border border-[#32353E]">
                      <Wrench className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#32353E]/60 space-y-1.5">
                      {cat.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedProduct(cat)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0F1012] hover:bg-[#F59E0B] hover:text-[#0F1012] text-gray-200 border border-[#32353E] font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <span>Detaylı İncele</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1012]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl bg-[#22242A] border border-[#32353E] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22242A] via-[#22242A]/50 to-transparent" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#0F1012]/80 text-gray-300 hover:text-white border border-[#32353E]"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                    Yedek Parça Grubu
                  </span>
                  <h3 className="text-2xl font-black text-white">{selectedProduct.title}</h3>
                </div>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                <p className="text-sm text-gray-300 leading-relaxed">{selectedProduct.description}</p>

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Öne Çıkan Ürün Kalemleri
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0F1012]/60 border border-[#32353E]/60 text-xs text-gray-200">
                        <Check className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Teknik Özellikler & Avantajlar
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feat, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-md bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-medium">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-[#32353E] bg-[#0F1012]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Merhaba, ' + selectedProduct.title + ' hakkında bilgi almak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp'tan Doğrudan Sor</span>
                </a>
                <a
                  href="#teklif-al"
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F59E0B] text-[#0F1012] font-extrabold text-xs"
                >
                  <span>Form İle Teklif Al</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. BRANDS SHOWCASE */}
      <section id="markalar" className="py-20 bg-[#0F1012] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Uyumlu Markalar"
            title="Desteklenen Dünya Devleri"
            description="Aşağıdaki markaların iş makinelerine %100 uyumlu orijinal ve yüksek kaliteli muadil parçalar sunuyoruz."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {siteContent.brands.map((brand) => (
              <div
                key={brand.id}
                className="p-6 rounded-xl bg-[#18191C] border border-[#32353E] hover:border-[#F59E0B]/50 hover:bg-[#22242A] transition-all group flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl font-black text-white group-hover:text-[#F59E0B] transition-colors tracking-tight uppercase">
                  {brand.name}
                </span>
                <span className="text-[11px] text-gray-400 mt-2 font-medium">
                  {brand.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY US SECTION */}
      <section id="neden-biz" className="py-24 bg-[#18191C] border-y border-[#32353E]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Neden Özol İş Makineleri?"
            title="Şantiyenizi Yarı Yolda Bırakmıyoruz"
            description="Sektördeki 15 yılı aşkın deneyimimizle müşteri odaklı, hızlı ve sıfır hatalı yedek parça yönetimi sunuyoruz."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.whyUs.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-8 rounded-2xl bg-[#22242A] border border-[#32353E] hover:border-[#F59E0B]/50 transition-all duration-300 relative group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] flex items-center justify-center mb-6 group-hover:bg-[#F59E0B] group-hover:text-[#0F1012] transition-all duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. QUOTE FORM & CONTACT */}
      <section id="teklif-al" className="py-24 bg-[#0F1012] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191C] border border-[#32353E] text-[#F59E0B] text-xs font-bold uppercase mb-3">
                  <span>Hızlı Teklif Hattı</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                  İhtiyacınız Olan Parçayı <span className="text-[#F59E0B]">Hemen Sorgulayın</span>
                </h2>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Makinenizin şasi numarası, parça kodu veya parça ismini formu kullanarak gönderin. Uzman ekibimiz stok ve fiyat bilgisini dakikalar içinde iletsin.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${siteContent.contact.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#22242A] border border-[#32353E] hover:border-[#F59E0B]/50 transition-all"
                >
                  <div className="p-3 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Telefon İle Doğrudan Ara</div>
                    <div className="text-base font-bold text-white">{siteContent.contact.phone}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#22242A] border border-[#32353E] hover:border-emerald-500/50 transition-all"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">WhatsApp İle Hızlı Mesaj Gönder</div>
                    <div className="text-base font-bold text-white">{siteContent.contact.whatsapp}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#22242A] border border-[#32353E] hover:border-[#F59E0B]/50 transition-all"
                >
                  <div className="p-3 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">E-posta İle Parça Listesi İlet</div>
                    <div className="text-base font-bold text-white">{siteContent.contact.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#22242A] border border-[#32353E] rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Parça Talep Formu</h3>

              {formStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {formStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Talebiniz oluşturuldu! WhatsApp hattımıza aktarılıyorsunuz...</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Ad Soyad <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="Ahmet Yılmaz"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Firma Adı</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      placeholder="Örnek Hafriyat A.Ş."
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Telefon <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="0555 000 00 00"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="ahmet@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Makine Markası <span className="text-[#F59E0B]">*</span>
                    </label>
                    <select
                      name="brand"
                      value={formData.brand}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    >
                      <option value="">Marka Seçiniz</option>
                      {siteContent.brands.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Makine Modeli / Şasi No</label>
                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleFormChange}
                      placeholder="Örn: CAT 320D"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Parça Adı <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="partName"
                      value={formData.partName}
                      onChange={handleFormChange}
                      placeholder="Örn: Hidrolik Ana Pompa"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Parça Numarası (Varsa)</label>
                    <input
                      type="text"
                      name="partNumber"
                      value={formData.partNumber}
                      onChange={handleFormChange}
                      placeholder="Örn: 172-5584"
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Ek Not / Mesajınız</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Ek detayları buraya yazabilirsiniz..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1012] border border-[#32353E] text-white text-xs focus:outline-none focus:border-[#F59E0B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0F1012] font-extrabold text-sm transition-all shadow-xl shadow-[#F59E0B]/10 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Teklif Talebini Gönder (WhatsApp Yönlendirmeli)</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 10. PROCESS STEPS */}
      <section id="surec" className="py-24 bg-[#18191C] border-y border-[#32353E]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Çalışma Sürecimiz"
            title="4 Adımda Kesintisiz Parça Tedariği"
            description="Sipariş anından kargo teslimatına kadar tam şeffaflık ve teknik rehberlik."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.processSteps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-2xl bg-[#22242A] border border-[#32353E] relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-[#F59E0B] mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BLOG PREVIEW */}
      <section className="py-24 bg-[#0F1012] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Bilgi Merkezi"
            title="Saha & Teknik İçerikler"
            description="İş makinesi bakımı, parça tespiti ve sektördeki yeniliklere dair uzman yazılarımız."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.blogs.map((post) => (
              <article
                key={post.id}
                className="bg-[#22242A] border border-[#32353E] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F1012]/80 backdrop-blur-md text-[#F59E0B] text-[10px] font-bold uppercase tracking-wider border border-[#32353E]">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#F59E0B] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-xs text-gray-400 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#teklif-al"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:underline"
                  >
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="sss" className="py-24 bg-[#18191C] border-y border-[#32353E]/60 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Sıkça Sorulan Sorular"
            title="Aklınıza Takılan Sorular"
            description="Sipariş, teslimat ve parça uyumluluğu hakkında merak ettiğiniz tüm detaylar."
          />

          <div className="space-y-4">
            {siteContent.faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#22242A] border border-[#32353E] rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:text-[#F59E0B] transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#F59E0B] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#F59E0B]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#32353E]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#22242A] via-[#18191C] to-[#0F1012] relative overflow-hidden border-b border-[#32353E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Aradığınız Yedek Parçayı <span className="text-[#F59E0B]">Birlikte Belirleyelim</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Makine markası, modeli veya parça numarasını iletin; uygun seçenekler için hızlıca iletişime geçelim.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteContent.contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base transition-all shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp'tan Yazın</span>
            </a>
            <a
              href="#teklif-al"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0F1012] font-extrabold text-base transition-all shadow-xl"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Hemen Teklif Alın</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#0F1012] border-t border-[#32353E] text-gray-400 text-xs pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Özol İş Makineleri Logo" className="h-16 md:h-20 w-auto object-contain" />
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                {siteContent.shortDescription} Yılların verdiği saha tecrübesiyle şantiyeniz için en hızlı çözümleri üretiyoruz.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a href={siteContent.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#22242A] hover:text-[#F59E0B] border border-[#32353E]">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={siteContent.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#22242A] hover:text-[#F59E0B] border border-[#32353E]">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={siteContent.socials.facebook} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-[#22242A] hover:text-[#F59E0B] border border-[#32353E]">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2.5">
                {siteContent.menu.map((m) => (
                  <li key={m.href}>
                    <a href={m.href} className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-[#F59E0B]" />
                      <span>{m.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Öne Çıkan Parçalar</h4>
              <ul className="space-y-2.5">
                {siteContent.productCategories.slice(0, 5).map((p) => (
                  <li key={p.id}>
                    <a href="#urunler" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-[#F59E0B]" />
                      <span>{p.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">İletişim</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{siteContent.contact.phone}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{siteContent.contact.email}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{siteContent.contact.address}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-[#32353E]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
            <div>
              © {new Date().getFullYear()} Özol İş Makineleri. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#hero" className="hover:text-gray-300">Gizlilik Politikası</a>
              <a href="#hero" className="hover:text-gray-300">KVKK Aydınlatma Metni</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${siteContent.contact.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white/20 group"
        aria-label="WhatsApp İle İletişime Geçin"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs ml-0 group-hover:ml-2">
          WhatsApp İle Sor
        </span>
      </a>

    </div>
  );
}