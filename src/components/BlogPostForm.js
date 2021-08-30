import React, { useState } from  'react';
import { View, Text, StyleSheet, TextInput, Button  } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValue }) => {
    const [title, setTitle] = useState(initialValue.title);
    const [content, setContent] = useState(initialValue.content);

    return(
        <View style={styles.container}>
            <Text>Nhập tiêu đề blog</Text>
            <TextInput 
                style={styles.input}
                value={title}
                placeholder="Thông tin tiêu đề"
                onChangeText={text => setTitle(text)}
            />
            <Text>Nhập nội dung blog</Text>
            <TextInput 
                style={styles.input}
                value={content}
                placeholder="Thông tin nội dung"
                onChangeText={text => setContent(text)}
            />
            <Button title="Save Blog"
                onPress={() => onSubmit(title, content)}
            ></Button>
        </View>
    )
}

BlogPostForm.defaultProps ={
    initialValue: { 
        title: '', 
        content: ''
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
});

export default BlogPostForm;