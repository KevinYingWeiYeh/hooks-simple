import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);
  const fetchResource = async (resource) => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data)
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource])
  /* eslint react/prop-types: 0 */
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
