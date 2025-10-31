import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Server {
  id: number;
  name: string;
  game: string;
  players: string;
  code: string;
  status: string;
  image: string;
}

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  gameFilter: string;
  setGameFilter: (value: string) => void;
  filteredServers: Server[];
}

const SearchSection = ({ searchQuery, setSearchQuery, gameFilter, setGameFilter, filteredServers }: SearchSectionProps) => {
  return (
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
  );
};

export default SearchSection;
