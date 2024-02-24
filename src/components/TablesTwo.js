import Table from "react-bootstrap/Table";

function MyTableTwo() { //table for player data 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Jersey #</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>21</td>
          <td>Peter</td>
          <td>Foresberg</td>
        </tr>
        <tr>
          <td>19</td>
          <td>Joe</td>
          <td>Sakic</td>
        </tr>
        <tr>
          <td>33</td>
          <td>Patrick</td>
          <td>Roy</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTableTwo;
