import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  //Bring in the asynchronous fetchPosts action
  useEffect(() => {
    dispatch(fetchPosts)
  }, [dispatch]
  )

  return (
    <section>
      <h1>Posts Page</h1>
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