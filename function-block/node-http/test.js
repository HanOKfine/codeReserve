/*
 * @Author: your name
 * @Date: 2020-03-26 13:09:25
 * @LastEditTime: 2020-11-04 11:29:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /project/juejinxiaoce/test.js
 */
const fs = require('fs')
const path = require('path')
const os = require('os')
const readline = require('readline')
const Turndown = require('turndown')
const cheerio = require('cheerio')

const { getCookieArr, getCookieObj, sendPost, sendGet, sleep, rmfile, mkdir } = require('./utils')
const { USER_AGENT, URL_HOSTNAME, URL_LOGIN_EMAIL, URL_LOGIN_PHONENUMBER, URL_BOOK_HOSTNAME, URL_BOOK_LIST_SECTION, URL_BOOK_SECTION } = require('./constant')
const { callbackify } = require('util')


async function getContentHTML(num,callback) {
    let uid = Math.floor(Math.random()*150)
    console.log(uid);
    console.warn(`===getting book HTML content${num}`)
    const headers = {
        'User-Agent': USER_AGENT,
        'Connection': 'keep-alive'
    }
    const url = `https://m.imooc.com/read/83/article/${num}?action=2&distId=48ba3a&utm_source=fenxiao`
    // const url = `${URL_BOOK_SECTION}?uid=${this.userInfo.userId}&client_id=${this.userInfo.clientId}&token=${this.userInfo.token}&src=${this.src}&sectionId=${this.bookSectionList[this.count].sectionId}`
    console.log("url:",url)
    const response = await sendGet('m.imooc.com', url, headers)
    if (response.data.indexOf('login') < 50) {
        return
    }
    callback(response.data);
    let data = response.data
    await saveHTML(data)
    console.log(data);
    num++


}

async function toMarkdown(title, path) {
    return new Promise((resolve, reject) => {
      const turndownService = new Turndown({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced'
      })
      try {
        const markdown = turndownService.turndown(fs.readFileSync(path, { encoding: 'utf-8' }))
        resolve({ title, markdown }) 
      } catch (error) {
        reject(error)
      }
    })
  }

  
  async function saveMD(title, data) {
    return new Promise((resolve, reject) => {
      console.log('===writing markdown...')
      const output = path.resolve(__dirname, 'dist', 'md', `${this.count}.${title}.md`)
      fs.writeFile(output, data, { encoding: 'utf-8' }, err => {
        err && reject(err)
        console.log('===write markdown file success')
        resolve()
      })
    })
  }




function saveHTML(d) {
    return new Promise((resolve, reject) => {
        console.log('===writing html...')
        const $ = cheerio.load(d)
        const firstTitle = $('.course-entry').find('h3').text()
        let subTitle = d.match(/<title>([\s\S]*?)<\/title>/)[1]
        subTitle = subTitle.replace(/\//gi,'-')
        const title = `${firstTitle}--${subTitle}`
        d = d.replace(/\/\/img/gi, 'https://img')
        d = d.replace(/"\/static\//gi, '"https://m.imooc.com/static/')

        const output = path.resolve(__dirname, 'dist', 'html', title + '.html')
        fs.writeFile(output, d, { encoding: 'utf-8' }, err => {
            err && reject(err)
            console.log('===write html file success')
            resolve({ title, output })
        })
    })
}

async function running() {
    let number =2310
    // 1852
    while (number < 3000) {
        
        await sleep(3000)
        // await getContentHTML(number)
        await xxd(number)
       


        number++
    }
}

async function copyToPWDDir(dirname) {
    mkdir(dirname)

    const output = path.resolve(__dirname, 'dist', 'md')
    
    const fileList = fs.readdirSync(output).filter(item => path.extname(item) === '.md')
    fileList.forEach(file => {
      fs.copyFileSync(path.join(output, file), path.resolve(process.env.PWD, dirname, file))   
    })
  }

  async function xxd(num) {
    rmfile('html')
    rmfile('md')
    const juejin = new Juejin()
    try {
    //   await getMetaData()
    //   await mainPage()
    //   await sleep()
    //   await login()
    //   await sleep()
    //   await getTargetBookSectionList()
  
      const dirname = 'md ' + + new Date()
  
      await getContentHTML(num , async d => {
        const { title, output } = await saveHTML(d)
        const { title: mdTitle, markdown: markdownData } = await toMarkdown(title, output)
        await saveMD(mdTitle, markdownData)
        copyToPWDDir(dirname)
      })
  
      setTimeout(() => {
        console.log(`${os.EOL}======${os.EOL}All Done...Enjoy.${os.EOL}======${os.EOL}`)
      }, 200)
  
    } catch (error) {
      console.log(error) 
    }
  }


running()