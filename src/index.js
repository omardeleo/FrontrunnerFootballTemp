import React from "react";
import ReactDOM from "react-dom";

import { leagueAPI } from "./leagueApiUtil";
import LeagueTable from "./LeagueTableContainer";
import premFixtures from "./fixtures_prem.js";
import serieAFixtures from "./fixtures_serie_a.js";
import laLigaFixtures from "./fixturesLaLiga.js";
import bundesligaFixtures from "./fixturesBundesliga.js";
import ligue1Fixtures from "./fixturesLigue1.js";
import "./styles.css";

import eredivisieFixtures from "./fixturesEredivisie.js";
function ListOfTables() {
  return (
    <div className="rabcont">
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
      <LeagueTable
        api={leagueAPI.laLiga}
        tierLimit={5}
        fixtures={laLigaFixtures}
      />
      <LeagueTable
        api={leagueAPI.bundesliga}
        tierLimit={5}
        fixtures={bundesligaFixtures}
      />
      <LeagueTable
        api={leagueAPI.ligue1}
        tierLimit={4}
        fixtures={ligue1Fixtures}
      />
      <LeagueTable
        api={leagueAPI.eredivisie}
        tierLimit={3}
        fixtures={eredivisieFixtures}
      />
    </div>
  );
}

ReactDOM.render(<ListOfTables />, document.querySelector("#root"));
