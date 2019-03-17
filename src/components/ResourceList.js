import React from 'react';
import useResources from './useResources'

const ResourceList = ({ resource }) => {
  /* eslint react/prop-types: 0 */
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>
          {record.title}
        </li>
      ))}
    </ul>
  )
}

export default ResourceList;
