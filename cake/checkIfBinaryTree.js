/** Cake solution */

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function (value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function (value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};






function isBinarySearchTree(treeRoot) {

    // start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    var nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({
        node: treeRoot,
        lowerBound: -Infinity,
        upperBound: Infinity
    });

    // depth-first traversal
    while (nodeAndBoundsStack.length) {
        var nodeAndBounds = nodeAndBoundsStack.pop();
        var node = nodeAndBounds.node,
            lowerBound = nodeAndBounds.lowerBound,
            upperBound = nodeAndBounds.upperBound;

        // if this node is invalid, we return false right away
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }

        if (node.left) {
            // this node must be less than the current node
            nodeAndBoundsStack.push({
                node: node.left,
                lowerBound: lowerBound,
                upperBound: node.value
            });

        }
        if (node.right) {
            // this node must be greater than the current node
            nodeAndBoundsStack.push({
                node: node.right,
                lowerBound: node.value,
                upperBound: upperBound
            });
        }
    }

    // if none of the nodes were invalid, return true
    // (at this point we have checked all nodes)
    return true;
}




/**
 * recursion solution
 * 
 * May go to stack overflow
 */

function isBinarySearchTree(treeRoot, lowerBound, upperBound) {

    lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
    upperBound = (typeof upperBound !== 'undefined') ? upperBound :  Infinity;

    if (!treeRoot) return true;

    if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
        return false;
    }

    return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) &&
           isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);

}


/**
 * My Solution : recursion
 * this is no the solution need to keep track of the lower and upperbound
 * will only work if tree is balanced :P 
 */


// function checkBinaryTress(node) {
//      let leftFlag = true , rightFlag = true;
//     // if(!node) return true;

//     if(node.left) {
//         if(node.value < node.left.value) {
//             return false ;
//         } else {
//             leftFlag && checkBinaryTress(node.left);
//         } 
//     }
//     if(node.right) {
//         if(node.value > node.right.value) {
//             return false ;
//         } else {
//             rightFlag && checkBinaryTress(node.right);
//         } 
//     }

//     return leftFlag && rightFlag ;
// }