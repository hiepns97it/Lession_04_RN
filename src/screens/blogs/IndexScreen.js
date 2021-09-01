import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList,Button } from 'react-native';
import { Context } from '../../context/BlogContext';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = (props) =>  {
    const { navigation } = props;
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();
        console.log(state);
    }, [])

    return(
        <View>
            <Button title="Add Blogs" onPress={addBlogPost}></Button>
            <FlatList
                data={state}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.styleIcon}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() =>  deleteBlogPost(item.id)}>
                                    <Icon style={styles.icon} name = 'delete' type='antdesign' color='black'/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Icon name = 'pluscircle' type='antdesign' color='black' size={30}/>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    styleIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title:{
        fontSize: 18
    },
    icon: {
        fontSize: 24,
    }
});

export default IndexScreen;
