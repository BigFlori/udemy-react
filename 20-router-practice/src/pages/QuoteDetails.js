import React, { useEffect } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if(error) {
    return <p className="centered focused">{error}</p>
  }

  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path='/'
          element={
            <div className='centered'>
              <Link className='btn--flat' to='comments'>
                See comments
              </Link>
            </div>
          }
        />
        <Route path='comments' element={<Comments />} />
      </Routes>
    </React.Fragment>
  );
};

export default QuoteDetails;
