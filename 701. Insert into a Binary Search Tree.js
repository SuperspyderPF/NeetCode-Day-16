insertIntoBST = (r, v) =>{
    var z=n=>{
        if(!n) return new TreeNode(v)
        if(v>n.val) n.right = z(n.right)
        else n.left = z(n.left)
        return n
    }
    return z(r)
   
};