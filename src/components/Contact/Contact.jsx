import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaPhone, FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted successfully!');
      })
      .catch((error) => {
        toast.error(`Failed to delete contact: ${error}`);
      });
    setDeleteDialogOpen(false);
  };

  const handleEdit = () => {
    if (editedName.trim() === '' || editedNumber.trim() === '') {
      toast.error('Name and number cannot be empty');
      return;
    }

    dispatch(updateContact({ 
      id, 
      data: { 
        name: editedName, 
        number: editedNumber 
      } 
    }))
      .unwrap()
      .then(() => {
        toast.success('Contact updated successfully!');
        setEditDialogOpen(false);
      })
      .catch((error) => {
        toast.error(`Failed to update contact: ${error}`);
      });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <div className={styles.field}>
          <FaUser className={styles.icon} />
          <p className={styles.text}>{name}</p>
        </div>
        <div className={styles.field}>
          <FaPhone className={styles.icon} />
          <p className={styles.text}>{number}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button 
          type="button" 
          className={styles.editBtn} 
          onClick={() => setEditDialogOpen(true)}
        >
          <FaEdit />
        </button>
        <button 
          type="button" 
          className={styles.deleteBtn} 
          onClick={() => setDeleteDialogOpen(true)}
        >
          Delete
        </button>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {name}? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Contact Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
      >
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="text"
            fullWidth
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;