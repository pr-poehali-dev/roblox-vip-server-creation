import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Guide {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface GuidesSectionProps {
  guides: Guide[];
}

const GuidesSection = ({ guides }: GuidesSectionProps) => {
  return (
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
  );
};

export default GuidesSection;
