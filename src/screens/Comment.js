import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

import {Block} from '../components';
import {Loader, Separator, Text} from '../components/default';
import {getComments} from '../store/actions/comments';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.getComments();
  }
  getComments() {
    this.props.getComments(this.props.route.params.postId);
  }
  componentDidUpdate(prevProps) {
    if (this.props.route.params.postId !== prevProps.route.params.postId) {
      this.getComments();
    }
  }
  render() {
    const {comments, loading, post} = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={comments}
        renderItem={({item: comment}) => (
          <Block key={comment.id}>
            <Text style={styles.title}>{comment.name}</Text>
            <Text style={styles.body}>{comment.body}</Text>
          </Block>
        )}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.time}>
              {moment(post.time).format('D MMM YYYY')}
            </Text>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
            <Text style={styles.commentHeader}>{'Комментарии:'}</Text>
            <Loader show={loading} />
          </>
        )}
      />
    );
  }
}

export default connect(
  (state, ownProps) => {
    const {postId} = ownProps.route.params;
    return {
      comments: state.comments.commentsById[postId] ?? [],
      loading: state.comments.loading,
      post: state.posts.posts.find(post => post.id === postId),
    };
  },
  {getComments},
)(Comment);

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  time: {
    fontSize: 12,
  },
  body: {
    fontSize: 12,
  },
  commentHeader: {
    marginVertical: 7,
    fontSize: 17,
  },
});
