import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import appContext from '../utils/appContext';
import { addChannelAction } from '../actions';

const mapStateToProps = () => ({});

@connect(mapStateToProps, { addChannelAction })
@reduxForm({ form: 'NewChannelsForm' })
class NewChannelsForm extends React.Component {
  static contextType = appContext;

   handleSubmit = (value) => {
     const { queries } = this.context;
     const { addChannel } = queries;
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
       <form className="form-inline " onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="form-group mx-3">
           <Field placeholder="new channel" name="text" required component="input" type="text" autoComplete="off" />
         </div>
       </form>
     );
   }
}

export default NewChannelsForm;
