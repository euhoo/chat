import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import appContext from '../utils/appContext';
import { renameChannelAction } from '../actions';

const mapStateToProps = ({ currentChannelId }) => {
  const props = {
    currentChannelId,
  };
  return props;
};

const actionCreators = {
  renameChannelAction,
};

@connect(mapStateToProps, actionCreators)
@withTranslation()
class RenameChannelForm extends React.Component {
  static contextType = appContext;

   handleSubmit = (value) => {
     const { queries } = this.context;
     const { renameChannel } = queries;
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

export default reduxForm({
  form: 'RenameChannelForm',
})(RenameChannelForm);
