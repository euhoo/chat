import React from 'react';
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
  renameChannelAction: actions.renameChannelAction,
};

class RenameChannelForm extends React.Component {
  static contextType = appContext;

   handleSubmit = (value) => {
     const { queries: { renameChannel } } = this.context;
     const { reset, currentChannelId } = this.props;
     const data = {
       id: currentChannelId,
       attributes: {
         name: value.text,
       },
     };
     renameChannel(data);
     reset();
   }

   render() {
     const { handleSubmit } = this.props;
     return (
       <form className="form-inline " onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="form-group mx-3">
           <Field name="text" required component="input" type="text" value="dfd" />
         </div>
       </form>
     );
   }
}

const ConnectedRenameChannelForm = connect(mapStateToProps, actionCreators)(RenameChannelForm);
export default reduxForm({
  form: 'RenameChannelForm',
})(ConnectedRenameChannelForm);
