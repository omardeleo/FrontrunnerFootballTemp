import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";

function createData(position, team, gamesPlayed, points) {
  return { position, team, gamesPlayed, points };
}

export default function CustomizedTables(props) {
  const rows = Object.entries(props.teams).map(([pos, team]) => {
    return createData(pos, team.name, team.gamesPlayed, team.points);
  });
  const { tierLimit, fixtures } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fixture, setFixture] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    let club = event.currentTarget.querySelector("td").innerText;
    getNextMatch(fixtures, club);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFixture(null);
  };

  const checkIfClubPlay = (fixtures, club) => {
    for (let i = 0; i < fixtures.length; i++) {
      let fixture = fixtures[i];
      if (fixture.homeTeam === club || fixture.awayTeam === club) {
        return fixture;
      }
    }
  };

  const getNextMatch = (fixtures, club) => {
    let fixtureDates = Object.keys(fixtures);
    for (let i = 0; i < fixtureDates.length; i++) {
      let key = fixtureDates[i];
      let dateStuff = key.split("/");
      let newDate = new Date(dateStuff[2], dateStuff[1] - 1, dateStuff[0]);
      let today = new Date();
      if (newDate > today) {
        let fixta = checkIfClubPlay(fixtures[key], club);
        if (fixta) {
          setFixture(fixta);
          break;
        }
      }
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const homeTeam = fixture ? fixture.homeTeam : null;
  const awayTeam = fixture ? fixture.awayTeam : null;
  const matchDate = fixture ? fixture.date : null;
  const matchTime = fixture ? fixture.time : null;
  return (
    <Paper>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Pos</TableCell>
            <TableCell align="left">Team</TableCell>
            <TableCell align="right">GP</TableCell>
            <TableCell align="right">Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, tierLimit).map(row => (
            <TableRow key={row.position} onClick={handleClick}>
              <TableCell align="left" component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="left">{row.team}</TableCell>
              <TableCell align="right">{row.gamesPlayed}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <h3>
            {homeTeam} vs {awayTeam}{" "}
          </h3>
          <div>{matchDate}</div>
          <div>{matchTime}</div>
        </Popover>
      </Table>
    </Paper>
  );
}
