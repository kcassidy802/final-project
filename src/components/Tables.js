import Table from 'react-bootstrap/Table';

function MyTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nathan </td>
          <td>Mackinnon</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mikko </td>
          <td>Ranttenan</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cale </td>
          <td> Makar</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;