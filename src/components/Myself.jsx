import React from 'react'
import mio from '../images/mio.jpg'

const Myself = (props) => {
  const items = [
    { title: '名前', info: '石川 未雄（いしかわ みお）' },
    { title: '年齢', info: '20歳' },
    { title: '大学', info: '関西大学　商学部　商学科' },
    { title: '資格', info: '英語検定２級・日商簿記２級' },
    { title: '趣味', info: '釣り・ギター・アニメ' },
  ];
  return (
    <div className='container myself-container' id={props.ids[0]}>
      <h2>自己紹介</h2>
      <div className='coment'>
        <img className='mio' src={mio} alt="石川未雄の写真" />
        <p className='myself-text'>
          こんにちは、石川未雄です。<br />
          文系大学生ですが将来エンジニアになりたい思い独学でプログラミングを勉強しています。<br />
          今年の目標はインターンシップに参加し自分に足りない事を明確にしそれを克服する事です。<br />
        </p>
      </div>
      <ul className='myself-ul'>
        {items.map((item, index) => {
          return <li key={index}>{item.title}：{item.info}</li>
        })}
      </ul>
    </div>
  )
}

export default Myself
