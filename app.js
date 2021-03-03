window.onload=function(){
    var list = document.getElementById("shuffleAndSort");

    function shuffle(items) {
        var cached = items.slice(0), temp, i = cached.length, rand;
        while(--i) {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    function shuffleNodes() {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while(i < nodes.length)
        {
            list.appendChild(nodes[i]);
            ++i;
        }
    } 
    document.getElementById("shuffle").onclick = shuffleNodes;

    function sortNodes() {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes.sort(function(a, b) {
            return a.firstChild.nodeValue - b.firstChild.nodeValue
        })
        
        //Empty the list and refill it with those in the correct order at the nodes
        while (list.lastChild) {
            list.removeChild(list.lastChild);
        }
        var docFrag = document.createDocumentFragment();
        for (i = 0, l = nodes.length; i < l; i++) {
            docFrag.appendChild(nodes[i]);
        }
        list.appendChild(docFrag);
    } 
    document.getElementById("sorting").onclick = sortNodes;
} 