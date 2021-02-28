import { AuthenticatedApp } from 'authenticated-app';
import { useAuth } from 'context/auth-context';
import React from 'react';
import { UnanthenticatedAPP } from 'unauthenticated-app';



function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnanthenticatedAPP />}
    </div>
  );
}

export default App;
