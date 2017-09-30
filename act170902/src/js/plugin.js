import {Local,common} from "./local"
import "./set"
const plugin = {}
plugin.install = function (Vue, options) {
  // 添加实例方法
  Vue.prototype.local = Local
  Vue.prototype.common = common
}
export default plugin