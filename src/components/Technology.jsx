import React from 'react'
import html480 from "../images/html480.png"
import css480 from "../images/css480.png"
import javascript480 from "../images/javascript480.png"
import reactNative480 from "../images/react-native480.png"


const Technology = (props) => {
  const items = [
    {
      title: "HTML",
      img: html480,
      text: "Progate・ドットインストール・YouTube・参考書で勉強。参考書やネットで調べながら使える。",
    },
    {
      title: "CSS",
      img: css480,
      text: "Progate・ドットインストール・YouTube・参考書で勉強。参考書やネットで調べながら使える。",
    },
    {
      title: "Javascript",
      img: javascript480,
      text: "ドットインストール・YouTube・参考書で勉強。参考書やネットで調べながら使える。"
    },
    {
      title: "React",
      img: reactNative480,
      text: "ドットインストール・YouTubeで勉強。参考書やネットで調べながら使える。簡単なアプリやサイトを作成する事が出来る。",
    },
  ];
  return (
    <div className='container tec-container' id={props.ids[2]}>
      <h2>技術一覧</h2>
      <ul className='tech-ul'>
        {items.map((item, index) => {
          return <li key={index}>
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} />
            <p>{item.text}</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Technology
