import { AiOutlineEye } from 'react-icons/ai';
import { BiCalendarAlt, BiCoin, BiDish, BiLineChart } from 'react-icons/bi';
import { TbFileInvoice, TbLogout, TbScreenShare } from 'react-icons/tb';
import { BsWindowStack } from 'react-icons/bs';
import { FaCashRegister } from 'react-icons/fa';
export const ACCOUNT_DROPDOWN = [
  {
    label: 'Nhà bếp',
    icon: <BiDish />,
  },
  {
    label: 'Lễ tân',
    icon: <FaCashRegister />,
  },
  {
    label: 'Danh sách đặt bàn',
    icon: <BiCalendarAlt />,
  },
  {
    label: 'Báo cáo cuối ngày',
    icon: <BiLineChart />,
  },
  {
    label: 'Chọn hóa đơn trả hàng',
    icon: <TbFileInvoice />,
  },
  {
    label: 'Lập phiếu thu',
    icon: <BiCoin />,
  },
  {
    label: 'Tùy chọn hiển thị',
    icon: <AiOutlineEye />,
  },
  {
    label: 'Quản lý',
    icon: <BsWindowStack />,
  },
  {
    label: 'Màn hình khác',
    icon: <TbScreenShare />,
  },
  {
    label: 'Đăng xuất',
    icon: <TbLogout />,
  },
];
