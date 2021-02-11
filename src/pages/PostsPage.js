import React from 'react';
import { connect } from 'react-redux';

const PostsPage = ({ loading, posts, hasErrors }) => {
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