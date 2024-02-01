import React from 'react'

const Works = (props) => {
  const items = [
    {
      title: 'タイピングゲーム',                        
      img: 'typing.png',                                          
      text: '　初めて自作したゲームです。cssでのデザインは最小限にしてJavaScriptで何か簡単なゲームを作りたいと思い作ってみました。ミスタイプした回数とタイムが最後に出るようにしました。ミスタイプをした際には警告音が鳴るようにしてユーザーがミスタイプしたことを直感的に理解できるようにしました。',                                           
      sourceCode: 'https://github.com/miotadao/typing-game',                                        
      url: 'https://miotadao.github.io/typing-game/',    
      languageImgs: [
        'icons8-html-48.png',
        'icons8-css-48.png',
        'icons8-javascript-48.png',
      ],
      isConfidence: false
    },
    {
      title: '漢字読み仮名ゲーム',
      img: 'kanji.png',
      text: 'JavaScriptの「オブジェクト」と「配列」を使って何か作ってみたいなと思い作りました。こだわった点は問題の漢字・空白・ヒント・正解をオブジェクトでまとめて管理したことです。いくつか簡単な漢字が出題され読み仮名を回答するクイズゲームです。正解すれば正解音が鳴り不正解だったら犬の鳴き声が鳴ります。最後に正解した問題数が出題されます。',
      sourceCode: 'https://github.com/miotadao/kanji-quiz',
      url: 'https://miotadao.github.io/kanji-quiz/',
      languageImgs: [
        'icons8-html-48.png',
        'icons8-css-48.png',
        'icons8-javascript-48.png',
      ],
      isConfidence: false
    },
    {
      title: '在庫管理アプリ',
      img: 'stockIcon.png',
      text: '　在庫リストのページに商品の名前と数量を入力するとリスト化されていきます。リストの「-1」ボタンを押すと残数が減っていきます。残数がゼロになると自動的に在庫のリストから削除されます。「カート」ボタンを押すと買い物リストに追加されます。買い物リストの「✔」ボタンを押すと商品名に取り消し線が付き購入済みとなります。最後に「全削除」ボタンで購入済みの商品をまとめて削除します。アプリを一度閉じても内容が保存されるようにローカルストレージにリストの内容を保存されるようになっています。',
      sourceCode: 'https://github.com/miotadao/stock-manager',
      url: 'https://miotadao.github.io/stock-manager/',
      languageImgs: [
        'icons8-html-48.png',
        'icons8-css-48.png',
        'icons8-javascript-48.png',
        'icons8-react-native-48.png',
      ],
      isConfidence: false
    },
    {
      title: '自動計算アプリ',
      img: 'calculationIcon.png',
      text: '　大学の授業で証券のリターンを求める計算がいくつかあったのですがどれも自力で解くのは大変だったため自動で計算されるアプリがあれば便利と思い作りました。実際に先生にシンプルで使いやすいと言ってもらい授業内で紹介されました。ほかの生徒さんにも使ってもらいました。スマホでもパソコンでも使えます。後々修正点が出ても直しやすいように重複する処理は親コンポーネントにまとめました。一番の自信作です。',
      sourceCode: 'https://github.com/miotadao/calculation2/tree/main',
      url: 'https://miotadao.github.io/calculation2/',
      languageImgs: [
        'icons8-html-48.png',
        'icons8-css-48.png',
        'icons8-javascript-48.png',
        'icons8-react-native-48.png',
      ],
      isConfidence: true
    },
  ];
  return (
    <div className='container works' id={props.ids[1]}>
      <h2>作品一覧</h2>
      <ul className='works-ul'>
        {items.map((item, index) => {
          return <li key={index}>
            <h3>{item.title} <span className={item.isConfidence ? "confidence" : "hide"}>自信作！</span></h3>
            <a href={item.url}>
              <img className='page-icons' src={item.img} alt="" />
            </a>
            <a href={item.sourceCode}>ソースコード➜</a>
            <h4>説明</h4>
            <p className='explanation'>{item.text}</p>
            <ul className='languages'>
              {item.languageImgs.map((languageImg, index) => {
                return <li key={index}><img src={languageImg} alt="" /></li>
              })}
            </ul>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Works
