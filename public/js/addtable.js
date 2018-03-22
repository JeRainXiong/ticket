        var chosen_week = document.getElementById("select_week").getAttribute('chosen_week');
        var chosen_user = document.getElementById("select_user").getAttribute('chosen_user');
        var current_week = document.getElementById("total").getAttribute('current_week');
        var user_info = document.getElementById("total").getAttribute('user_info');
        // var view_path = document.getElementById("data_view_path").innerHTML;
        function inquiry(){
            var slct_week = document.getElementById("select_week");
            var slct_user = document.getElementById("select_user");
            
            var value_week = slct_week.options[slct_week.selectedIndex].value;
            var value_user = slct_user.options[slct_user.selectedIndex].value;
            if(value_week =='all' && value_user == 'all'){
                alert('请至少选择一个查询信息！');
                return;
            }else if(value_week == 'all'){
                window.open ('./inquiry?inquiry_type=a_user_reports&inquiry_user=' + value_user);
            }else if(value_user == 'all'){
                window.open ('./inquiry?inquiry_type=a_week_reports&inquiry_week=' + value_week);
            }else{
            window.location.href = '?chosen_week=' + value_week + '&chosen_user=' + value_user;
            }
        }

        function submitForm(){
            if(!confirm("确认提交？"))return;
            var slct_week = document.getElementById("select_week");
            var slct_user = document.getElementById("select_user");
            var value_week = slct_week.options[slct_week.selectedIndex].value;
            var value_user = slct_user.options[slct_user.selectedIndex].value;
            if(user_info != value_user || current_week !=value_week){
                alert("只能提交/修改当前周本人的周志!");
                return;
            }

            var job_tr = document.getElementsByClassName('job_tr');
            var plan_tr = document.getElementsByClassName('plan_tr');
            var job_json =[];
            var plan_json = [];
            for (var i = 0; i < job_tr.length; i++) {//录入job
                var tr = job_tr[i];
                var job_content = tr.getElementsByTagName('input')[0].value;
                var progress = tr.getElementsByTagName('input')[1].value;
                progress = progress.replace('%','');
                if(isNaN(progress) || progress > 100 || progress < 0){
                    alert("百分比应介于[0,100]!");
                    return;
                }
                var description = tr.getElementsByTagName('textarea')[0].value;
                var job_id = tr.getAttribute('job_id');
                if(job_content != '' || progress != '' || description != ''){
                    var one_job = {};
                    one_job['job_content'] = job_content;
                    one_job['progress'] = progress;
                    one_job['description'] = description;
                    if(!isNaN(job_id) && job_id != '') one_job['job_id'] = job_id;
                    job_json.push(one_job);
                }
            }            
            for (i = 0; i < plan_tr.length; i++) {
                tr = plan_tr[i];
                var plan_content = tr.getElementsByTagName('input')[0].value;
                var plan_id = tr.getAttribute('plan_id');
                if(plan_content != ''){
                    var one_plan = {};
                    one_plan['plan_content'] = plan_content;
                    if(!isNaN(plan_id) && plan_id != '') one_plan['plan_id'] = plan_id;
                    plan_json.push(one_plan);
                }
            }

            var job_str = "{\"job\" : " + JSON.stringify(job_json) + '}';
            var plan_str = "{\"plan\" : " + JSON.stringify(plan_json) + '}';
            var form = $('#main_form');
            var vir_job_input = "<input name = 'job' type='hidden' value = '" + job_str +"' />";
            var vir_plan_input = "<input name = 'plan' type='hidden' value = '" + plan_str +"' />";
            form.append(vir_job_input,vir_plan_input);//虚拟表单
            form.attr('action','./submit?chosen_week=' + value_week + '&chosen_user=' + value_user);
            form.submit();
            $('#button_submit').attr('disabled','disabled');//防止多次提交
        }
        function disabled(){
            if(chosen_user != user_info || chosen_week != current_week){
                $('#button_submit').attr('disabled','disabled');
                $('input').attr('disabled','disabled');
                $('textarea').attr('disabled','disabled');
                $('.add_job,.add_plan,.del').unbind();
            }
        }
        $.fn.extend({
            clickDelTr:function(){
                this.unbind().click(function(){//在自定义函数中不需要$()
                    if(confirm('删除此行?')){
                        var tr = $(this).parent().parent();
                        var type = tr.attr('class');
                        if(type == 'job_tr'){
                            id = tr.attr('job_id');
                            del_type = 'job_id';
                        }
                        if(type == 'plan_tr'){
                            id = tr.attr('plan_id');
                            del_type = 'plan_id'
                        }
                        
                        if (id == null || id ==''){
                            tr.remove();
                            return;
                        }
                        window.location.href = './delete?' + del_type + '=' + id;
                        $(this).unbind();//防止多次点击
                    }
                });

                return this;
            },
            textareaAutoHeight:function(){
                this.css ('height',this.prop('scrollHeight') + 'px');
                this.unbind().bind("input propertychange",function(){
                    $(this).css ('height',$(this).prop('scrollHeight') + 'px');
                });
                return this;
            }

        })


        $(function(){
            
            $('.add_job').click(function(){
                var new_tr;
                var row;
                var next_tr;
                var tr = $('thead tr');

                tr.each(function(){
                    row = parseInt($(this).attr('row')) + 1;
                    next_tr = $(this).next();
                    if(row == next_tr.attr('row')) return true;//如果y有下个元素，则进行下轮循环
                    new_tr  = "<tr class = 'job_tr' row = '" + row + "'>"
                                + "<td>" 
                                + "<div class = 'div-tr'>"    
                                    + "<div class = 'div-tr-left'>" + row + "、</div>"
                                    + "<div class = 'div-tr-right'><input class = 'job_content' value = ''/></div>"
                                + "</div>"
                                + "</td>"
                                + "<td><input class = 'job_progress' value = ''/></td>"
                                + "<td><textarea class = 'job_description'></textarea></td>"
                                + "<td><a href = 'javascript:;' class = 'del del_job'><span class='glyphicon glyphicon-remove'</span></a></td>"
                            + "</tr>";
                    $(this)
                    .after(new_tr)
                    .next()
                        .find('textarea').textareaAutoHeight()
                    .end()
                        .find('.del').clickDelTr()
                    ;

                    return false;
                });
            });

            $('.add_plan').click(function(){
                var new_tr;
                var row;
                var next_tr;
                var tr = $('tbody tr')
                tr.each(function(){
                    row = parseInt($(this).attr('row')) + 1;
                    next_tr = $(this).next();
                    if(row == next_tr.attr('row')) return true;//如果y有下个元素，则进行下轮循环
                    new_tr  = "<tr class = 'plan_tr' row = '" + row + "'>"
                                + "<td colspan = '3'>" + row +"、<input class = 'plan_content' value = ''/></td>"
                                + "<td><a href = 'javascript:;' class = 'del del_plan'><span class='glyphicon glyphicon-remove'></span></a></td>"
                            + "</tr> ";
                    $(this)
                    .after(new_tr)
                    .next().find('.del').clickDelTr();
                    return false;
                });

            });
            $('#button_inquiry').click(function(){
                inquiry();
            });
            $('#button_submit').click(function(){
                submitForm();
            });            
            $('#select_user,#select_week').change(function(){
                var slct_week = document.getElementById("select_week");
                var slct_user = document.getElementById("select_user");
                var value_week = slct_week.options[slct_week.selectedIndex].value;
                var value_user = slct_user.options[slct_user.selectedIndex].value;
                if(value_week =='all' || value_user == 'all'){
                    return;
                } else {
                    inquiry();
                }  
            });
            $('.del').clickDelTr();
            $('textarea').textareaAutoHeight();
            disabled();
        });
