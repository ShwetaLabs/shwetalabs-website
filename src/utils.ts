import { useMediaQuery } from 'react-responsive';
const minWidthForDesktop = '800px';
export const isDesktop = () => {
  return useMediaQuery({ minWidth: minWidthForDesktop });
};

const getText = (htmlString: string) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');

  // Traverse the document and replace block elements with line breaks
  const traverseAndReplace = (node: any) => {
    let text = '';
    node.childNodes.forEach((child: any) => {
      if (child.nodeType === Node.TEXT_NODE) {
        text += child.textContent;
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        if (['BR', 'DIV', 'P'].includes(child.tagName)) {
          text += '\n' + traverseAndReplace(child) + '\n';
        } else {
          text += traverseAndReplace(child);
        }
      }
    });
    return text;
  };

  const plainText = traverseAndReplace(doc.body);

  return plainText.replace(/\n\s*\n/g, '\n').trim();
};

export const parseHTML = (htmlString: string) => {
  const result = htmlString;
  const lines = result.split('\n');
  const paras = lines.slice(1);
  let ind = 0;
  while (ind < paras.length && paras[ind] == '') ind++;
  return [lines[0].slice(2, lines[0].length - 2), paras.slice(ind).join('\n')];
};

export const removeTitle = (htmlString: string) => {
  const text = getText(htmlString);
  const lines = text.split('\n');
  const index = htmlString.indexOf(lines[0]);

  return [
    lines[0],
    htmlString.slice(0, index) + htmlString.slice(index + lines[0].length),
  ];
};
