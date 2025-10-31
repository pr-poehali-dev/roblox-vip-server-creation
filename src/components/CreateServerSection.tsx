import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface CreateServerSectionProps {
  serverName: string;
  setServerName: (value: string) => void;
  gameCode: string;
  setGameCode: (value: string) => void;
  maxPlayers: string;
  setMaxPlayers: (value: string) => void;
  serverDescription: string;
  setServerDescription: (value: string) => void;
  handleCreateServer: (e: React.FormEvent) => void;
}

const CreateServerSection = ({
  serverName,
  setServerName,
  gameCode,
  setGameCode,
  maxPlayers,
  setMaxPlayers,
  serverDescription,
  setServerDescription,
  handleCreateServer
}: CreateServerSectionProps) => {
  return (
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
  );
};

export default CreateServerSection;
