import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import appContext from '../utils/appContext';
import { addMessageAction } from '../actions';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};

const actionCreators = {
  addMessageAction,
};

@connect(mapStateToProps, actionCreators)
@withTranslation()
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
       </form>
     );
   }
}

export default reduxForm({
  form: 'NewMessagesForm',
})(NewMessagesForm);
