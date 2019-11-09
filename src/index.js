import React from "react";
import ReactDOM from "react-dom";

import { leagueAPI } from "./leagueApiUtil";
import LeagueTable from "./LeagueTableContainer";

function ListOfTables() {
  return (
    <div>
      <LeagueTable api={leagueAPI.premierLeague} tierLimit={5} />
      <LeagueTable api={leagueAPI.serieA} tierLimit={5} />
      <LeagueTable api={leagueAPI.laLiga} tierLimit={5} />
      <LeagueTable api={leagueAPI.bundesliga} tierLimit={5} />
      <LeagueTable api={leagueAPI.ligue1} tierLimit={4} />
      <LeagueTable api={leagueAPI.eredivisie} tierLimit={3} />
    </div>
  );
}

ReactDOM.render(<ListOfTables />, document.querySelector("#root"));
