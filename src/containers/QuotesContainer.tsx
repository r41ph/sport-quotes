import { connect } from "react-redux";
import QuotesWrapper from "../components/quotesWrapper/QuotesWrapper";
import {
  quotesAction
} from "../actions/quotesAction";
import {
  errorsAction
} from "../actions/errorsAction";

const mapStateToProps = (reduxState: any) => {
  return {
    quotes: reduxState.quotes,
    errors: reduxState.errors
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setQuotes: (quotes: any) => dispatch(quotesAction(quotes)),
    setErrors: (errors: any) => dispatch(errorsAction(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuotesWrapper);
