const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {  
  constructor () {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data)
    if(!this.rootNode) this.rootNode= newNode;
    else this.addNote(this.rootNode, newNode)
  }
  addNote(parent, newNode) {
    if(newNode.data< parent.data) {
      if(!parent.left) parent.left=newNode
      else this.addNote(parent.left, newNode)
    }
    if(newNode.data> parent.data) {
      if(!parent.right) parent.right=newNode
      else this.addNote(parent.right, newNode)
    }
  }
  has(data) {
    if(this.find(data)) return true
    else return false
  }

  find(data, parent = this.rootNode) {
    if(!parent) return null
    else if(data=== parent.data) return parent;
    else {
      if(data<parent.data)  return this.find(data, parent.left)
      else if(data>parent.data) return this.find(data,parent.right)
    }
  }
  remove(data,parent=this.rootNode) {
    if(!parent) return null
    else if(data<parent.data) {
      parent.left = this.remove(data, parent.left)
      return parent
    }
    else if(data>parent.data) {
      parent.right =this.remove(data,parent.right)
      return parent
    }
    else {
      if(!parent.left && !parent.right) {
        parent = null;
        return parent
      }
      else if(!parent.left) {
        parent = parent.right
        return parent
      }
      else if(!parent.right) {
        parent = parent.left
        return parent
      }
      else {
        let minNode = this.min(parent.right);
        parent.data = minNode;
        parent.right= this.remove(minNode,parent.right);
        return parent
      }
    }
  }

  min(parent=this.rootNode) {
    while(parent.left) {
      parent=parent.left;
    }
    if(parent) return parent.data
    return null
  }

  max(parent=this.rootNode) {
    while(parent.right) {
      parent=parent.right;
    }
    console.log(parent)
    if(parent) return parent.data
    return null
  }
}

module.exports = {
  BinarySearchTree
};