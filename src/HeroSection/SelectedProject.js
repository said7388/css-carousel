// @flow strict

import * as React from 'react';

function SelectedProject({ project }) {

  return (
    <div className="selected-project">
      <p className='selected-project-title'>
        {project?.data.product_data.title}
      </p>
      <p className='selected-project-identifier'>
        {project?.data.product_data.identifier}
      </p>
      <p className='project-area'>
        <span>{project?.data.product_data.location}</span>
        <span> - </span>
        <span>{project?.data.product_data.area}</span>
      </p>
    </div>
  );
};

export default SelectedProject;