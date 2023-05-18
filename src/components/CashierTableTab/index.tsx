import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import TableItem from '@/components/TableItem';
import ModalOrder from '@/components/ModalOrder';

const CashierTableTab = () => {
  const [open, setOpen] = React.useState(false);
  const [tableId, setTableId] = React.useState('');
  const handleOpen = (id: string) => {
    setOpen(true);
    setTableId(id);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue={'all'}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Tất cả (32)"
          />
          <FormControlLabel
            value="used"
            control={<Radio />}
            label="Đang sử dụng (1)"
          />
          <FormControlLabel
            value="free"
            control={<Radio />}
            label="Còn trống (31)"
          />
        </RadioGroup>
      </FormControl>
      <div
        className={
          'grid h-[calc(100vh-310px)] w-full grid-cols-2 gap-2 overflow-y-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
        }
      >
        {[...Array(100)].map((_, index) => (
          <TableItem
            key={index}
            table={`Bàn ${index}`}
            handleClickTable={() => handleOpen(index.toString())}
          />
        ))}
        <ModalOrder open={open} handleClose={handleClose} tableId={tableId} />
      </div>
    </>
  );
};

export default CashierTableTab;
