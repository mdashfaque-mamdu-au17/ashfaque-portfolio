import ProjectDetails from '@/components/data-display/project-details';
import Container from '@/components/layout/container';
import { ALLPROJECTS } from '@/lib/data';
import React from 'react';

function AllProjects() {
  return (
    <Container id="Projects">
      {ALLPROJECTS?.map((project, index) => {
        return (
          <ProjectDetails
            key={index}
            {...project}
            layoutType={index % 2 === 0 ? 'default' : 'reverse'}
          />
        );
      })}
    </Container>
  );
}

export default AllProjects;
