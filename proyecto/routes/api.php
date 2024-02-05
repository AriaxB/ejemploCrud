<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(UserController::class)->group(function(){
    Route::get('/users', 'users');
    Route::get('/users/{id}', 'showUser');
    Route::post('/users', 'register');
    Route::put('/users/{id}', 'updateUser');
    Route::delete('/users/{id}', 'deleteUser');
});
Route::controller(ProductController::class)->group(function(){
    Route::get('/prods', 'index');
    Route::get('/prods/{id}', 'showProd');
    Route::post('/prods', 'addProduct');
    Route::put('/prods/{id}', 'updateProduct');
    Route::delete('/prods/{id}', 'deleteProduct');
});

Route::post('/loginUser', [UserController::class, 'login']);

