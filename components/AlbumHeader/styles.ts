import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
       alignItems: "center",
       padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    creator: {
        color: 'lightgray',
        margin: 10,
        fontSize: 20,

    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10
    },
    likes: {
        color: 'white',
        margin: 10,
        fontSize: 20
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 175,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    }

});

export default styles;