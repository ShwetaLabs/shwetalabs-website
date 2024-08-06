import { useMediaQuery } from 'react-responsive';
const minWidthForDesktop = '800px';
export const isDesktop = () => {
    return useMediaQuery({ minWidth: minWidthForDesktop });
}

export const stripHTML = (htmlString: string) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');

    // Traverse the document and replace block elements with line breaks 
    const traverseAndReplace = (node : any) => {
        let text = '';
        node.childNodes.forEach((child : any) => {
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

    // Clean up extra line breaks
    return plainText.replace(/\n\s*\n/g, '\n').trim();
}
