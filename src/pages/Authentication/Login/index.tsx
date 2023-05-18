import React from 'react';
import './login.scss';
import { TextField } from '@mui/material';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiUser3Line } from 'react-icons/ri';
import { RxLockClosed } from 'react-icons/rx';

const Login = () => {
  return (
    <div className={'login-screen'}>
      <div className={'circle'}></div>
      <div className={'circle'}></div>
      <div className={'circle'}></div>
      <div className={'polygon'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#EC9476"
            d="M5.8,0.8C0.9,11.9,-14.4,14.5,-17.1,4.7C-19.7,-5.1,-9.9,-27.3,-2.3,-28.6C5.4,-29.9,10.7,-10.3,5.8,0.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={'polygon'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F4D169"
            d="M11.3,1.5C2.5,21.8,-25.2,26.1,-30.2,8.1C-35.3,-9.9,-17.6,-50.4,-3.8,-52.6C10,-54.8,20.1,-18.7,11.3,1.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={'polygon'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#5E8CDB"
            d="M62.1,-26.7C64.9,-11.5,40.9,5.9,23.7,14C6.5,22.1,-3.9,20.9,-9.7,16.1C-15.5,11.2,-16.6,2.7,-14.3,-11.9C-11.9,-26.6,-5.9,-47.4,11.8,-51.3C29.6,-55.1,59.3,-42,62.1,-26.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={'polygon'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#DA5780"
            d="M31.9,-6.4C41.1,18.1,48.3,47.2,38.7,54.4C29.2,61.6,3,46.8,-18.8,30.1C-40.5,13.3,-57.6,-5.5,-53.7,-22.6C-49.9,-39.7,-24.9,-55,-6.8,-52.8C11.3,-50.6,22.6,-30.8,31.9,-6.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={'polygon'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#5E8CDB"
            d="M46.1,-14.3C52.5,5,45.7,29.2,31.3,38.7C16.8,48.1,-5.2,42.8,-21.1,30.8C-37.1,18.8,-47,0.1,-42.4,-16.4C-37.9,-32.9,-19,-47.4,0.4,-47.6C19.8,-47.7,39.6,-33.5,46.1,-14.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={'polygon'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F4D169"
            d="M15.2,8.3C7.3,22.4,-20,24.8,-25.7,11.9C-31.5,-1,-15.8,-29.2,-2.1,-30.4C11.5,-31.6,23,-5.8,15.2,8.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="login-form">
        <div className="login-form-left ">
          <img src="/images/login/vector.png" alt="" />
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="login-form-right">
          <div className="logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="title-login">
            <p className={'main-title'}>POSVN</p>
            <p className={'sub-title'}>
              Đăng nhập để tiếp tục sử dụng hệ thống
            </p>
          </div>
          <form action="" className={'form'}>
            <div className={'flex items-end gap-2'}>
              <RiUser3Line size={30} />
              <TextField
                id="outlined-basic"
                label="Tên đăng nhập"
                variant="standard"
                type={'text'}
                className={'input'}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1795A8',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#1795A8',
                  },
                }}
              />
            </div>
            <div className={'flex items-end gap-2'}>
              <RxLockClosed size={30} />
              <TextField
                id="outlined-basic"
                label="Mật khẩu"
                variant="standard"
                type={'password'}
                className={'input'}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1795A8',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#1795A8',
                  },
                }}
              />
            </div>
            <div className={'flex items-center justify-between'}>
              <div className="remember-me flex gap-2">
                <input type="checkbox" name="" id="rememberMe" />
                <label
                  htmlFor={'rememberMe'}
                  className={'cursor-pointer text-sm text-gray-500'}
                >
                  Nhớ mật khẩu
                </label>
              </div>
              <a
                href="#"
                className={
                  'forgot-password transition-all hover:text-primary-dark'
                }
              >
                Quên mật khẩu?
              </a>
            </div>
            <div className="btn-login">
              <button className={'btn'}>Đăng nhập</button>
            </div>
          </form>
          <div className="social-login">
            <p className={'text-gray-500'}>Hoặc đăng nhập bằng</p>
            <div className="social-login-btn">
              <button className={'btn'}>
                <FcGoogle size={20} />
                <span className={'text'}>Đăng nhập bằng Google</span>
              </button>
              <button className={'btn'}>
                <FaFacebookF size={20} className={'text-[#3B5998]'} />
                <span className={'text'}>Đăng nhập bằng Facebook</span>
              </button>
            </div>
          </div>
          <div className="register">
            <p className={'text-gray-500'}>
              Bạn chưa có tài khoản?{' '}
              <a href="#" className={'register-link'}>
                Đăng ký
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
