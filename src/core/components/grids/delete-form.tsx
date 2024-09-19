'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { ENVIRONMENT } from '../../configs/environment';

import { useAppDispatch } from '@/lib/redux/hook';
import { list } from '@/lib/redux/features/grids/slice';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? 'pending...' : 'delete'}
    </Button>
  );
};

const DeleteForm = ({ id }) => {
  const dispatch = useAppDispatch();
  const onDelete = () => dispatch(list());

  function deleteGrid() {
    console.log(id);
    fetch(`${ENVIRONMENT.apiURL}/grid/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => {
      onDelete();
    });
  }
  return (
    <form action={deleteGrid}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
