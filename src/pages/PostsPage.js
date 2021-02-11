import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import Post from '../components/Post';

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  //Bring in the asynchronous fetchPosts action
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]
  )
  const renderPosts = () => {
    if (loading) return <p>Loading Posts ...</p>
    if (hasErrors) return <p>Unable to display post </p>
    return posts.map((post) => <Post key={post.id} post={post} />)

  }
  return (
    <section>
      <h1>Posts Page</h1>
      {renderPosts()}
    </section>
  );
}
//map redux state to this component props
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})
export default connect(mapStateToProps)(PostsPage);