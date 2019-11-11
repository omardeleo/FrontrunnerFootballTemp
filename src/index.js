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
    <div>
      <h1>Frontrunner Football</h1>
      <h2>Premier League</h2>
      <img
        alt="Flag of England"
        src="//upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/50px-Flag_of_England.svg.png"
      />

      <LeagueTable
        api={leagueAPI.premierLeague}
        tierLimit={5}
        fixtures={premFixtures}
      />
      <h2>Serie A</h2>
      <img
        alt="Flag of Italy"
        src="//upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/50px-Flag_of_Italy.svg.png"
      />
      <LeagueTable
        api={leagueAPI.serieA}
        tierLimit={5}
        fixtures={serieAFixtures}
      />
      <h2>La Liga</h2>
      <img
        alt="Flag of Spain"
        src="//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/50px-Flag_of_Spain.svg.png"
      />
      <LeagueTable
        api={leagueAPI.laLiga}
        tierLimit={5}
        fixtures={laLigaFixtures}
      />
      <h2>Bundesliga</h2>
      <img
        alt="Flag of Germany"
        src="//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/50px-Flag_of_Germany.svg.png"
      />
      <LeagueTable
        api={leagueAPI.bundesliga}
        tierLimit={5}
        fixtures={bundesligaFixtures}
      />
      <h2>Ligue 1</h2>
      <img
        alt="Flag of France"
        src="//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/50px-Flag_of_France.svg.png"
      />
      <LeagueTable
        api={leagueAPI.ligue1}
        tierLimit={4}
        fixtures={ligue1Fixtures}
      />
      <h2>Eredivisie</h2>
      <img
        alt="Flag of the Netherlands"
        src="//upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/50px-Flag_of_the_Netherlands.svg.png"
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
