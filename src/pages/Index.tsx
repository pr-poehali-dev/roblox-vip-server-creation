import { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection';
import CreateServerSection from '@/components/CreateServerSection';
import GuidesSection from '@/components/GuidesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

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
      <Header />
      <HeroSection />
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        gameFilter={gameFilter}
        setGameFilter={setGameFilter}
        filteredServers={filteredServers}
      />
      <CreateServerSection
        serverName={serverName}
        setServerName={setServerName}
        gameCode={gameCode}
        setGameCode={setGameCode}
        maxPlayers={maxPlayers}
        setMaxPlayers={setMaxPlayers}
        serverDescription={serverDescription}
        setServerDescription={setServerDescription}
        handleCreateServer={handleCreateServer}
      />
      <GuidesSection guides={guides} />
      <FAQSection faqs={faqs} />
      <Footer />
    </div>
  );
};

export default Index;
