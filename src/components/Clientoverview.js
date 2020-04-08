import React from 'react';

class Client extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="client">
        <img src={this.props.image} />
        {/* <span className="project-skill">{this.props.title}</span> */}
      </div>
    );
  }
}

class Clientoverview extends React.Component {
  render() {
    const { clients } = this.props;
    return <div className="clients-container">{clients.map(client => <Client title={client.title} image={client.image} key={client.title} />)}</div>;
  }
}

export default Clientoverview;
