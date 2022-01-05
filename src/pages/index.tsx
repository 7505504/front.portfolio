import Header from '../components/header';
import HomeHero from '../components/HomeHero';
import ProfessionalExperience from '../components/ProfessionalExperience';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <ProfessionalExperience />
      </main>

    </HomeContainer>
  );
}
