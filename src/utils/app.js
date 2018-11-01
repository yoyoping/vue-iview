import store from '../store'
let util = {}
util.openNewPage = function (vm, name, argu, query) {
  let pageOpenedList = vm.$store.state.app.pageOpenedList
  let openedPageLen = pageOpenedList.length
  let i = 0
  let tagHasOpened = false
  while (i < openedPageLen) {
    if (name === pageOpenedList[i].name) { // 页面已经打开
      vm.$store.commit('pageOpenedList', {
        index: i,
        argu: argu,
        query: query
      })
      tagHasOpened = true
      break
    }
    i++
  }
  if (!tagHasOpened) {
    let tag = vm.$store.state.app.tagsList.filter((item) => {
      if (item.children) {
        return name === item.children[0].name
      } else {
        return name === item.name
      }
    })
    tag = tag[0]
    if (tag) {
      tag = tag.children ? tag.children[0] : tag
      if (argu) {
        tag.argu = argu
      }
      if (query) {
        tag.query = query
      }
      vm.$store.commit('increateTag', tag)
    }
  }
  vm.$store.commit('setCurrentPageName', name)
}

util.debounce = function (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 函数防抖
 * 使用需要在全局new debounce()
 */
util.debounce2 = function () {
  let timeout
  return function (func, wait) {
    let context = this // 传给目标函数
    clearTimeout(timeout)
    timeout = setTimeout(
      () => { func.apply(context, arguments) }, wait)
  }
}

// 函数节流
util.throttle = function () {
  let flags = true // 是否首次调用
  return function (fn, time) {
    let _fn = fn // 保存需要被延迟的函数引用
    if (flags) {
      _fn()
      flags = false
      setTimeout(function () { // 延迟执行
        flags = true
      }, time)
    }
  }
}

util.formatDate = function (date, type) {
  date = new Date(date)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  if (type === 1) {
    return y + '-' + m + '-' + d
  } else if (type === 2) {
    return h + ':' + minute + ':' + second
  } else if (type === 9) {
    return m + '月' + d + '日'
  } else {
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  }
}

// 验证当前所有权限
util.isAuth = (name) => {
  const authArr = store.getters.userInfo.permissions.map(item => {
    return item.name
  })
  return authArr.includes(name)
}
// 取出ocalStorage的userInfo对应的key值
util.getUserInfo = function (key) {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  for (let i in userInfo) {
    if (i === key) {
      return userInfo[i]
    }
  }
  return 'Nothing'
}

/**
 * deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
const isType = (obj, type) => {
  if (typeof obj !== 'object') return false
  const typeString = Object.prototype.toString.call(obj)
  let flag
  switch (type) {
    case 'Array':
      flag = typeString === '[object Array]'
      break
    case 'Date':
      flag = typeString === '[object Date]'
      break
    case 'RegExp':
      flag = typeString === '[object RegExp]'
      break
    default:
      flag = false
  }
  return flag
}

const getRegExp = re => {
  var flags = ''
  if (re.global) flags += 'g'
  if (re.ignoreCase) flags += 'i'
  if (re.multiline) flags += 'm'
  return flags
}

util.clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = []
  const children = []

  const _clone = parent => {
    if (parent === null) return null
    if (typeof parent !== 'object') return parent

    let child, proto

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = []
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利用Object.create切断原型链
      child = Object.create(proto)
    }

    // 处理循环引用
    const index = parents.indexOf(parent)

    if (index !== -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }

    return child
  }
  return _clone(parent)
}

export default util
