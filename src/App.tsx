import React from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import './App.css';

interface ActivateKeyPassProps {
  theme: string,
};

class ActivateKeyPass extends React.Component<ActivateKeyPassProps> {
  render() {
    let user = {
      name: "Luis Martinez",
      hobbies: [
        'soccer',
        'web development'
      ]
    }
    return (
      <div className="mfe-example-web-cl">
        <Header textHomeLink="Hello World" />
        <Home
          name={"LCM"}
          initialAge={27}
          user={user}
        >
          <p>{this.props.theme}</p>
        </Home>
      </div>
    );
  };
};

export default ActivateKeyPass;