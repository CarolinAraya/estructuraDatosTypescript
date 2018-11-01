export class TreeNode {
  content: string;
  children?: TreeNode[];
}

export const findAll = (initail: string, tree: TreeNode): string[] => {
  const name = tree.content;
  const result = [];
  if (name.toLowerCase().indexOf(initail.toLowerCase()) === 0) {
    result.push(name);
  }
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];

      findAll(initail, node).forEach(x => result.push(x));
    }
  }
  return result;
}

export const tree: TreeNode = {
  content: 'Nieves',
  children: [
    {
      content: 'Liliana',
      children: [
        {
          content: 'Carolina',
        },
        {
          content: 'Camila',
        },
        {
          content: 'Ursula',
        },
      ]
    },
    {
      content: 'Maria',
      children: [
        {
          content: 'Beto',
        },
        {
          content: 'Eli',
        },
        {
          content: 'Teo',
        },
      ]
    },
    {
      content: 'Pati',
      children: [
        {
          content: 'Mauricio',
        },
      ]
    },
  ]
}
