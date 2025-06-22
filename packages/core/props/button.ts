import { Design } from "../types";

interface ButtonProps {
  /** デザインテーマを選択 */
  design?: Design;
  /** ボタンのサイズ */
  size?: "small" | "medium" | "large";
  /** ボタンのモード */
  mode?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  /** カラーテーマ */
  color?:
    | "blue"
    | "red"
    | "green"
    | "yellow"
    | "purple"
    | "orange"
    | "pink"
    | "teal"
    | "gray"
    | "black"
    | "white";
  /** 角の丸み */
  rounded?: "none" | "small" | "medium" | "large" | "full";
  /** ボタンの種類 */
  type?: "button" | "submit" | "reset";
  /** 無効状態 */
  disabled?: boolean;
  /** 追加のCSSクラス */
  class?: string;
  /** 追加のスタイル */
  style?: string;
  /** ボタンのテキスト */
  label: string;
  /** クリックイベントハンドラー */
  onclick?: () => void;
}

export { ButtonProps };
