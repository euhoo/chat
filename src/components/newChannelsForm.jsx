import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import appContext from '../utils/appContext';
import * as actions from '../actions';

const mapStateToProps = () => ({});

const actionCreators = {
  addChannelAction: actions.addChannelAction,
};

class NewChannelsForm extends React.Component {
  static contextType = appContext;

   handleSubmit = (value) => {
     const { queries: { addChannel } } = this.context;
     const { reset } = this.props;
     const data = {
       attributes: {
         name: value.text,
       },
     };
     addChannel(data);
     reset();
   }

   render() {
     const { handleSubmit } = this.props;
     return (
       <form className="form-inline" onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="form-group mx-3">
           <Field name="text" required component="input" type="text" />
         </div>
         <input type="submit" className="btn btn-outline-secondary" value="Отправить" />
       </form>
     );
   }
}

const ConnectedNewChannelsForm = connect(mapStateToProps, actionCreators)(NewChannelsForm);
export default reduxForm({
  form: 'NewChannelsForm',
})(ConnectedNewChannelsForm);
