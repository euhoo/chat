import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import appContext from '../utils/appContext';
import * as actions from '../actions';

const mapStateToProps = ({ currentChannelId, modal }) => {
  const props = {
    currentChannelId,
    modal,
  };
  return props;
};

@connect(mapStateToProps, actions)
@reduxForm({ form: 'RenameChannelForm' })
class RenameChannelForm extends React.Component {
  static contextType = appContext;

   handleSubmit = (value) => {
     const { queries } = this.context;
     const { renameChannel } = queries;
     const { reset, currentChannelId, closeModalAction } = this.props;
     const data = {
       id: currentChannelId,
       attributes: {
         name: value.text,
       },
     };
     renameChannel(data);
     closeModalAction();
     reset();
   }

   render() {
     const { handleSubmit } = this.props;
     return (
       <form className="form-inline " onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="form-group mx-3">
           <Field autoFocus placeholder="New name" name="text" required className="form-control w-100 rounded-0 border-top-0 border-left-0 border-right-0" component="input" type="text" autoComplete="off" />
         </div>
       </form>
     );
   }
}

export default RenameChannelForm;
