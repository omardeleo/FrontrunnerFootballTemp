import React from "react";
import ReactDOM from "react-dom";

import { leagueAPI } from "./leagueApiUtil";
import LeagueTable from "./LeagueTableContainer";
import premFixtures from "./fixtures_prem.js";
import serieAFixtures from "./fixtures_serie_a.js";

function ListOfTables() {
  return (
    <div>
      <LeagueTable
        api={leagueAPI.premierLeague}
        tierLimit={5}
        fixtures={premFixtures}
      />
      <LeagueTable
        api={leagueAPI.serieA}
        tierLimit={5}
        fixtures={serieAFixtures}
      />
    </div>
  );
}

ReactDOM.render(<ListOfTables />, document.querySelector("#root"));

/*
      
      <LeagueTable api={leagueAPI.laLiga} tierLimit={5} />
      <LeagueTable api={leagueAPI.bundesliga} tierLimit={5} />
      <LeagueTable api={leagueAPI.ligue1} tierLimit={4} />
      <LeagueTable api={leagueAPI.eredivisie} tierLimit={3} />
*/
