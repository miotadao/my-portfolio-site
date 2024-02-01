import React from 'react'

const Technology = (props) => {
  const items = [
    {
      title: "HTML",
      img: "icons8-html-480.png",
      text: "Progate・ドットインストール・YouTube・参考書で勉強。参考書やネットで調べながら使える。",
    },
    {
      title: "CSS",
      img: "icons8-css-480.png",
      text: "Progate・ドットインストール・YouTube・参考書で勉強。参考書やネットで調べながら使える。",
    },
    {
      title: "Javascript",
      img: "icons8-javascript-480.png",
      text: "ドットインストール・YouTube・参考書で勉強。参考書やネットで調べながら使える。"
    },
    {
      title: "React",
      img: "icons8-react-native-480.png",
      text: "ドットインストール・YouTubeで勉強。参考書やネットで調べながら使える。簡単なアプリやサイトを作成する事が出来る。",
    },
  ];
  return (
    <div className='container' id={props.ids[2]}>
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
