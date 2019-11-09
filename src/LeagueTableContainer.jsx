import React from "react";

import LeagueTable from "./LeagueTable";

class LeagueTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      teams: []
    };
  }

  componentDidMount() {
    fetch(this.props.api)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            teams: JSON.parse(result.body)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { teams } = this.state;
    const { tierLimit, fixtures } = this.props;
    return (
      <LeagueTable teams={teams} tierLimit={tierLimit} fixtures={fixtures} />
    );
  }
}

export default LeagueTableContainer;
