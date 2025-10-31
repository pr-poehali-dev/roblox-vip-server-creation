import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
