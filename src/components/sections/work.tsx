'use client';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Button from '../general/button';
import { useRouter } from 'next/navigation';

const WorkSection = () => {
  const router = useRouter();
  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}

      <div className="flex items-center justify-center">
        <Button
          onClick={() => {
            router.push('/projects');
          }}
        >
          View All
        </Button>
      </div>
    </Container>
  );
};

export default WorkSection;
