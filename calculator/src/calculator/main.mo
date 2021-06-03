actor {

    var ans : Int =0;
    public func add(n1:Int,n2:Int) : async Int {
        ans := n1+n2;
        return n1+n2;
    };

    public func sub(n1:Int,n2:Int) :async Int {
        ans := n1-n2;
        return n1-n2;
    };
    public func get(): async Int {ans}
    };
