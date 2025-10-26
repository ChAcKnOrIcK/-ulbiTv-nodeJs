const fs = require('fs')     // fs нужна для работы с файлами, удалять создовать паки и много другое.
const path = require('path') // забыл что такое Path

// console.log("start")

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('Папка создана')
// })

// console.log('end')

// ----------------------------------------------------------
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err)
//     throw err;
// })

fs.writeFile(path.resolve(__dirname, 'test.text'), 'Разный текст в файле', (err) => {
  if(err) {
    throw err;
  }
  console.log('Файл записан')
})

fs.appendFile(path.resolve(__dirname, 'text.text'), 'Поновой добавленный текст', (err) => {
  if(err) {
    throw err;
  }
  console.log('Файл записан')
})