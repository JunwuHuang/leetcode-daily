function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var t = new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3)));

// var inorderTraversal = function (root) {
//   const res = [];
//   const inorder = (root) => {
//     if (!root) {
//       return;
//     }
//     inorder(root.left);
//     res.push(root.val);
//     inorder(root.right);
//   };
//   inorder(root);
//   return res;
// };

// var inorderTraversal = function (root) {
//   const res = [];
//   const stk = [];
//   while (root || stk.length) {
//     while (root) {
//       stk.push(root);
//       root = root.left;
//     }
//     root = stk.pop();
//     res.push(root.val);
//     root = root.right;
//   }
//   return res;
// };

var inorderTraversal = function(root) {
  const res = [];
  let predecessor = null;

  while (root) {
      if (root.left) {
          // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
          predecessor = root.left;
          while (predecessor.right && predecessor.right !== root) {
              predecessor = predecessor.right;
          }

          // 让 predecessor 的右指针指向 root，继续遍历左子树
          if (!predecessor.right) {
              predecessor.right = root;
              root = root.left;
          }
          // 说明左子树已经访问完了，我们需要断开链接
          else {
              res.push(root.val);
              predecessor.right = null;
              root = root.right;
          }
      }
      // 如果没有左孩子，则直接访问右孩子
      else {
          res.push(root.val);
          root = root.right;
      }
  }

  return res;
};

var ret = inorderTraversal(t);

console.log(ret);
