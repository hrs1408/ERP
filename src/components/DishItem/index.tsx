import React from 'react';
import { NumericFormat } from 'react-number-format';
import { Tooltip } from '@mui/material';

interface DishItemProps {
  name: string;
  weight: string;
  price: number;
  image: string;
  description?: string;
}

const DishItem: React.FC<DishItemProps> = ({
  name,
  price,
  weight,
  image,
  description,
}) => {
  return (
    <Tooltip title={description}>
      <div
        className={
          'flex h-fit cursor-pointer flex-col gap-2 rounded-xl border bg-white p-3 transition hover:shadow-lg'
        }
      >
        <img
          src={image}
          alt=""
          className={
            'max-h-[200px] min-h-[150px] w-full rounded-xl object-cover object-center'
          }
        />
        <div className={'flex flex-col gap-1'}>
          <p className={'truncate font-semibold'}>{name}</p>
          <p className={'truncate text-sm text-slate-600'}>{description}</p>
        </div>
        <div className={'flex flex-wrap items-end gap-1'}>
          <p className={'text-lg font-semibold text-primary'}>
            <NumericFormat
              value={price}
              thousandsGroupStyle="thousand"
              thousandSeparator=","
              suffix={' VND'}
              displayType={'text'}
            />
          </p>
          <p className={'text-md text-slate-600'}>/</p>
          <p className={'text-sm text-slate-600'}>{weight}</p>
        </div>
      </div>
    </Tooltip>
  );
};

export default DishItem;
