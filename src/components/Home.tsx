import React from 'react'

type User = {
  hobbies: string[],
}

interface HomeProps {
  initialAge: number,
  name: string,
  user: User,
}

interface HomeState {
  age: number,
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props : HomeProps){
    super(props)
    this.state = {
      age: props.initialAge
    };

  }
  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <p>
              Your name is: {this.props.name}, your age is: {this.state.age}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => this.onMakeOlder()}>
                Make me older
            </button>
            <div>
              <h4>Hoobies:</h4>
              <ul>
                {
                  this.props.user.hobbies.map(
                    (hobby, i) => <li key={i}>{hobby}</li>
                  )
                }
              </ul>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}