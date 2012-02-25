var Worktable = function() {
    this.init();
}

Worktable.prototype = {
    rows: [],
    container: null,
    init: function() {
        this.container = $('.worktable .rows');
        $('.controls .addRow').bind('click', Util.bind(this.createRow, this));
    },
    getRow:function(index) {
        if (this.rows[index] != undefined)
            return this.rows[index];
        else 
            return null;
    },   
    getRows: function() {
        return this.rows;
    },
    createRow: function(id) {
        var row = new Row(id);
        this.rows.push(row);
        $(this.container).append(row.container);
        return row;
    }
}