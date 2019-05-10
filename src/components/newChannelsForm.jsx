import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';
import appContext from '../utils/appContext';
import { addChannelAction } from '../actions';

const mapStateToProps = () => ({});

const actionCreators = {
  addChannelAction,
};

@connect(mapStateToProps, actionCreators)
@withTranslation()
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
           <Field name="text" required component="input" type="text" value="dfd" />
         </div>
       </form>
     );
   }
}

export default reduxForm({
  form: 'NewChannelsForm',
})(NewChannelsForm);
