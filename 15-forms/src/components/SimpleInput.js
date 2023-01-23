import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //Name
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    blurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((enteredName) => enteredName.trim() !== "");

  //Email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (enteredEmail) =>
      enteredEmail.trim() !== "" &&
      enteredEmail.includes("@") &&
      enteredEmail.includes(".")
  );

  //Form
  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  //Submission
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    //submit
    resetNameInput();
    resetEmailInput();
  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className='error-text'>Your e-mail address is invalid.</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
