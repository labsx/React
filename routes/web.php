<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route:view('/{path?}', 'welcome')->where('path', '^(?!api).*$');
// Route:view('/{path?}', 'welcome');
// Route:view('/{any}', 'welcome');

Route::any('{all}', function () {
    return view('welcome');
})
    ->where(['all' => '.*']);
