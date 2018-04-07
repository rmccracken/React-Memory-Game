import React, { Component } from "react";
import TeamCard from "./components/TeamCard";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import teams from "./teams.json";
import "./App.css";

class App extends Component {
  // Setting this.state.teams to the teams json array
  state = {
    teams: teams,
    topeScore: 0,
    currentScore: 0,
    message: "Click a teamm to begin"
  };



  // Map over this.state.teams and render a TeamCard component for each friend object
  render() {
    return (
      
        <Wrapper>
      <NavBar
      message={this.state.message}
      currentScore={this.state.currentScore}
      topScore={this.state.topScore}
      ></NavBar> 
      

        <Title>Friends List</Title>
        {this.state.teams.map(friend => (
          <TeamCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>

    );
    // <Footer>
        
    // </Footer>
  }
}

export default App;
