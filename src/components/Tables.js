import Table from 'react-bootstrap/Table';

function MyTable() { //table for page three including player info
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
          <td>29</td>
          <td>Nathan </td>
          <td>Mackinnon</td>
        </tr>
        <tr>
          <td>96</td>
          <td>Mikko </td>
          <td>Ranttenan</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Cale </td>
          <td> Makar</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;