import React from 'react';

interface TableItemProps {
  table: string;
  handleClickTable?: () => void;
  statusTable?: 'empty' | 'notEmpty' | 'reserved';
}

const TableItem: React.FC<TableItemProps> = ({ table, handleClickTable }) => {
  return (
    <button
      className={
        'h-[180px] w-full cursor-pointer rounded-xl border hover:border-primary hover:bg-blue-50 hover:text-orange-500'
      }
      onClick={handleClickTable}
    >
      <div className={'flex flex-col items-center justify-center gap-4'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="87"
          height="61"
          viewBox="0 0 67 41"
          fill="none"
        >
          <rect
            opacity="0.6"
            x="4.5"
            y="4.5"
            width="58"
            height="32"
            rx="7"
            stroke="#000000"
            strokeWidth="2"
          />
          <path
            opacity="0.25"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 0.5C11.3954 0.5 10.5 1.39543 10.5 2.5H30.5C30.5 1.39543 29.6046 0.5 28.5 0.5H12.5ZM30.5 38.5H10.5C10.5 39.6046 11.3954 40.5 12.5 40.5H28.5C29.6046 40.5 30.5 39.6046 30.5 38.5ZM34.5 2.5C34.5 1.39543 35.3954 0.5 36.5 0.5H52.5C53.6046 0.5 54.5 1.39543 54.5 2.5H34.5ZM54.5 38.5H34.5C34.5 39.6046 35.3954 40.5 36.5 40.5H52.5C53.6046 40.5 54.5 39.6046 54.5 38.5ZM0.5 11.5C0.5 10.3954 1.39543 9.5 2.5 9.5V29.5C1.39543 29.5 0.5 28.6046 0.5 27.5V11.5ZM66.5 11.5C66.5 10.3954 65.6046 9.5 64.5 9.5V29.5C65.6046 29.5 66.5 28.6046 66.5 27.5V11.5Z"
            fill="#000000"
          />
        </svg>
        <p className={'font-semibold text-black'}>{table}</p>
      </div>
    </button>
  );
};

export default TableItem;
