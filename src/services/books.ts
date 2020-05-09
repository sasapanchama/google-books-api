/* 
 * テキストの長さをを調整するための関数
 */
export const adjustTextLength = (text: string, count: number) => {
  if (text.length >= count) {
    const newText = `${text.slice(0, count)}...`;
    return newText;
  } else {
    return text;
  };
};