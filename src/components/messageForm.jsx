import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import appContext from '../utils/appContext';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const actionCreators = {
  addMessageAction: actions.addMessageAction,
};

class NewMessagesForm extends React.Component {
  static contextType = appContext;

   handleSubmit = (value) => {
     const { userName, queries: { addMessage } } = this.context;
     const { reset, currentChannelId } = this.props;
     // const { addMessage } = queries;
     
     const data = {
       id: currentChannelId,
       attributes: {
         text: value.text,
         name: userName,
         channelId: currentChannelId,
       },
     };
     addMessage(data);
     reset();
   }

   render() {
     const { handleSubmit } = this.props;
     return (
       <form className="form-inline" onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="form-group mx-3">
           <Field name="text" required component="input" type="text" />
         </div>
         <input type="submit" className="btn btn-primary btn-sm" value="Add" />
       </form>
     );
   }
}

const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewMessagesForm);
export default reduxForm({
  form: 'NewMessagesForm',
})(ConnectedNewTaskForm);
