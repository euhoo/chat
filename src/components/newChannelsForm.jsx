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
     const { handleSubmit, submitting } = this.props;
     return (
       <form className="form-inline " onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="form-group mx-3 w-100">
           <Field
             placeholder="New channel"
             name="text"
             required
             className="form-control rounded-0 border-top-0 border-left-0 border-right-0"
             component="input"
             type="text"
             autoComplete="off"
             disable={`"${submitting}"`}
           />
         </div>
       </form>
     );
   }
}

export default NewChannelsForm;
