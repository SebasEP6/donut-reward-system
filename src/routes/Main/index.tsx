import React, { useState } from 'react';
import Button from '../../components/Button';
import Field from '../../components/Field';

const Main: React.FunctionComponent = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <Field value={username} setValue={setUsername} name="Username" />

      <Field
        value={password}
        setValue={setPassword}
        name="Password"
        type="password"
      />

      <Button>Login</Button>
    </>
  );
};

export default Main;
