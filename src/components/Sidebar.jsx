import React from 'react'
import { Link as Scroll } from 'react-scroll';

const Sidebar = (props) => {

  const items = [
    { text: '自己紹介', id: props.ids[0] },
    { text: '作品一覧', id: props.ids[1] },
    { text: '技術一覧', id: props.ids[2] },
    { text: 'お問い合わせ', id: props.ids[3] },
  ];

  return (
    <div className={`sidebar ${props.isShow === true ? "sidebar-show" : ""}`}>
      <ul className='sidebar-ul'>
        {items.map((item, index) => {
          return <li key={index} className='sidebar-li'><Scroll to={item.id} smooth={true} duration={600} offset={-40}>{item.text}</Scroll></li>
        })}
      </ul>
    </div>

  )
}

export default Sidebar
