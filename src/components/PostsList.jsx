import { useLoaderData } from "react-router-dom";
import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {

  const posts = useLoaderData()

  return (
    <>
    { isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPost 
          onAddPost={addPostHandler}
          onCancel={onStopPosting}
        />
      </Modal>
      )}
      {posts.length > 0 && 
        <ul className={classes.posts}>
          {posts.map(post => <Post key={post.id} postId={post.id} author={post.author} body={post.body} />)}        
        </ul>
      }
      {posts.length === 0 && 
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some.</p>
        </div>  
      }
    </>
  );
}

export default PostsList;
