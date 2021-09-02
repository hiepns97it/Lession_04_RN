import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../../context/BlogContext';
import BlogPostForm from '../../components/BlogPostForm';

const EditScreen = props => {
  const {navigation} = props;
  const id = navigation.getParam('id');
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <BlogPostForm
      initialValue={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
