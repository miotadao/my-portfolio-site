import React from 'react'
import { Link as Scroll } from 'react-scroll';

const Header = (props) => {
  const items = [
    {text: '自己紹介', id: props.ids[0]},
    {text: '作品一覧', id: props.ids[1]},
    {text: '技術一覧', id: props.ids[2]},
    {text: 'お問い合わせ', id: props.ids[3]},
  ];

  return (
    <div className='head-belt'>
      <h2><Scroll to='tadao'smooth={true} duration={600}>mio</Scroll>
      </h2>
      <ul className='head-ul'>
        {items.map((item, index) => {
          return <li key={index}><Scroll to={item.id} smooth={true} duration={600} offset={-100}>{item.text}</Scroll></li>
        })}
      </ul>
    </div>
  )
}

export default Header
