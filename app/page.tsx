import { Container } from '../components/ui/container';
import { Header } from '../components/header';
import { SearchBox } from '../components/search-box';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background/80 pb-8">
      <Container>
        <Header />
        <SearchBox />
      </Container>
    </main>
  );
}