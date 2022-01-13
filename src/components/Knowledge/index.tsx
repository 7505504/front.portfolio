import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import { SiDotnet } from 'react-icons/si';
import { SiRabbitmq } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiMicrosoftsqlserver } from 'react-icons/si';
import KnowledgeItem from './knowledgeItem';


function Knowledge() {
  return (
    <Container>
    <SectionTitle title="Conhecimentos"/>
    <section>
      <KnowledgeItem title="C#" icon={<SiCsharp/>} />
      <KnowledgeItem title=".NET Core" icon={<SiDotnet/>} />
      <KnowledgeItem title="Node.js" icon={<SiNodedotjs/>} />
      <KnowledgeItem title="GraphQL" icon={<SiGraphql/>} />
      <KnowledgeItem title="RabbitMQ" icon={<SiRabbitmq/>} />
      <KnowledgeItem title="SQL Server" icon={<SiMicrosoftsqlserver/>} />
      <KnowledgeItem title="MongoDB" icon={<SiMongodb/>} />
    </section>
    </Container>
  );
};

export default Knowledge;
