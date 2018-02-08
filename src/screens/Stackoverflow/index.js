import React from 'react';
import { Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import { InputWithIcon, Title, ErrorMessage } from '../../components';
import { FontAwesome } from '@expo/vector-icons';
import Styles from './styles';


class Stackoverflow extends React.Component {
    _renderItem = ({item}) => {
        return (
            <View style={Styles.listItem}>
                <Text>{item.title}</Text>
            </View>
        )
    };

    _keyExtractor = (item, index) => {
        return item.question_id;
        }
    
    refresh() {
        this.props.onRefresh();
    }
    
    renderError() {
        return (
            <ErrorMessage text={this.props.error}></ErrorMessage>
        )
    }

    renderQuestionsList() {
        const {
            loading,
            loadingMore,
            questions,
            onLoadMore,
            initialized,
         } = this.props;
        return (
            <FlatList
                style={Styles.list}
                data={questions.items}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                onRefresh={() => this.refresh()}
                refreshing={loading && initialized}
                onEndReached={() => {
                    const shouldLoadMore = initialized && !loading && !loadingMore && questions.has_more ;
                    if (shouldLoadMore) {
                        onLoadMore();
                    }
                }}
                ListEmptyComponent={this.renderError()}
            />
        );
    }

    renderLoader() {
        return (<ActivityIndicator size="large"/>);
    }

    render() {    
        return (
            <View style={Styles.container}>
                {
                    this.props.initialized
                    ? this.renderQuestionsList()
                    : this.renderLoader()
                }
           </View>
        )
    }
}

export default Stackoverflow;