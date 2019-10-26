const ITree = require('./ITree');
const Node = require('./Node');

function BsTree() {
    ITree.apply(this, arguments);

    this._root = null;
}

BsTree.prototype = Object.create(ITree.prototype);
BsTree.prototype.constructor = BsTree;

BsTree.prototype.add = function(value) {
    if (!value && value !== 0) {
        return;
    };

    this._root = addNode(this._root, value);
};

function addNode(node, value) {
    if (!node) {
        return new Node(value);
    } else if (value > node.value) {
       node.right = addNode(node.right, value);
    } else {
        node.left = addNode(node.left, value);
    }

    return node;
}

BsTree.prototype.toStringNode = function() {
    let str = '[';

    str += toStringNode(this._root);
    str += ']';

    return str;
} 
function toStringNode(node) {
    let str = '';

    if (!node) {
        return '';
    }

    str += toStringNode(node.left);
    node.left && (str += ', ');
    str += '${node.value}';
    node.right && (str += ', ');
    str += toStringNode(node.right);

    return str;
}

module.exports = BsTree;