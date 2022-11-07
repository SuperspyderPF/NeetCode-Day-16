var increasingBST = function(root) {
    jz = new TreeNode();
    jzx = jz;
    welp(root);
    return jz.right;
    function welp(node){
        if(!node)
            return;
        welp(node.left);
        jzx.right = new TreeNode(node.val);
        jzx = jzx.right
        welp(node.right)
    }
    
};