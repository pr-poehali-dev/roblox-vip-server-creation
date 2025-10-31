import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
