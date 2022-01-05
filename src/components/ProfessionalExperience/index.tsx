import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function ProfessionalExperience() {
  return (
    <Container>
      <SectionTitle title="1 Ano e 3 Meses" description="de experiência. "/>
      <section>
      <ExperienceItem
            year="10/2020"
            title="Dev Back-end Assistente"
            description="Sustentação de sistemas legados e aplicações mais recentes. Correção em sistemas e criação de APIs REST/RESTful .NET"
          />
      <ExperienceItem
            year="05/2021"
            title="Dev Back-end Jr."
            description="Atuação em squad com projetos mais avançados. Criação de ferramentas de apoio ao time Comercial e correções complexas em sistemas legados."
      />
      </section>
        
      </Container>
  );
};

export default ProfessionalExperience;
