import { ElNotification } from "element-plus";
import type { EpPropMergeType } from "element-plus/es/utils/vue/props/types";
import { title } from "process";
/**
 *
 * @param msg 提示的内容
 * @param type 提示的类型
 */
function showToast(
  msg: string,
  type: EpPropMergeType<
    StringConstructor,
    "success" | "warning" | "info" | "error",
    unknown
  >,
  title: EpPropMergeType<
  StringConstructor,
  "success" | "warning" | "info" | "error",
  unknown
>
) {
    ElNotification({
    title,
    message: msg,
    type,
    duration:1500,
  });
}

function success(msg: string) {
  showToast(msg, "success","success");
}
function warning(msg: string) {
  showToast(msg, "warning","warning");
}
function info(msg: string) {
  showToast(msg, "info","info");
}
function error(msg: string) {
  showToast(msg, "error","error");
}

export { showToast, success, warning, info, error };




