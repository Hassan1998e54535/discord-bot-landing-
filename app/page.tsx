'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Shield, 
  Users, 
  MessageSquare, 
  Settings, 
  Zap, 
  Star,
  Crown,
  Music,
  GamepadIcon,
  Bot,
  ArrowLeft,
  ArrowRight,
  ChevronDown
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [stats, setStats] = useState({
    servers: 0,
    users: 0,
    commands: 0
  })

  useEffect(() => {
    // محاكاة تحديث الإحصائيات
    const interval = setInterval(() => {
      setStats(prev => ({
        servers: Math.min(prev.servers + Math.floor(Math.random() * 10), 15420),
        users: Math.min(prev.users + Math.floor(Math.random() * 50), 2847293),
        commands: Math.min(prev.commands + Math.floor(Math.random() * 5), 892847)
      }))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "الحماية المتقدمة",
      description: "نظام حماية شامل ضد السبام والمحتوى المؤذي",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Music,
      title: "مشغل الموسيقى",
      description: "استمتع بالموسيقى عالية الجودة من مختلف المنصات",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GamepadIcon,
      title: "ألعاب تفاعلية",
      description: "مجموعة متنوعة من الألعاب والمسابقات الممتعة",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "إعدادات مرنة",
      description: "تخصيص كامل لجميع الوظائف حسب احتياجاتك",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "أداء سريع",
      description: "استجابة فورية وأداء موثوق على مدار الساعة",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Crown,
      title: "VIP المميز",
      description: "ميزات حصرية ودعم أولوية للمستخدمين المميزين",
      color: "from-yellow-400 to-yellow-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Bot className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">DiscordBot Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              <a href="#features" className="text-gray-300 hover:text-yellow-500 transition-colors">الميزات</a>
              <a href="#stats" className="text-gray-300 hover:text-yellow-500 transition-colors">الإحصائيات</a>
              <a href="#pricing" className="text-gray-300 hover:text-yellow-500 transition-colors">الأسعار</a>
              <Button size="sm" className="yellow-gradient">
                إضافة للخادم
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-20 pb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-yellow-500 text-sm font-medium">البوت الأكثر تقدماً في ديسكورد</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              بوت ديسكورد 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {" "}المتقدم
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              اجعل خادمك مميزاً مع أقوى بوت ديسكورد يوفر الحماية، الترفيه، والإدارة الذكية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4 yellow-gradient glow-effect">
                <Bot className="h-5 w-5 mr-2" />
                إضافة للخادم الآن
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <MessageSquare className="h-5 w-5 mr-2" />
                تجربة مباشرة
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {stats.servers.toLocaleString()}+
              </div>
              <div className="text-gray-300 text-lg">خادم نشط</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {stats.users.toLocaleString()}+
              </div>
              <div className="text-gray-300 text-lg">مستخدم راضي</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {stats.commands.toLocaleString()}+
              </div>
              <div className="text-gray-300 text-lg">أمر منفذ يومياً</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ميزات لا تقاوم
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              اكتشف مجموعة شاملة من الأدوات والميزات التي تجعل خادمك الأفضل
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-yellow-500 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز لتجربة الفرق؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            انضم إلى آلاف الخوادم التي تثق في بوتنا لإدارة مجتمعاتها
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 yellow-gradient glow-effect">
              ابدأ مجاناً الآن
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              اطلع على الوثائق
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Bot className="h-8 w-8 text-yellow-500" />
                <span className="text-xl font-bold text-white">DiscordBot Pro</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                البوت الأكثر تقدماً وموثوقية لخوادم ديسكورد. نحن نقدم أفضل تجربة للمستخدمين والمديرين.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">الدعم الفني</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">الوثائق</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">خادم ديسكورد</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">قانوني</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">شروط الاستخدام</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 DiscordBot Pro. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}