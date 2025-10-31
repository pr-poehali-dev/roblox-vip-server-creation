import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gameFilter, setGameFilter] = useState('all');
  const [serverName, setServerName] = useState('');
  const [gameCode, setGameCode] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('10');
  const [serverDescription, setServerDescription] = useState('');

  const popularServers = [
    {
      id: 1,
      name: 'Tower of Hell VIP',
      game: 'Tower of Hell',
      players: '8/10',
      code: 'TOH-FREE-123',
      status: 'online',
      image: 'https://cdn.poehali.dev/projects/10d06249-3b10-4653-8444-55a03e00a8b9/files/2eb0efad-5632-420a-a635-b57fe1cedaff.jpg'
    },
    {
      id: 2,
      name: 'Brookhaven Premium',
      game: 'Brookhaven',
      players: '12/15',
      code: 'BRK-VIP-456',
      status: 'online',
      image: 'https://cdn.poehali.dev/projects/10d06249-3b10-4653-8444-55a03e00a8b9/files/2eb0efad-5632-420a-a635-b57fe1cedaff.jpg'
    },
    {
      id: 3,
      name: 'Adopt Me Party',
      game: 'Adopt Me',
      players: '20/25',
      code: 'ADM-FRE-789',
      status: 'online',
      image: 'https://cdn.poehali.dev/projects/10d06249-3b10-4653-8444-55a03e00a8b9/files/2eb0efad-5632-420a-a635-b57fe1cedaff.jpg'
    },
    {
      id: 4,
      name: 'Bloxburg VIP Build',
      game: 'Bloxburg',
      players: '5/10',
      code: 'BLX-PRO-321',
      status: 'online',
      image: 'https://cdn.poehali.dev/projects/10d06249-3b10-4653-8444-55a03e00a8b9/files/2eb0efad-5632-420a-a635-b57fe1cedaff.jpg'
    }
  ];

  const guides = [
    {
      id: 1,
      title: 'Как создать VIP сервер',
      description: 'Пошаговая инструкция по созданию бесплатного VIP сервера',
      icon: 'BookOpen'
    },
    {
      id: 2,
      title: 'Настройка приватности',
      description: 'Как управлять доступом к вашему серверу',
      icon: 'Lock'
    },
    {
      id: 3,
      title: 'Коды серверов',
      description: 'Как поделиться кодом сервера с друзьями',
      icon: 'Share2'
    },
    {
      id: 4,
      title: 'Решение проблем',
      description: 'Частые проблемы и их решения',
      icon: 'AlertCircle'
    }
  ];

  const faqs = [
    {
      question: 'Как создать бесплатный VIP сервер?',
      answer: 'Перейдите во вкладку "Создать сервер", заполните форму с названием и кодом игры, выберите максимальное количество игроков и нажмите "Создать сервер".'
    },
    {
      question: 'Сколько времени работает бесплатный сервер?',
      answer: 'Бесплатные VIP серверы работают 24 часа. После истечения времени вы можете создать новый сервер.'
    },
    {
      question: 'Как пригласить друзей на сервер?',
      answer: 'После создания сервера скопируйте код сервера и отправьте его друзьям. Они смогут присоединиться, введя код в поиске.'
    },
    {
      question: 'Можно ли изменить настройки сервера?',
      answer: 'Да, вы можете изменить приватность, максимальное количество игроков и другие настройки в любое время.'
    },
    {
      question: 'Что делать если сервер не работает?',
      answer: 'Проверьте статус сервера в разделе "Поиск серверов". Если сервер offline, попробуйте создать новый или обратитесь в поддержку.'
    }
  ];

  const handleCreateServer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serverName || !gameCode) {
      toast.error('Заполните все обязательные поля');
      return;
    }
    toast.success('🎮 Сервер успешно создан!', {
      description: `Код сервера: ${gameCode}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    });
    setServerName('');
    setGameCode('');
    setMaxPlayers('10');
    setServerDescription('');
  };

  const filteredServers = popularServers.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         server.game.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = gameFilter === 'all' || server.game.toLowerCase() === gameFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">RoVIP</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#search" className="hover:text-primary transition-colors">Поиск</a>
            <a href="#create" className="hover:text-primary transition-colors">Создать</a>
            <a href="#guides" className="hover:text-primary transition-colors">Гайды</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <Icon name="Mail" size={16} />
            Контакты
          </Button>
        </div>
      </header>

      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Бесплатные VIP серверы
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Создавай свои <span className="text-primary">VIP серверы</span> в Roblox
              </h2>
              <p className="text-xl text-muted-foreground">
                Найди идеальный сервер или создай свой собственный бесплатный VIP сервер за минуту. Приглашай друзей и играйте вместе!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать сервер
                </Button>
                <Button size="lg" variant="outline" className="font-semibold">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти сервер
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Активных серверов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">1000+</div>
                  <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/10d06249-3b10-4653-8444-55a03e00a8b9/files/5c0c9c0f-bc2b-4263-9667-d2dc38dadf1f.jpg"
                alt="Roblox VIP Server"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={24} />
                  <span className="font-bold">Мгновенный запуск</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Найди свой идеальный сервер</h2>
            <p className="text-xl text-muted-foreground">
              Более 500 активных серверов ждут тебя
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию или игре..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Select value={gameFilter} onValueChange={setGameFilter}>
                <SelectTrigger className="w-[200px] h-12">
                  <SelectValue placeholder="Все игры" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все игры</SelectItem>
                  <SelectItem value="tower of hell">Tower of Hell</SelectItem>
                  <SelectItem value="brookhaven">Brookhaven</SelectItem>
                  <SelectItem value="adopt me">Adopt Me</SelectItem>
                  <SelectItem value="bloxburg">Bloxburg</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServers.map((server) => (
              <Card key={server.id} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-border/50 hover:border-primary/50">
                <div className="relative h-40">
                  <img src={server.image} alt={server.name} className="w-full h-full object-cover" />
                  <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                    {server.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{server.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Gamepad2" size={14} />
                    {server.game}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      {server.players}
                    </span>
                    <Badge variant="outline" className="font-mono">
                      {server.code}
                    </Badge>
                  </div>
                  <Button className="w-full" variant="secondary">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="create" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Создай свой VIP сервер</h2>
              <p className="text-xl text-muted-foreground">
                Это быстро, просто и абсолютно бесплатно
              </p>
            </div>

            <Card className="border-2 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Server" size={24} className="text-primary" />
                  Настройки нового сервера
                </CardTitle>
                <CardDescription>
                  Заполните форму и получите уникальный код сервера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateServer} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="serverName">Название сервера *</Label>
                    <Input
                      id="serverName"
                      placeholder="Мой крутой VIP сервер"
                      value={serverName}
                      onChange={(e) => setServerName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gameCode">Код игры Roblox *</Label>
                    <Input
                      id="gameCode"
                      placeholder="123456789"
                      value={gameCode}
                      onChange={(e) => setGameCode(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxPlayers">Максимум игроков</Label>
                    <Select value={maxPlayers} onValueChange={setMaxPlayers}>
                      <SelectTrigger id="maxPlayers">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 игроков</SelectItem>
                        <SelectItem value="10">10 игроков</SelectItem>
                        <SelectItem value="15">15 игроков</SelectItem>
                        <SelectItem value="20">20 игроков</SelectItem>
                        <SelectItem value="25">25 игроков</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание (опционально)</Label>
                    <Textarea
                      id="description"
                      placeholder="Расскажите о вашем сервере..."
                      value={serverDescription}
                      onChange={(e) => setServerDescription(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold" size="lg">
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Создать сервер
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="guides" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Гайды и инструкции</h2>
            <p className="text-xl text-muted-foreground">
              Узнай всё о создании и управлении серверами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {guides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 border-border/50 hover:border-secondary/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={guide.icon as any} size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-2 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PlayCircle" size={24} className="text-accent" />
                  Видео инструкция
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/10d06249-3b10-4653-8444-55a03e00a8b9/files/259a6865-c4e2-4990-bcfe-7acf86fa70dc.jpg"
                    alt="Video Guide"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Button size="lg" className="rounded-full w-16 h-16 p-0 bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={32} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground">
                Ответы на самые популярные вопросы
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border/50 rounded-lg px-6 bg-card/50">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">RoVIP</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для создания бесплатных VIP серверов в Roblox
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#search" className="hover:text-primary transition-colors">Поиск серверов</a></li>
                <li><a href="#create" className="hover:text-primary transition-colors">Создать сервер</a></li>
                <li><a href="#guides" className="hover:text-primary transition-colors">Гайды</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщить о проблеме</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            © 2024 RoVIP. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
