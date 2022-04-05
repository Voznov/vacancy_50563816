import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

import {getPosts, deletePost} from '../store/actions/posts';
import {Loader, Separator, Touchable} from '../components/default';
import {Block} from '../components';
import {COLORS} from '../constants/style';

const POST_PORTION = 5;

class Home extends Component {
  constructor(props) {
    super(props);

    this.getPosts();
  }
  getPosts() {
    const {posts, loading} = this.props;
    if (!loading) {
      this.props.getPosts(posts.length, POST_PORTION);
    }
  }
  render() {
    const {navigation, posts, loading} = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={posts}
        renderItem={({item: post}) => (
          <Block
            key={post.id}
            onPress={() => navigation.navigate('Comment', {postId: post.id})}>
            <View style={styles.postHeader}>
              <Text style={styles.time}>
                {moment(post.time).format('D MMM YYYY')}
              </Text>
              <Touchable
                onPress={() => {
                  if (!loading) {
                    this.props.deletePost(post.id);
                  }
                }}>
                <Text style={styles.closeText}>{'✖'}</Text>
              </Touchable>
            </View>
            <Text style={styles.title}>{post.title}</Text>
          </Block>
        )}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListFooterComponent={() => <Loader show={loading} />}
        onEndReached={() => this.getPosts()}
        onEndReachedThreshold={0.95}
      />
    );
  }
}
export default connect(
  state => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
  }),
  {getPosts, deletePost},
)(Home);

const styles = StyleSheet.create({
  closeText: {
    color: COLORS.DANGER,
  },
  contentContainerStyle: {
    padding: 10,
  },
  postHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },
  time: {
    fontSize: 12,
  },
});
