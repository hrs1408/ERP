import './modal_order.scss';
import { Badge, Divider, IconButton, Modal } from '@mui/material';
import React, { useEffect } from 'react';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineRestaurantMenu, MdPayment, MdSave } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';
import { GoSearch } from 'react-icons/go';
import { FiFilter } from 'react-icons/fi';
import MenuOrder from '@/components/MenuOrder';
import { BsGrid3X3 } from 'react-icons/bs';

interface ModalOrderProps {
  open: boolean;
  handleClose: () => void;
  tableId: string;
}

const ModalOrder: React.FC<ModalOrderProps> = ({
  open,
  handleClose,
  tableId,
}) => {
  const [hide, setHide] = React.useState(false);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setHide(true);
    }
  }, []);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={'modal-order'} id={'modal'}>
        <IconButton
          className={'close-btn'}
          onClick={() => {
            handleClose();
            setHide(true);
          }}
        >
          <AiOutlineClose />
        </IconButton>
        <div className={'main-content'}>
          <div className={'left-content'}>
            <div className="search-bar w-[85%] xl:w-full">
              <input
                type="text"
                placeholder={'Tìm kiếm món ăn'}
                className={'input-search'}
              />
              <button className={'btn-search'}>
                <GoSearch size={24} />
              </button>
              <button className={'btn-search'}>
                <FiFilter size={24} />
              </button>
            </div>
            <div className={'menu-container'}>
              <MenuOrder />
            </div>
            <button
              onClick={() => setHide(!hide)}
              className={
                'fixed bottom-6 right-6 flex items-center justify-center rounded-full border border-primary bg-white p-4 text-primary'
              }
            >
              <Badge badgeContent={10} color={'error'}>
                <AiOutlineShoppingCart size={24} />
              </Badge>
            </button>
          </div>
          <div className={`right-content ${hide ? 'hide' : 'show'}`}>
            <div className={'table-number'}>
              <p>Bàn #{tableId}</p>
            </div>
            <div className={'order-container'}>
              {[...Array(10)].map((_, index) => (
                <DishItemOrder />
              ))}
            </div>
            <div className={'invoice'}>
              <div className={'total'}>
                <p>Tạm tính</p>
                <NumericFormat
                  value={490000}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  suffix={' VND'}
                  displayType={'text'}
                />
              </div>
              <div className={'total'}>
                <p>Giảm giá</p>
                <NumericFormat
                  value={0}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  suffix={' VND'}
                  displayType={'text'}
                />
              </div>
              <div className={'total'}>
                <p>Thuế</p>
                <NumericFormat
                  value={0}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  suffix={' VND'}
                  displayType={'text'}
                />
              </div>
              <Divider />
              <div className={'total text-lg font-semibold'}>
                <p>Tổng cộng</p>
                <NumericFormat
                  value={490000}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  suffix={' VND'}
                  displayType={'text'}
                />
              </div>
              <div className={'buttons'}>
                <ButtonModalOrder
                  name={'Thanh Toán'}
                  icon={<MdPayment size={20} />}
                  bgColor={'bg-[#1795A8]'}
                />
                <ButtonModalOrder
                  name={'Gửi bếp'}
                  icon={<MdOutlineRestaurantMenu size={20} />}
                  bgColor={'bg-[#24AFC1]'}
                />
                <ButtonModalOrder
                  name={'Lưu lại'}
                  icon={<MdSave size={20} />}
                  bgColor={'bg-secondary'}
                />
              </div>
            </div>
            <button
              onClick={() => setHide(!hide)}
              className={`fixed bottom-6 right-6 flex items-center justify-center rounded-full border border-primary bg-white p-4 text-primary ${
                hide ? 'hidden' : 'fixed'
              }`}
            >
              <BsGrid3X3 size={24} />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

type ButtonModalOrderProps = {
  handleClickOpen?: () => void;
  bgColor?: string;
  name?: string;
  icon?: React.ReactNode;
};
const ButtonModalOrder: React.FC<ButtonModalOrderProps> = ({
  handleClickOpen,
  bgColor,
  name,
  icon,
}) => {
  return (
    <button
      onClick={handleClickOpen}
      className={`w-full rounded px-4 py-2 text-white shadow transition hover:opacity-80 ${
        bgColor ? bgColor : 'bg-primary'
      }`}
    >
      <div className={'flex items-center justify-center gap-2'}>
        {icon}
        {name}
      </div>
    </button>
  );
};

type DishItemOrderProps = {
  name?: string;
  image?: string;
  price?: number;
};
const DishItemOrder: React.FC<DishItemOrderProps> = ({
  name,
  image,
  price,
}) => {
  const [count, setCount] = React.useState(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };
  return (
    <div className={'flex w-full gap-2'}>
      <img
        src="https://cachlamheo.com/wp-content/uploads/2016/11/hamburger-thit-heo-nuong.jpg"
        alt=""
        className={
          'h-[70px] w-[70px] rounded rounded border object-cover object-center'
        }
      />
      <div className={'flex w-full flex-col justify-between pr-2'}>
        <p className={'text-md font-semibold line-clamp-2'}>Hamburger</p>
        <div className={'flex items-center justify-between'}>
          <NumericFormat
            value={49000}
            thousandsGroupStyle="thousand"
            thousandSeparator=","
            suffix={' VND'}
            displayType={'text'}
            className={'text-md font-semibold text-primary'}
          />
          <div className={'flex gap-2'}>
            <button
              onClick={handleDecrease}
              disabled={count === 1}
              className={
                'flex h-5 w-5 items-center justify-center rounded bg-primary text-white disabled:opacity-50'
              }
            >
              -
            </button>
            <p className={'text-md w-[30px] text-center font-semibold'}>
              {count}
            </p>
            <button
              onClick={handleIncrease}
              className={
                'flex h-5 w-5 items-center justify-center rounded bg-primary text-white'
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalOrder;
