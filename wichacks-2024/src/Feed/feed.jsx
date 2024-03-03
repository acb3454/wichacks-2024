import Share from "../Share/share";
import "./feed.css";
import Post from "../Posts/posts";
import Posts from "../postData";
import Form from 'react-bootstrap/Form';

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div class = "search">
            <h2 class = "searchHeader">that feeling when... </h2>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Search" />
                </Form.Group>
            </Form>
        </div>

        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
