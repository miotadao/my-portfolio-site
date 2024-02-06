import { useSwipeable } from "react-swipeable";
import React, { useRef, useState } from 'react';
import typing from "../images/typing.png"
import kanji from "../images/kanji.png"
import stockIcon from "../images/stockIcon.png"
import calculationIcon from "../images/calculationIcon.png"
import html48 from "../images/html48.png"
import css48 from "../images/css48.png"
import javascript48 from "../images/javascript48.png"
import reactNative48 from "../images/react-native48.png"



const Works = (props) => {
  const [items, setItems] = useState([
    {
      title: 'タイピングゲーム',
      img: typing,
      text: '　初めて自作したゲームです。cssでのデザインは最小限にしてJavaScriptで何か簡単なゲームを作りたいと思い作ってみました。ミスタイプした回数とタイムが最後に出るようにしました。ミスタイプをした際には警告音が鳴るようにしてユーザーがミスタイプしたことを直感的に理解できるようにしました。',
      sourceCode: 'https://github.com/miotadao/typing-game',
      url: 'https://miotadao.github.io/typing-game/',
      languageImgs: [
        html48,
        css48,
        javascript48,
      ],
      isConfidence: false,
      isCurrent: true,
      id: 0
    },
    {
      title: '漢字読み仮名ゲーム',
      img: kanji,
      text: 'JavaScriptの「オブジェクト」と「配列」を使って何か作ってみたいなと思い作りました。こだわった点は問題の漢字・空白・ヒント・正解をオブジェクトでまとめて管理したことです。いくつか簡単な漢字が出題され読み仮名を回答するクイズゲームです。正解すれば正解音が鳴り不正解だったら犬の鳴き声が鳴ります。最後に正解した問題数が出題されます。',
      sourceCode: 'https://github.com/miotadao/kanji-quiz',
      url: 'https://miotadao.github.io/kanji-quiz/',
      languageImgs: [
        html48,
        css48,
        javascript48,
      ],
      isConfidence: false,
      isCurrent: false,
      id: 1
    },
    {
      title: '在庫管理アプリ',
      img: stockIcon,
      text: '　在庫リストのページに商品の名前と数量を入力するとリスト化されていきます。リストの「-1」ボタンを押すと残数が減ります。残数がゼロになるとリストから削除されます。「カート」ボタンを押すと買い物リストに追加されます。買い物リストの「✔」ボタンを押すと取り消し線が付き購入済みとなります。最後に「全削除」ボタンで購入済みの商品をまとめて削除します。アプリを一度閉じても内容が保存されるようにローカルストレージにリストの内容を保存されるようになっています。',
      sourceCode: 'https://github.com/miotadao/stock-manager',
      url: 'https://miotadao.github.io/stock-manager/',
      languageImgs: [
        html48,
        css48,
        javascript48,
        reactNative48,
      ],
      isConfidence: false,
      isCurrent: false,
      id: 2
    },
    {
      title: '自動計算アプリ',
      img: calculationIcon,
      text: '　大学の授業で証券のリターンを求める計算がいくつかあったのですがどれも自力で解くのは大変だったため自動で計算されるアプリがあれば便利と思い作りました。実際に先生にシンプルで使いやすいと言ってもらい授業内で紹介されました。ほかの生徒さんにも使ってもらいました。スマホでもパソコンでも使えます。後々修正点が出ても直しやすいように重複する処理は親コンポーネントにまとめました。一番の自信作です。',
      sourceCode: 'https://github.com/miotadao/calculation2/tree/main',
      url: 'https://miotadao.github.io/calculation2/',
      languageImgs: [
        html48,
        css48,
        javascript48,
        reactNative48,
      ],
      isConfidence: true,
      isCurrent: false,
      id: 3
    },
  ]);


  let [currentIndex, setCurrentIndex] = useState(0);
  let newCurrentIndex;
  let ulRef = useRef(null);
  let liRef = useRef(null);
  let slideWidth;

  const currentBtnHandler = (index) => {
    setItems(
      items.map((item) => {
        if (index === item.id) {
          return {
            ...item,
            isCurrent: true
          }
        }
        return {
          ...item,
          isCurrent: false
        };
      })
    );
    setCurrentIndex(index);
  }

  const handlers = useSwipeable({
    onSwiped: (event) => {
      if (props.width < 768) {
        slideWidth = liRef.current.offsetWidth;
        if (event.dir == "Left" && currentIndex < items.length - 1) {
          //左にスワイプしたときに発火するイベント
          // currentIndex++;
          // ulRef.current.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`; 
          newCurrentIndex = currentIndex + 1;
          ulRef.current.style.transform = `translateX(${-1 * slideWidth * newCurrentIndex}px)`;
          currentBtnHandler(newCurrentIndex);
        }
        if (event.dir == "Right" && currentIndex > 0) {
          //右にスワイプしたときに発火するイベント
          // currentIndex--;
          // ulRef.current.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
          newCurrentIndex = currentIndex - 1;
          ulRef.current.style.transform = `translateX(${-1 * slideWidth * newCurrentIndex}px)`
          currentBtnHandler(newCurrentIndex);
        }
      }
    },
  });

  const btnHandle = (index) => {
    slideWidth = liRef.current.offsetWidth;   //これがないと動かない
    newCurrentIndex = index;
    ulRef.current.style.transform = `translateX(${-1 * slideWidth * newCurrentIndex}px)`;
    currentBtnHandler(newCurrentIndex);
  }

  return (
    <div className='container works' id={props.ids[1]}>
      <h2 >作品一覧</h2>
      <div className='mobile-container' {...handlers}>
        <ul className='works-ul' ref={ulRef}>
          {items.map((item, index) => {
            return <li key={index} className='mobile-li' ref={liRef}>
              <h3>{item.title} <span className={item.isConfidence ? "confidence" : "hide"}>自信作！</span></h3>
              <div className="img-click">
                <span>⇩　クリック！ ⇩</span>
                <a href={item.url}>
                  <img className='page-icons' src={item.img} alt="" />
                </a>
              </div>
              <a href={item.sourceCode} className='sorce-code'>ソースコード➜</a>
              <h4>説明<span></span></h4>
              <p className='explanation'>{item.text}</p>
              <ul className="languages">
                {item.languageImgs.map((languageImg, index) => {
                  return <li key={index}><img src={languageImg} alt="" /></li>
                })}
              </ul>
            </li>
          })}
        </ul>
      </div>
      <ul className="slideBtns">
        {items.map((item, index) => {
          return <button key={index} onClick={() => btnHandle(index)} className={`li-btn ${item.isCurrent ? "current-btn" : ""}`}></button>
        })}
      </ul>

    </div>
  )
}

export default Works
