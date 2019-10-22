import { connect } from "react-redux";
import QuotesWrapper from "../components/quotesWrapper/QuotesWrapper";
import {
  quotesAction
} from "../actions/quotesAction";

const mapStateToProps = (reduxState: any) => {
  return {
    quotes: reduxState.quotesReducer
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setQuotes: (quotes: any) => dispatch(quotesAction(quotes))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuotesWrapper);
