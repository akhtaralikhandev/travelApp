import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#FF6B6B",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const Gstate = useSelector((s) => s.entities.acudata);
  const Header = Gstate.acudata.tabledata;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">
              <b>{Header.column1}</b>
            </StyledTableCell>
            <StyledTableCell align="right">
              <b>{Header.column2}</b>
            </StyledTableCell>
            <StyledTableCell align="right">
              <b>{Header.column3}</b>
            </StyledTableCell>
            <StyledTableCell align="right">
              <b>{Header.column4}</b>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Gstate.status === "loaded"
            ? Gstate.list.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell align="left">
                    {row.clinics.companyInfo.businessName}{" "}				  
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.clinics.contactName.first}{" "}
                    {row.clinics.contactName.last}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.clinics.Address.address1}
                    <br />
                    {row.clinics.Address.address2}
                    <br />
                    {row.clinics.Address.address3}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    Phone: {row.clinics.phones.phone}
                    <br />
                    Skype: {row.clinics.phones.skype}
                    <br />
                    Mobile: {row.clinics.phones.mobile}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Phone: {row.clinics.professionalInfo.healthcareProviderIdentifierOrganisation}
                    <br />
                    Skype: {row.clinics.professionalInfo.healthcareProviderIdentifierIndividual}
                    <br />
                    Mobile: {row.clinics.professionalInfo.licenseNo}
                    <br />
                    Mobile: {row.clinics.professionalInfo.licenseValidTill}
                  </StyledTableCell>
				  
                </StyledTableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
