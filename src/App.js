import React, { Component } from "react";
import TeamCard from "./components/TeamCard";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import teams from "./teams.json";
import "./App.css";

class App extends Component {
  state = {
      teams: teams,  
      topScore: 0,
      currentScore: 0,
      message: "Click a team to Start the Game",
      unselectedteams: teams
  }


  teamMixup = teams => {
      for (let i = teams.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [teams[i], teams[j]] = [teams[j], teams[i]];
      }
  }

  teamSelected = name => {
      const findteam = this.state.unselectedteams.find(team => team.name === name);

      if(findteam === undefined) {

          this.setState({ 
              message: "You guessed incorrectly!",
              topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
              currentScore: 0,
              teams: teams,
              unselectedteams: teams
          });
      }
      else {
        const newteams = this.state.unselectedteams.filter(team => team.name !== name);
          
          this.setState({ 
              message: "You guessed correctly!",
              currentScore: this.state.currentScore + 1,
              teams: teams,
              unselectedteams: newteams
          });
      }

      this.teamMixup(teams);
  };

  render() {
      return (
          <Wrapper>
              <NavBar
                  currentScore={this.state.currentScore}
                  topScore={this.state.topScore}
              />
              <Title message={this.state.message}/>
              {
                  this.state.teams.map(team => (
                      <TeamCard
                          id={team.id}
                          key={team.id}
                          name={team.name}
                          image={team.image}
                          teamSelected={this.teamSelected} 
                          currentScore={this.state.currentScore}
                      />
                  ))
              }
          </Wrapper>
      );
  }
}

export default App;
