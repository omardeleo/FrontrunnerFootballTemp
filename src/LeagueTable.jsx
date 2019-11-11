import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import "./styles.css";
import moment from "moment";
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
      // console.log("key", key);
      let dateStuff = key.split("/");
      let newDate = new Date(dateStuff[2], dateStuff[1] - 1, dateStuff[0]);
      // console.log("newDate", newDate);
      let today = new Date();
      today.setHours(0, 0, 0);
      // console.log("today", today);
      // console.log("newDate", newDate);
      // console.log("isEqual?", today.getTime() === newDate.getTime());
      if (newDate.getTime() >= today.getTime()) {
        // console.log("stop");
        let fixta = checkIfClubPlay(fixtures[key], club);
        if (fixta) {
          // console.log("fixta", fixta);
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
  let timeInfo = matchTime ? matchTime.split(":") : null;
  let dateStuff = matchDate ? matchDate.split("/") : null;
  let str = dateStuff ? `${dateStuff[2]}${dateStuff[1]}${dateStuff[0]}` : null;
  // console.log("matchTime", matchTime);
  let newDate =
    dateStuff && timeInfo
      ? new Date(
          dateStuff[2],
          dateStuff[1] - 1,
          dateStuff[0],
          timeInfo[0] - 5,
          timeInfo[1]
        ).toLocaleString()
      : null;
  // console.log("newDate", newDate.toLocaleString());
  // console.log(newDate);
  // console.log("newDate", newDate);
  // console.log(matchDate);
  // console.log(str);
  let momentDate = str ? moment(`${str}`, "YYYYMMDD hh:mm").fromNow() : null;
  // console.log(momentDate);
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
            vertical: "top",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <h3>
            <div>NEXT MATCH {momentDate}</div>
            {homeTeam} vs {awayTeam}
            {newDate}
          </h3>
        </Popover>
      </Table>
    </Paper>
  );
}
