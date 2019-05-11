import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import appContext from '../utils/appContext';
import { addMessageAction } from '../actions';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};

@connect(mapStateToProps, { addMessageAction })
@reduxForm({ form: 'NewMessagesForm' })
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
     const style = {
       position: 'fixed',
       bottom: '2em',
       width: '65vw',
     };
     return (
       <form className="form-inline" style={style} onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="input-group mb-3 w-100">
           <Field autoFocus placeholder="Message" name="text" required className="form-control rounded-0 border-top-0 border-left-0 border-right-0" component="input" type="text" autoComplete="off" />
         </div>
       </form>
     );
   }
}

export default NewMessagesForm;
