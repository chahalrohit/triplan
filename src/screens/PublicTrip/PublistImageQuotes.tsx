import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import ItemImageQuotes from 'components/ImageQuote';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';

const PublishItemImageQuotes = React.memo(() => {
    const { goBack, navigate } = useNavigation();
    const { params } = useRoute();
    const { image, index, quote } = params;
    const prevName = useNavigationState(
        state => state.routes[state.index - 1].name,
    );
    const goPrevScreen = React.useCallback((idx, value) => {
        navigate(prevName, {
            quote: value,
            imgIndex: idx,
        });
    }, []);

    return (
        <>
            <StatusBar barStyle='light-content'/>
            <ItemImageQuotes
                quotes={quote}
                onSubmitQuote={(index, value) => goPrevScreen(index, value)}
                onClose={() => goBack()}
                image={image}
                index={index}
            />
        </>
    )
});

const styles = StyleSheet.create({
})

export default PublishItemImageQuotes;