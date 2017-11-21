<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/testVueJs', function () {
    return view('test');
});
Route::get('/slide', function () {
    return view('slide');
});
Route::get('/show', function () {
    return view('showAndHide');
});
Route::get('/jump', function () {
    return view('jump');
});