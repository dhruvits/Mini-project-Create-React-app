import React from "react";
import { Table } from "semantic-ui-react";

const Posts = ({ posts, loading }) => {
  // class Posts extends Component {
  if (loading) {
    return <h2>loading...</h2>;
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userData: userData,
  //   };
  // }

  // render() {
  // const { userData } = this.state;
  return (
    // <ul className="list-group mb-4">
    //   {posts.map((post) => (
    //     <li key={post.id} className="list-group-item">
    //       {post.title}
    //     </li>
    //   ))}
    // </ul>

    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Body</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {posts.map((post) => (
          <Table.Row key={post.id}>
            <Table.Cell>{post.id}</Table.Cell>
            <Table.Cell>{post.name}</Table.Cell>
            <Table.Cell>{post.email}</Table.Cell>
            <Table.Cell>{post.body}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
export default Posts;
