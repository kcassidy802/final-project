import Table from 'react-bootstrap/Table';

function MyTableThree() { //table for page 2 including player data
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
          <td>Joe  </td>
          <td>Sakic</td>
        </tr>
        <tr>
          <td>23 </td>
          <td>Milan </td>
          <td> Hedjuk </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTableThree;