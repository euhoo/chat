import React from 'react';

const Form = (props) => {
  const { name, text } = props;
  return (
    <form>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder={text} aria-label="Текст" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">{name}</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
