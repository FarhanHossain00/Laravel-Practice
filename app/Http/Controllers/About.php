<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class About extends Controller
{
    //return string
    function show(){
        $name="Farhan";
        return view('about',['nm'=>$name ]);
    }

    function show2(){
        $name="and data2";
        return view('about2',['nm'=>$name]);
    }

}
