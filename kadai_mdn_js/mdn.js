const dataYear = () => {
  var item = new Date();  // 引数を指定しない
  console.log(item.getFullYear() + '年' + (item.getMonth() + 1) + '月' + item.getDate() + '日');  // getDate()を用いて日付を取得
}

dataYear();