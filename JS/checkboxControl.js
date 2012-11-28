jQuery(function($){
var form = $('form');
form.find(':checkbox').on('click', function(){
    var self = $(this), stat = self.prop('checked');
    //切换“全部”复选框时，其他复选框跟着全部改变状态
    if(self.hasClass('all')){
        form.find(':checkbox').prop('checked', stat);
    } else {
        //单个复选框切换状态时，改变“全部”复选框的状态
        if(form.find(':checkbox:not(.all)').length > form.find(':checked:not(.all)').length){
            form.find('.all:checkbox').prop('checked', false);
        } else {
            form.find('.all:checkbox').prop('checked', true);
        }
    }
});
//End
});