import React from 'react'
import { Link as Scroll } from 'react-scroll';

const Header = (props) => {
  const items = [
    { text: '自己紹介', id: props.ids[0] },
    { text: '作品一覧', id: props.ids[1] },
    { text: '技術一覧', id: props.ids[2] },
    { text: 'お問い合わせ', id: props.ids[3] },
  ];

  const handleShow = () => {
    props.setIsShow(true);
  }

  const handleClose = () => {
    props.setIsShow(false);
  }

  return (
    <div className='head-belt'>
      <div>
        <h2><Scroll to='tadao' smooth={true} duration={600}>mio</Scroll>
        </h2>
      </div>
      <ul className='head-ul'>
        {items.map((item, index) => {
          return <li key={index}><Scroll to={item.id} smooth={true} duration={600} offset={-100}>{item.text}</Scroll></li>
        })}
      </ul>
      <div className='top'>
        <button className={`hunburger ${props.isShow === true ? "hide" : ""}`} onClick={handleShow}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className={`close-btn ${props.isShow === true ? "" : "hide"}`} onClick={handleClose}>
          ✖
        </button>
      </div>
    </div>
  )
}

export default Header
