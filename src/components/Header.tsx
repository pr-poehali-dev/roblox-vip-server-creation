import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;
