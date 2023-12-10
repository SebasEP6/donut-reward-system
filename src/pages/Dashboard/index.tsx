import React from 'react';
import Card from '../../components/Card';

const Dashboard: React.FunctionComponent = () => {
  return (
    <div>
      <Card
        task="Cubreme mientras voy al doc..."
        status="done"
        qty={4}
        creator="Stefy Fuentes"
      />
    </div>
  );
};

export default Dashboard;
