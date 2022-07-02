import { Typography, TableContainer, Table, TableRow, TableCell } from '@mui/material';
import { Link } from 'react-router-dom'

function createData(text:String, link:String, text2:String, link2:String) {
  return { text, link, text2, link2 };
}

const rows = [
  createData('About Us', '/info', 'Partnerships', '/info'),
  createData('Contact Us', '/info', 'Quality', '/info'),
  createData('FAQ', '/info', 'Shipping', '/info'),
];

export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: '#eceff1', position: "static", padding: '0.5em' }} >
        <TableContainer sx={{ display: 'flex', justifyContent: "center" }}>
          <Table sx={{ maxWidth: 1000 }}>
            <TableRow>
              <TableCell sx={{ padding: '0.5em', border: 'none', textAlign: 'left', fontWeight: 'bold' }} width='20%' >COMPANY</TableCell>
              <TableCell sx={{ padding: '0.5em', border: 'none', textAlign: 'left', fontWeight: 'bold' }} width='25%' >PRODUCTS</TableCell>
              <TableCell sx={{ padding: '0.5em', border: 'none', textAlign: 'left', color: '#757575' }} rowSpan={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid sequatur, quid repugnet, vident. Quae sequuntur igitur? Non semper, inquam; Qui ita affectus, beatum esse numquam probabis; Duo Reges: constructio interrete. Tibi hoc incredibile, quod beatissimum.</TableCell>
            </TableRow>

              {rows.map((row) => (
                <TableRow>
                  <TableCell sx={{ padding: '0.5em', border: 'none', textAlign: 'left' }} >{row.text}</TableCell> {/*<Link style={{textDecoration:'none', color:'#757575'}} to={row.link}>{row.text}</Link> */}
                  <TableCell sx={{ padding: '0.5em', border: 'none', textAlign: 'left' }} >{row.text2}</TableCell> {/*<Link style={{textDecoration:'none', color:'#757575'}} to={row.link2}>{row.text2}</Link> */}
                </TableRow>
              ))}

          </Table>
        </TableContainer>
      </div>
      <div style={{ backgroundColor: '#757575', position: "static", padding: '0.3em' }}>
        <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: "center" }} color="#e0e0e0">
          © 2021 GA Suwen
        </Typography>
      </div>
    </>
  )
}