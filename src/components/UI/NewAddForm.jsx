import React from 'react';

export default function NewAddForm() {
  return (
    <div className="container">

      {/* Заменил "class" на "className" */}
      <div className="text">Contact us Form</div>
      <form action="#">

        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">First Name</label>{' '}
   
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="email" required /> 
            <div className="underline" />
            <label htmlFor="">Email Address</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor="">Website Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" required />
            <br />
            <div className="underline" />
            <label htmlFor="">Write your message</label>
            <br />
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner" />
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
