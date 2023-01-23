import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Quotes = React.lazy(() => import("./pages/Quotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Navigate to='/quotes' />} />
          <Route path='/quotes' element={<Quotes />} />
          <Route path='/quotes/:quoteId/*' element={<QuoteDetails />} />
          <Route path='/new-quote' element={<AddQuote />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
