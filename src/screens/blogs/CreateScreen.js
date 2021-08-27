import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../../context/BlogContext';

const CreateScreen = (props) => {
    const { navigation } = props;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context);
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
            <Button title="Add Blogs" onPress={() => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
            }}
            ></Button>
        </View>
    )
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

export default CreateScreen;
