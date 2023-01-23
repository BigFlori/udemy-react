import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import ReactRouterPrompt from "react-router-prompt";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const isEmpty = (value) => value.trim().length === 0;

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [formTouched, setFormTouched] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    if (isEmpty(enteredAuthor) || isEmpty(enteredText)) {
      return;
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setFormTouched(true);
  };

  const formFinishedHandler = () => {
    setFormTouched(false);
  };

  return (
    <React.Fragment>
      <ReactRouterPrompt when={formTouched}>
        {({ isActive, onConfirm, onCancel }) => (
          <div style={{ display: !isActive && "none" }}>
            <p>Do you really want to leave?</p>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onConfirm}>Ok</button>
          </div>
        )}
      </ReactRouterPrompt>
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={formFinishedHandler} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
