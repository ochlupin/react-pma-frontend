import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const ProjectForm = props => {
  // console.log("In ProjectForm, props are: ", props);
  const projectFormValues = props.projectFormValues;
  const handleSubmitProject = props.handleSubmitProject;
  const handleChangeProjectForm = props.handleChangeProjectForm;
  return (
    <div>
      <form onSubmit={handleSubmitProject}>
        <Button color="primary" variant="contained" size="large">
          Create a Project
        </Button>
        <br />
        <TextField
          id="standard-name"
          label="title"
          name="title"
          margin="normal"
          value={projectFormValues.title}
          onChange={handleChangeProjectForm}
        />
      </form>
    </div>
  );
};

export default ProjectForm;
