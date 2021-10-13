const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.treeNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.treeNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    const newNode = new Node(data);
    if (this.treeNode === null) this.treeNode = newNode;
    else this.insertNode(this.treeNode, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if(node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }

    else {
      if(node.right === null)
        node.right = newNode;
      else this.insertNode(node.right,newNode);
    }
}

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return this.find(data) ? true : false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    return this.search(this.treeNode, data);
  }

  search(node, data) {
    if(node === null) return null;
    else if(data < node.data) return this.search(node.left, data);
    else if(data > node.data) return this.search(node.right, data);
    else return node;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.treeNode = this.removeNode(this.treeNode, data);
  }

  removeNode(node, key) {
    if (node === null) return null;

    else if(key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    else if(key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if(node.left === null) {
        node = node.right;
        return node;
      }
         
      else if(node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;
 
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if(node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    let node = this.treeNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    let node = this.treeNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}