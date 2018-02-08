import React from 'react';
import { Stackoverflow } from "../../screens";
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/questions.actions';
import { StackoverflowService } from '../../services';

const INIT_PAGE = 1;
class StackoverflowContainer extends React.Component {
    
    componentDidMount() {
        const { data, error } = this.props.questions;
        if (!error && !data.items.length) {
            this.loadQuestions(INIT_PAGE);
        }
    }

    loadQuestions(page, loadMore = false) {

        const { loading, loadingMore } = this.props.questions;
        if (loading || loadingMore) return;
        this.props.getQuestions(page, loadMore);
    }

    render() {
        const { data, loading, loadingMore, error } = this.props.questions;
        return (
            <Stackoverflow
                questions={data}
                error={error}
                loading={loading}
                loadingMore={loadingMore}
                onRefresh={() => this.loadQuestions(INIT_PAGE)}
                initialized={(error && error.length > 0) || data.items.length > 0}
                onLoadMore={() => this.loadQuestions(data.page + 1, true)}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: (page, loadMore) => dispatch(getQuestions(page, loadMore))
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StackoverflowContainer);