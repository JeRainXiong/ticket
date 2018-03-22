<?php
/**
 *  @author 熊泽雨

 */
class SearchServiceModel{
/**
 * return array
 */
    function searchConcert($key_word,$page = 1,$perpage =10){

        $md = new ConcertModel();
        $table = 'concert';
        $whereArray = [
            'concert_name'=>[
                'field' => 'concert_name',
                'operator' => ' LIKE ',
                'value' => $key_word,
            ]
        ];
        $opt = [
             'fields' => "*",     //字段列表
            'where' => $whereArray,
            'page' => $page,       //第几页
            'perpage' => $perpage        //每页多少条            
        ];
        return $md->find($opt,$table);
    }

}
