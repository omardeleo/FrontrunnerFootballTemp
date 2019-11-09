import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import { fixtures } from "./fixtures_prem.js";

function createData(position, team, gamesPlayed, points) {
  return { position, team, gamesPlayed, points };
}

export default function CustomizedTables(props) {
  const rows = Object.entries(props.teams).map(([pos, team]) => {
    return createData(pos, team.name, team.gamesPlayed, team.points);
  });
  const { tierLimit } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dada, setDada] = React.useState(null);
  const [fixt, setFixt] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget);
    let thing = event.currentTarget.querySelector("td").innerText;
    // console.log(thing);
    getNextDate(fixtures);
    setDada(thing);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFixt(null);
  };

  const checkIfLivPlay = fixtures => {
    for (let i = 0; i < fixtures.length; i++) {
      let fixture = fixtures[i];
      if (
        fixture.homeTeam === "Liverpool" ||
        fixture.awayTeam === "Liverpool"
      ) {
        return fixture;
      }
    }
  };

  const getNextDate = fixtures => {
    // console.log('fx',fixtures);

    let fixtureDates = Object.keys(fixtures);
    for (let i = 0; i < fixtureDates.length; i++) {
      let key = fixtureDates[i];
      let dateStuff = key.split("/");
      let newDate = new Date(dateStuff[2], dateStuff[1] - 1, dateStuff[0]);
      let today = new Date();
      // console.log("i", i);
      if (newDate > today) {
        // console.log("i", i);
        // console.log(fixtures[key])
        let fixta = checkIfLivPlay(fixtures[key]);
        if (fixta) {
          // console.log(fixta);
          // return fixta;
          setFixt(fixta);
          break;
        }
      }
    }

    // for (let key of Object.keys(fixtures)) {
    //   // console.log(key);
    //   let dateStuff = key.split("/");
    //   let newDate = new Date(dateStuff[2], dateStuff[1] - 1, dateStuff[0]);
    //   // console.log(newDate);
    //   let today = new Date();
    //   if (newDate > today) {
    //     // console.log(newDate)
    //     // console.log(fixtures[key])
    //     let fixs = fixtures[key];
    //     console.log('fixs', fixs)
    //     // console.log(fixs);
    //     // fixs.forEach(fix => {
    //     //   if (fix.homeTeam === "Liverpool" || fix.awayTeam === "Liverpool") {
    //     //     // setFixt(fix);
    //     //     return fix;
    //     //   }
    //     // });
    //     for (let i = 0; i < fixs.length; i++) {
    //       if (
    //         fixs[i].homeTeam === "Liverpool" ||
    //         fixs[i].awayTeam === "Liverpool"
    //       ) {
    //         // return setFixt(fixs[i]);
    //         console.log('i',i)
    //         console.log("ee", fixs[i]);
    //         break;
    //       }
    //     }
    //   }
    // }
  };

  const thing = (fix, name) => {
    // console.log(fix);
    return name;
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log(fixt);
  const thinger = fixt ? fixt.awayTeam : null;
  const matchDate = fixt ? fixt.date : null;
  const matchTime = fixt ? fixt.time : null;
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
          <h1>{thing(fixtures, dada)} vs </h1>
          <h2>{thinger}</h2>
          <div>{matchDate}</div>
          <div>{matchTime}</div>
        </Popover>
      </Table>
    </Paper>
  );
}
