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
  addMessage: actions.addMessage,
};

class NewMessagesForm extends React.Component {
  static contextType = appContext;

   handleSubmit = (value) => {
     const { userName, queries } = this.context;
     const { addMessage } = queries;
     const { reset, currentChannelId } = this.props;
     
     const data = {
       id: currentChannelId,
       attributes: {
         text: value.text,
         name: userName,
         channelId: currentChannelId,
       },
     };
     console.log(data.attributes.channelId);
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
  form: 'newTask',
})(ConnectedNewTaskForm);
