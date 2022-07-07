import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>
        <Post message='Hello!' likesCount='5' />
        <Post message='How are you?' likesCount='38' />
      </div>
    </div>
  );
};

export default MyPosts;
