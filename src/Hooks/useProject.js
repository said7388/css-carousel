// @flow strict

import { useEffect, useState } from 'react';

function useProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=home&get_section=yes&image=yes&post=yes&file=yes&gallery=yes')
      .then(response => response.json())
      .then(data => {
        setProjects(data?.featured_project)
      })
  }, []);

  return { projects, setProjects };
};

export default useProject;