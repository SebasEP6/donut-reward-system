import React from 'react';
import Card from '../../components/Card';
import DashboardLayout from '../../components/Layout/Dashboard';
import TitleText from '../../components/Text/Title';

const Home: React.FunctionComponent = () => {
  return (
    <DashboardLayout>
      <TitleText>Listado de tareas</TitleText>

      <div style={{ height: '52px' }} />

      <Card
        task="Cubreme mientras voy al doc..."
        status="done"
        qty={4}
        creator="Stefy Fuentes"
      />
    </DashboardLayout>
  );
};

export default Home;
