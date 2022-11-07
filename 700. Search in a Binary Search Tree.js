var searchBST = function(root, val) {
    if(root==null||root.val==val){
        return root
    } else {
        return searchBST(root.left, val) || searchBST(root.right, val)
    }
    
};

//shaved: 
searchBST = (root, val) => { if(root==null||root.val==val){ return root} else {return searchBST(root.left, val) || searchBST(root.right, val)}}